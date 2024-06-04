const createSubCategoryRouter = ({ subCategoryController, express }) => {
  const subCategoryRouter = express.Router()

  // subCategoryRouter.get('/', subCategoryController.getAllCategories)
  subCategoryRouter.post('/', subCategoryController.createSubCategory)
  // subCategoryRouter.delete('/delete/:id', subCategoryController.deleteCategory)
  return subCategoryRouter
}

export default createSubCategoryRouter
