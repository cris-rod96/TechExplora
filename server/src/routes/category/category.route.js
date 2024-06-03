const createCategoryRouter = ({ categoryController, express }) => {
  const categoryRouter = express.Router()

  categoryRouter.get('/', categoryController.getAllCategories)
  categoryRouter.post('/', categoryController.createCategory)
  categoryRouter.delete('/delete/:id', categoryController.deleteCategory)
  return categoryRouter
}

export default createCategoryRouter
