const nodemailer = require('nodemailer');
const emailpass  = process.env.EMAILPASS;

const config = {
    port: 80,
    header: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); //res.header("Access-Control-Allow-Origin", "http://localhost");
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header('Access-Control-Allow-Headers', '*'); // res.header( 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept' );
        next();
    },
    transporter : nodemailer.createTransport({
        host: 'smtp.sipedi.net',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'webmaster@sipedi.net',
            pass: emailpass
        },
        tls: {
            rejectUnauthorized: false // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        }
    })
}

module.exports = { ...config }
