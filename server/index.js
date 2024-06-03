import server from './src/server.js'
import { config } from './src/config/index.js'
import { sequelize } from './src/libs/conn.js'

sequelize
  .sync({ logging: false, force: true, alter: true })
  .then(() => {
    console.log('Base de datos conectada')
    server.listen(config.PORT, () => {
      console.log(`Server listening in port: http://localhost:${config.PORT}`)
    })
  })
  .catch((err) => {
    console.log(`Error en la conexión: ${err.message}`)
  })
