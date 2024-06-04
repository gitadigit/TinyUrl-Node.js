import express from "express";
import LinkController from "../Controllers/LinkController.js";

const LinkRouter = express.Router();

LinkRouter.get("/", LinkController.getAll);
LinkRouter.get("/:id", LinkController.getById);
LinkRouter.post("/", LinkController.addLink);
LinkRouter.put("/:id", LinkController.updateLink);
LinkRouter.delete("/:id", LinkController.deleteLink);
//LinkRouter.post('/:id/click',LinkController.addClick)
LinkRouter.get('/redirect/:id', LinkController.redirectLink); 
export default LinkRouter;
