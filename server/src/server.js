import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'

const server = express()

server.use(express.json())
server.use(cors())
server.use(cookieParser())
server.use(logger('dev'))

export default server
