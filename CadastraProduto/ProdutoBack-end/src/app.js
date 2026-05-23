import conectaDB from '../src/config/connection.js'
import routes from '../Routes/index.js'
import express from 'express'
import cors from 'cors'

const conexao = conectaDB()

const app = express()
app.use(cors())
app.use(express.json())
routes(app)

export default app;