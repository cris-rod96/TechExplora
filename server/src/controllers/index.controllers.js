import { categoryService } from '../services/index.services.js'
import createCategoryController from './category/category.controller.js'

const categoryController = createCategoryController({ categoryService })

export { categoryController }
