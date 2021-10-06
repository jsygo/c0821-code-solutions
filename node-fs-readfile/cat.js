const fs = require('fs');

const textArr = [];
for (let i = 2; i < process.argv.length; i++) {
  textArr.push(null);
}

for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(`./${process.argv[i]}`, 'utf8', (err, text) => {
    if (err) throw err;
    textArr[i - 2] = text;
    if (!textArr.includes(null)) {
      for (let j = 0; j < textArr.length; j++) {
        console.log(textArr[j]);
      }
    }
  });
}
