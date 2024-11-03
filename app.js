import express from "express";
import route from "./template/routers/router.js";

import connectDB from "./template/db/connectDB.js";
process.loadEnvFile();

// create a instance of express application and store it in app variable
const app = express();

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(route);

// call connectDB function to connect with database
connectDB();
// server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
