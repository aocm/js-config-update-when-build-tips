const fs = require('fs');
const config = require('./config-for-test');

try {
    const file = fs.readFileSync('config.js', { encoding: 'utf8' });
    console.log(file)
} catch (err) {
}

console.log(config)
// 成功するはず（ログには出ない）
console.assert(config.hoge1 === process.env.HOGE_1, '\nact: ' + config.hoge1 + '\nexp: ' + process.env.HOGE_1);
// 失敗するはず
// Assertion failed: 
// act: hoge1
// exp: dummy
console.assert(config.hoge1 === 'dummy', '\nact: ' + config.hoge1 + '\nexp: ' + 'dummy');