import { Category, SubCategory, Concept } from '../libs/conn.js'
import createCategoryService from './category/category.service.js'
import createConceptService from './concept/concept.service.js'
import createSubCategoryService from './subCategory/subCategory.service.js'

const categoryService = createCategoryService({ Category, SubCategory })
const subCategoryService = createSubCategoryService({ SubCategory })
const conceptService = createConceptService({ Concept })
export { categoryService, subCategoryService, conceptService }
