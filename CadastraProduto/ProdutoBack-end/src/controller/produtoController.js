import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class ProdutoController {

     static async criarProduto(req, res) {
        try {
            const produtos = req.body
             
            const produto = await prisma.produto.createMany({
                data:produtos
            })
             
            res.status(201).json(produto)

        } catch (error) {
            console.log(error)
            res.status(500).json({ erro: error.message })
        }
    }

    static async buscarProduto(req, res) {
        const id = Number(req.params.id)
        const produtos = await prisma.produto.findMany();
         
        res.json(produtos)
         
    }

    static async buscarProdutoPorId(req, res) {
        const id = Number(req.params.id)
         
        const produto = await prisma.produto.findUnique({
            where: {id}
        })

        res.json(produto)
    }

    static async atualizarProduto(req, res) {
        const id = Number(req.params.id)
        const {marca, nome} = req.body

        const produtoAtualizado = await prisma.produto.update({
            where: {id},
            data: {
                marca, 
                nome
            }
        })

        res.status(200).json(produtoAtualizado)
    }

    static async deletarProduto(req, res) {
        try {
            const id = Number(req.params.id);

            await prisma.produto.delete({
                where: { id }
            });

            return res.status(200).json({
                message: "Produto deletado"
            });

        } catch (error) {

            return res.status(404).json({
                message: "Produto não existe"
            });
        }
    }
}

export default ProdutoController;
