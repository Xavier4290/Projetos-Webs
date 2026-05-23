import express from 'express'
import ProdutoController from '../src/controller/produtoController.js'

const routes = express.Router();

routes.get("/produtos", ProdutoController.buscarProduto)
routes.get("/produtos/:id", ProdutoController.buscarProdutoPorId)
routes.post("/produtos", ProdutoController.criarProduto)
routes.put("/produtos/:id", ProdutoController.atualizarProduto)
routes.delete("/produtos/:id", ProdutoController.deletarProduto)

export default routes;