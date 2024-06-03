import { categoryController } from '../controllers/index.controllers.js'
import createCategoryRouter from './category/category.route.js'

const createRouter = ({ express }) => {
  const rootRouter = express.Router()

  rootRouter.use(
    '/categories',
    createCategoryRouter({ categoryController, express })
  )

  return rootRouter
}

export default createRouter
