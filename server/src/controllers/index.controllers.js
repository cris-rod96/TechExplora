import {
  categoryService,
  subCategoryService,
  conceptService,
} from '../services/index.services.js'
import createCategoryController from './category/category.controller.js'
import createConceptController from './concept/concept.controller.js'
import createSubCategoryController from './subCategory/subCategory.controller.js'

const categoryController = createCategoryController({ categoryService })
const subCategoryController = createSubCategoryController({
  categoryService,
  subCategoryService,
})

const conceptController = createConceptController({
  subCategoryService,
  conceptService,
})

export { categoryController, subCategoryController }
