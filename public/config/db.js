// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// const DBPASS_ENV = process.env.DBPASS || '';
// const NODE_ENV = process.env.NODE_ENV || 'dev';

// module.exports = (req, res) => {

// 	if (NODE_ENV !== 'production') { // if dev-mode no tracking
// 		res.sendStatus(200);
// 		return;
// 	}

// 	let { id, trackingObj } = req.body;

// 	MongoClient.connect(`mongodb://leovidaluser:${DBPASS_ENV}@ds139352.mlab.com:39352/leovidal`, (err, database) => {
// 		if (database) {
// 			let db = database.db('leovidal');
// 			let collection = db.collection('tracking');
// 			if(id) { // id already exists
// 				collection.update(
// 					{ _id: new ObjectID(id) },
// 					{ $push: { data: trackingObj } }, { upsert : true}, () =>{
// 						res.send(id);
// 						database.close();
// 					});
// 			} else { // if id doesn`t exist
// 				collection.insertOne({ data: [trackingObj]}, (err, result) => {
// 					if(result) {
// 						res.send(result.insertedId);
// 						database.close();
// 					}
// 				})
// 			}
// 		} else {
// 			res.sendStatus(200);
// 		}
// 	})
// }
