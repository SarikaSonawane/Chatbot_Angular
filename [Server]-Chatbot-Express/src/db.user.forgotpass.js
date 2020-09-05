const Promise = require("bluebird");
const mysql = require("mysql");
const { resolve } = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "192.168.111.129",
    user: "root",
    password: "root",
    database: "End_Module_Exam"
}

let forgotPassword = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let selectUserQuery = "update user set password = ? where email = ?";

    let result = await connection.queryAsync(selectUserQuery, [input.password, input.email]);

    await connection.endAsync();

    return Promise.resolve(result);
}

module.exports = { forgotPassword }
