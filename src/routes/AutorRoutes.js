import express from "express"
import AutorController from "../controllers/AutorController.js";

const routes = express.Router()

routes.get("/autores",AutorController.listarAutores);
routes.get("/autores/:id",AutorController.listarAutorPorId);
routes.post("/autores",AutorController.cadastrarAutor);
routes.put("/autores/:id",AutorController.atualizarAutor);
routes.delete("/autores/:id",AutorController.deletarAutor);

export default routes