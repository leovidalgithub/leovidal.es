const express                       = require('express');
const bodyParser                    = require('body-parser');
const app                           = express();
const { port, header, transporter } = require(`./public/config/config`);
const db                            = require('./public/config/db');

app.use(header);

app.get('/', (req, res, next) => { // localhost:3000/?URL_ENV=development
	global.URL_ENV = req.query.URL_ENV || 'production';
	next();
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/env', (req,res) => res.send({'NODE_ENV':process.env.NODE_ENV}));
app.post('/tracking', db);
app.post('/contact', (req,res,next) => {
	let contactData = req.body;
	let randomMS = Math.floor(Math.random() * (1500 - 400 + 1)) + 400;

	sendThisMail(contactData, (err, data) => {
		if(err) {
			res.status(200).json({success:false,err:err});
		} else {
			setTimeout(() => {
				res.status(200).json({success:true,data:data,randomMS:randomMS});
			},randomMS);
		}
	});
});

// ************************************ SEND EMAIL ***********************************
let sendThisMail = (data, callback) => {
	let mailOptions = {
			from    : data.email,
			to      : 'cv@leovidal.es',
			subject : `CV-${data.subject}`,
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
let server = app.listen(port, () => {
	console.log('CV running at port %s', server.address().port);
});
