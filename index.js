const server = require("./src/server");
const connection = require("./src/db.connection")
// const log = require("./src/logger");
const dbAssociation = require("./src/model");

connection.authenticate().then(() => {
    dbAssociation();
    connection.sync({force: true}).finally(); // Membuat Table secara otomatis
    server.listen(process.env.APP_PORT, process.env.APP_HOST, function () {
        if (server.listening) {
            console.log(`Example app listening on port http://localhost:${process.env.APP_PORT}`)
        }
    });
})
