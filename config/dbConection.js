const mysql = require('mysql');

let conn = function () {

    return mysql.createConnection({
        host: "dbdeleloper.cl6wjwbjzvws.us-east-2.rds.amazonaws.com",
        user: "root",
        password: "08031955",
        database: "Artigos"
    });
}

module.exports = function () {
    return conn
};

