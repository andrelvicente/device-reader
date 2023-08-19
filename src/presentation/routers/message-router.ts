import express from 'express'
import { Request, Response } from 'express'
import { CreateMessageUseCase } from '../../domain/interfaces/use-cases/create-message-use-case'
import { GetAllMessagesUseCase } from '../../domain/interfaces/use-cases/get-all-messages-use-case'


export default function MessagesRouter(
    getAllMessagesUseCase: GetAllMessagesUseCase,
    createMessageUseCase: CreateMessageUseCase
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const messages = await getAllMessagesUseCase.execute()
            res.send(messages)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createMessageUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            console.log(err.message)
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}