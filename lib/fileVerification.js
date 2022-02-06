const fs = require('fs');

module.exports.ifExistsDelete = ifExistsDelete;

function ifExistsDelete(path) {
    fs.access(path, error => {
        if (!error) {
            fs.rmSync(path);
        }
    });
}