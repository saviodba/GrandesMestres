const mysql = require('mysql');

let conn = function () {

    return mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: ""
    });
}

module.exports = function () {
    return conn
};

