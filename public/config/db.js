const MongoClient = require('mongodb').MongoClient;

module.exports = (req, res) => {
    let register = req.body;
    MongoClient.connect('mongodb://leovidaluser:WAch5zA79pxp@ds139352.mlab.com:39352/leovidal', (err, database) => {
        if (database) {
            let db = database.db('leovidal');
            db.collection('tracking').save(register, (err, result) => {})
        }
    })
    res.sendStatus(200);
}
