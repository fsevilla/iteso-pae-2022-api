const res = require('express/lib/response');
const Database = require('./../../core/database');

class Channel {

    collection;
    constructor(){
        //set collection
        this.collection = Database.collection('channels');
    }

    getAll(){
        return new Promise((success, reject) =>{
            this.collection.find().toArray((err, results) =>{
                if(err) reject(err);
                else success(results);
            });
        })
    }
}

//nos conviene que sea clase por la herencia
module.exports = Channel;