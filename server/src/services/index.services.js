import { Category, SubCategory } from '../libs/conn.js'
import createCategoryService from './category/category.service.js'

const categoryService = createCategoryService({ Category, SubCategory })

export { categoryService }
