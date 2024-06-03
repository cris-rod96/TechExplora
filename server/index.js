import server from './src/server.js'
import { config } from './src/config/index.js'

server.listen(config.PORT, () => {
  console.log(`Server listening in port: http://localhost:${config.PORT}`)
})
