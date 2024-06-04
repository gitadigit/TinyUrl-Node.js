import express from "express";
import UserController from "../Controllers/UserController.js";

const UsersRouter = express.Router();

UsersRouter.get("/", UserController.getAll);
UsersRouter.get("/:id", UserController.getById);
UsersRouter.post("/", UserController.addUser);
UsersRouter.put("/:id", UserController.updateUser);
UsersRouter.delete("/:id", UserController.deleteUser);

export default UsersRouter;