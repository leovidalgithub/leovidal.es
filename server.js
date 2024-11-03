const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {port, header, transporter} = require('./public/config/config');

app.use(header); // cors

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req,res, next) => {
	const contactData = req.body;
	const randomMS = Math.floor(Math.random() * (1500 - 400 + 1)) + 400;

	sendThisMail(contactData, (err, data) => {
		if(err) {
			res.status(200).json({success:false,err:err});
		} else {
			setTimeout(() => {
				res.status(200).json({success:true,data:data,randomMS:randomMS});
			}, randomMS);
		}
	});
});

// ************************************ SEND EMAIL ***********************************
const sendThisMail = (data, callback) => {
	const mailOptions = {
			from    : data.email,
			to      : 'leo@leovidal.es',
			subject : `leovida.es Résumé - ${data.subject}`,
			html    : `
						<h2>CV FORM - leovidal.es</h2>
						<p>Nombre: ${data.name} </p>
						<p>Correo: ${data.email}</p>
						<p>Subject: ${data.subject} </p>
						<p>Mensaje: ${data.msg}</p>
					`
	};
	transporter.sendMail(mailOptions, callback);
}
// -----------------------------------------------------------

const server = app.listen(port, () => {
	console.log('CV running at port %s', server.address().port);
});
