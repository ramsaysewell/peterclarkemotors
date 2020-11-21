// const tables = require("../index");
const config = require("../../config");
const mysql = require("mysql");
const Connection = mysql.createConnection(config.mysql);

const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query("SELECT * FROM Car", (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = {
  all,
};
