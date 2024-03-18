// console.log(process.env.TEST); // => Hello, world!
const { spawn, exec } = require("child_process");
process.env.TEST = "Hello, world!";


// const child = spawn("echo", [process.env.TEST], { env: process.env });
// child.stdout.on("data", (data) => {
//   console.log(data.toString()); // => Hello, world!
// });


exec("node sample.js", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
});