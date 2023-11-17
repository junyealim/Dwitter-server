import Mongoose from 'mongoose';
import { config } from '../config.js';

export async function connectDB() {
    return Mongoose.connect(config.db.host)
}

// const pool = mysql.createPool({
//     host: config.db.host,
//     user: config.db.user,
//     database: config.db.database,
//     password: config.db.password
// });

export function useVirtualId(schema){
    schema.virtual('id').get(function(){
        return this._id.toString();
    });
    schema.set('toJSON', {virtuals: true})
    schema.set('toObject', {virtuals: true})
}

let db;
export function getTweets(){
    return db.collection('tweets')
}