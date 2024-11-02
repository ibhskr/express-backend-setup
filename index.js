import fs from "fs";

const dirs = [
  "./src",
  "./src/config",
  "./src/controllers",
  "./src/db",
  "./src/models",
  "./src/routers",
];

// Create directories if they don't exist
dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Example of copying template files to the user's project
const copyFile = (source, destination) => {
  try {
    const file = fs.readFileSync(source);
    fs.writeFileSync(destination, file);
    console.log(`${destination} created successfully.`);
  } catch (err) {
    console.error(`Error creating ${destination}:`, err);
  }
};

// Copy predefined templates to the appropriate directories
copyFile("./src/controllers/controller.js", "./src/controllers/controller.js");
copyFile("./src/db/connectDB.js", "./src/db/connectDB.js");
copyFile("./src/models/model.js", "./src/models/model.js");
copyFile("./src/routers/router.js", "./src/routers/router.js");
copyFile("./app.js", "./app.js");
copyFile("./.env", "./.env");
