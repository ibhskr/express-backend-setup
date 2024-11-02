import fs from "fs";

const dirs = [
"./src",
"./src/config",
"./src/controllers",
"./src/db",
"./src/models",
"./src/routers",
];

dirs.forEach((dir) => {
if (!fs.existsSync(dir)) {
fs.mkdirSync(dir);
}
});

let controllerFile = fs.readFileSync("./src/controllers/controller.js");
fs.writeFile("./src/controllers/controller.js", controllerFile, (err) => {
console.error(err);
});
let dbFile = fs.readFileSync("./src/db/connectDB.js");
fs.writeFile("./src/db/connectDB.js", dbFile, (err) => {
console.error(err);
});
let modelFile = fs.readFileSync("./src/models/model.js");
fs.writeFile("./src/models/model.js", modelFile, (err) => {
console.error(err);
});
let routesFile = fs.readFileSync("./src/routers/router.js");
fs.writeFile("./src/routers/router.js", routesFile, (err) => {
console.error(err);
});
let appFile = fs.readFileSync("./app.js");
fs.writeFile("./index.js", appFile, (err) => {
console.error(err);
});
let envFile = fs.readFileSync("./.env");
fs.writeFile("./.env", envFile, (err) => {
console.error(err);
});
