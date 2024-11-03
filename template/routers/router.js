import express from "express";
import { controller } from "../controllers/controller.js";

const route = express.Router(); // create a new router instance

route.get("/", controller);
// Here you can write more routes, for example:
// route.post("/another-route", anotherController);

export default route;
