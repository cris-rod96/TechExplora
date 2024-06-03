import { Sequelize } from 'sequelize'
import { config } from '../config/index.js'

const sequelize = new Sequelize(config.URI_DATABASE, {
  logging: false,
  native: false,
})



export {sequelize}