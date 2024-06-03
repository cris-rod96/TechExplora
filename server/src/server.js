import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import createRouter from './routes/index.routes.js'

const server = express()

const rootRouter = createRouter({ express })

server.use(express.json())
server.use(cors())
server.use(cookieParser())
server.use(logger('dev'))

server.use('/api', rootRouter)

export default server
