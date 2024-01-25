// こちらを利用する場合は、事前に環境変数がconfig.jsの中に定義されている必要がある。

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'config.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

const newFileContent = fileContent
    .replace(
        /HOGE_1 =.*/,
        `HOGE_1 = ${process.env.HOGE_1}`
    ).replace;

fs.writeFileSync(filePath, newFileContent);