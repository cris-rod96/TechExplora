import { Category, SubCategory } from '../libs/conn.js'
import createCategoryService from './category/category.service.js'
import createSubCategoryService from './subCategory/subCategory.service.js'

const categoryService = createCategoryService({ Category, SubCategory })
const subCategoryService = createSubCategoryService({ SubCategory })

export { categoryService, subCategoryService }
