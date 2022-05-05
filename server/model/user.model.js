const pool = require('../database/db');

module.exports = class UserModel{
    constructor(){
        this.response = null;
    }
    create(table, fields, values, decoys){
        pool.query(`INSERT INTO ${table} (${fields}) VALUES (${decoys})`, values, (err, result) => {
            if(err) this.response = err;
            this.response = result;
        });
    }
    selectAll(table, callback){
        pool.query(`SELECT * FROM ${table}`, (err, result) => {
            if(err) return callback(err);
            this.response = result;
        });
    }
    selectOne(table,condition,clause,callback){
        pool.query(`SELECT * FROM ${table} WHERE ${condition} = ?`,clause, (err, result) => {
            if(err) return callback(err);
            this.response = result;
        });
    }
    update(table,fields,values,condtion,callback){
        pool.query(`UPDATE ${table} set ${fields} WHERE ${condtion} = ?`,values, (err, result) => {
            if(err) return callback(err);
            this.response = result;
        });
    }
    delete(table,field,value,callback){
        pool.query(`DELETE FROM ${table} WHERE ${field} = ?`,value, (err, result) => {
            if(err) return callback(err);
            this.response = result;
        });
    }
}