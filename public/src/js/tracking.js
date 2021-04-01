let sendTracking = (stage) => {
	$.get('http://freegeoip.net/json/', callback.bind(null, stage));
};

const callback = (stage, data) => {
	let trackingObj = {
		city: data.city,
		country_name: data.country_name,
		ip: data.ip,
		region_name: data.region_name,
		time_zone: data.time_zone,
		zip_code: data.zip_code,
		time: new Date().getTime(),
		stage: stage
		// country_code: data.country_code,
		// region_code: data.region_code,
	};
	if (typeof (Storage) !== "undefined") { // browser localStorage available
		let localuserid = localStorage.getItem('localuserid') || null;

		$.post(buildURL('tracking'), { id: localuserid, trackingObj: trackingObj }, (insertedId) => {
			if (insertedId) {
				localStorage.setItem('localuserid', insertedId); // save on localStorage userId whether or not already exists
			}
		}, 'json');
	};
};