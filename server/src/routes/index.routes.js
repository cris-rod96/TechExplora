import {
  categoryController,
  subCategoryController,
} from '../controllers/index.controllers.js'
import createCategoryRouter from './category/category.route.js'
import createSubCategoryRouter from './subCategory/subCategory.controller.js'

const createRouter = ({ express }) => {
  const rootRouter = express.Router()

  rootRouter.use(
    '/categories',
    createCategoryRouter({ categoryController, express })
  )
  rootRouter.use(
    '/subCategories',
    createSubCategoryRouter({ subCategoryController, express })
  )

  return rootRouter
}

export default createRouter
