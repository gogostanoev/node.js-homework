// Mal test, ovoj file e povrzan so dummy_folder

const fs = require("fs")

const writeFile = (path, data) => {
    fs.writeFileSync(path, data);
};

const appendFile = (path, data) => {
    fs.appendFileSync(path, data)
};

const readFile = (path) => {
    const info = fs.readFileSync(path, {encoding: "utf-8"})

    return info
}


module.exports = {
    write: writeFile,
    append: appendFile,
    read: readFile
}