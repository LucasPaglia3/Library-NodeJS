const fs = require('fs');

const createLibrary = (id, library) => {
    const libraryFile = `library-${id}.json`;
    if(fs.existsSync(libraryFile)) throw new Error('File Exists');
    fs.writeFileSync(libraryFile, JSON.stringify(library));
    return library;
};

module.exports = {createLibrary};