import express from "express";
import UserController from "../Controllers/UserController.js";

const UsersRouter = express.Router();

UsersRouter.get("/", UserController.getAll);
//UsersRouter.get("/:id", UserController.getById);
//UsersRouter.post("/", UserController.add);
// TasksRouter.put("/:id", TasksController.update);
// TasksRouter.delete("/:id", TasksController.delete);

export default UsersRouter;