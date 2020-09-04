const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "192.168.111.129",
    user: "root",
    password: "root",
    database: "End_Module_Exam"
}

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let addUserQuery = "INSERT INTO user(mobile_no, username, email, password) VALUES(?, ?, ?, ?)";

    await connection.queryAsync(addUserQuery, [input.mobile, input.username, input.email, input.password]);

    await connection.endAsync();
}

module.exports = { addUser }
