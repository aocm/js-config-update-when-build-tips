const fs = require('fs');

const text = `
const hoge1 = ${process.env.HOGE_1};
const hoge2 = ${process.env.HOGE_2};
const hoge3 = ${process.env.HOGE_3};
const hoge4 = ${process.env.HOGE_4};
const hoge5 = ${process.env.HOGE_5};
const hoge6 = ${process.env.HOGE_6};
`

try {
    fs.writeFileSync("config.js", text);
    console.log('write end');
} catch (e) {
    console.log(e);
}