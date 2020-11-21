const Connection = require("../index");

const all = async () => {
  return new Promise((resolve, reject) => {
    console.log("Fetching AlL Contact_Details");
    Connection.query("SELECT * FROM Contact_Details", (err, results) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = {
  all,
};
