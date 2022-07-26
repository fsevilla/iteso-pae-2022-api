const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const apiRoutes = require('./src/routes');
const app = express();
const port = process.env.PORT || 3000;

MongoClient.connect('mongodb+srv://sysdba:sysdba@cluster0.fq3vo.mongodb.net/expressApp?retryWrites=true&w=majority', {useUnifiedTopology: true}, (err, client) =>{
    if(err){
        console.log('Could not connect to the database', err);
    } else{
        const db = client.db(); 
        const collection = db.collection('channels');
        // console.log('Database', db, collection);
        collection.find({}).toArray((err, results) => {
        if(err) {
            console.log('Algo falló', err);
        } else {
            console.log('Resultados', results);
        }
    });
    }
})


app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);


const indexPath = path.join(__dirname, 'src', 'index.html');
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});


app.listen(port, function() {
    console.log(`app is running in port ${port}...`);
});
