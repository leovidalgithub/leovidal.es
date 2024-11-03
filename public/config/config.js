const nodemailer = require('nodemailer');
const EMAILPASS_ENV  = process.env.EMAILPASS_ENV || 'NOPASSWORD';

const config = {
	port: 80,
	header: (req, res, next) => { // https://expressjs.com/en/resources/middleware/cors.html
		res.setHeader('Access-Control-Allow-Origin', '*'); //res.header("Access-Control-Allow-Origin", "http://localhost");
		res.setHeader('Access-Control-Request-Method', '*');
		res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
		res.header('Access-Control-Allow-Headers', '*'); // res.header( 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept' );
		next();
	},
	transporter : nodemailer.createTransport({
		host: 'mail.leovidal.es',
		port: 465,
		secure: true, // use SSL
		auth: {
			user: 'leo@leovidal.es',
			pass: EMAILPASS_ENV
		},
		tls: {
			rejectUnauthorized: false // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
		}
	})
}

module.exports = { ...config }


// // config.js
// module.exports = {
// 	NODE_ENV: process.env.NODE_ENV || 'development',
// 	HOST: process.env.HOST || '127.0.0.1',
// 	PORT: process.env.PORT || 3000
//   }