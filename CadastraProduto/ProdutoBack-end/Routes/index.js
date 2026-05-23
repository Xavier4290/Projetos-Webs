import express from 'express'
import routesProdutos from '../Routes/produtoRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) =>
        res.status(200).send("Back-end criado com sucesso!")
    )

    app.use(express.json())
    app.use(routesProdutos)
}

export default routes;