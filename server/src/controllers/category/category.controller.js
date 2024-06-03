const createCategoryController = ({ categoryService }) => {
  const getAllCategories = async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories()
      return res.status(200).json({ categories })
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Error interno en el servidor: ${error.message}` })
    }
  }

  return { getAllCategories }
}

export default createCategoryController
