import {
  categoryService,
  subCategoryService,
} from '../services/index.services.js'
import createCategoryController from './category/category.controller.js'
import createSubCategoryController from './subCategory/subCategory.controller.js'

const categoryController = createCategoryController({ categoryService })
const subCategoryController = createSubCategoryController({
  categoryService,
  subCategoryService,
})

export { categoryController }
