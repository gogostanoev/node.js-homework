import fsPromises from "fs/promises";


const writeToFile = async (path, data) => {
    await fsPromises.writeFile(path, data);
};



const readFromFile = async (path) => {
    const content = await fsPromises.readFile(path, {encoding: "utf-8"});

    return content;
};



const appendToFile = async (path, data) => {
    await fsPromises.appendFile(path, data);
};



const viewBlog = async (path) => {

    const rawData = await readFromFile(path);

    const parsedData = JSON.parse(rawData);

    return parsedData
};



export default {
    writeToFile,
    viewBlog,
    appendToFile
};