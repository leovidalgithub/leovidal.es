node.js

// app.get('/', (req, res, next) => { // localhost:3000/?URL_ENV=development
// 	global.URL_ENV = req.query.URL_ENV || 'production';
// 	next();
// });

// app.get('/env', (req,res) => res.send({'NODE_ENV':process.env.NODE_ENV}));
// app.post('/tracking', db);

> tracking

```
let { id, trackingObj } = req.body;
	MongoClient.connect(`mongodb://leovidaluser:${DBPASS_ENV}@ds139352.mlab.com:39352/vidal`, (err, database) => {
		if (database) {
			let db = database.db('leovidal');
			let collection = db.collection('tracking');
			if(id) { // id already exists
				collection.update(
					{ _id: new ObjectID(id) },
					{ $push: { data: trackingObj } }, { upsert : true}, () =>{
						res.send(id);
						database.close();
					});
			} else { // if id doesn`t exist
				collection.insertOne({ data: [trackingObj]}, (err, result) => {
					if(result) {
						res.send(result.insertedId);
						database.close();
					}
				})
			}
		} else {
			res.sendStatus(200);
		}
	})
}
