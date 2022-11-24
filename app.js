//core module
//file system
const fs = require('fs');

//menuliskan string ke file (synchronous)
//fs.writeFileSync('menamai file', 'isi konten file')

fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
    fs.writeFileSync('test.txt', data+='\nini new line')
});