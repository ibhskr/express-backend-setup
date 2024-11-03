import fs from "fs";
import path from "path";

// Resolve paths relative to the current working directory
const ActualPath = process.cwd();
// console.log(ActualPath);
const basePath = `${ActualPath}/../`;

const dirs = [
  path.join(basePath, "src"),
  path.join(basePath, "src/config"),
  path.join(basePath, "src/controllers"),
  path.join(basePath, "src/db"),
  path.join(basePath, "src/models"),
  path.join(basePath, "src/routers"),
];

// Create directories if they don't exist
dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`${dir} created successfully.`);
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
copyFile(
  "./template/controllers/controller.js",
  path.join(basePath, "src/controllers/controller.js")
);
copyFile(
  "./template/db/connectDB.js",
  path.join(basePath, "src/db/connectDB.js")
);
copyFile(
  "./template/models/model.js",
  path.join(basePath, "src/models/model.js")
);
copyFile(
  "./template/routers/router.js",
  path.join(basePath, "src/routers/router.js")
);

// Copy other necessary files
copyFile("./app.js", path.join(basePath, "app.js"));
copyFile("./.env", path.join(basePath, ".env"));
