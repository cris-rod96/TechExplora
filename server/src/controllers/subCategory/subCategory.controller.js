const createSubCategoryController = ({
  categoryService,
  subCategoryService,
}) => {
  const createSubCategory = async (req, res) => {
    try {
      const { name, CategoryId } = req.body
      const categoryExist = await categoryService.getCategoryById({
        id: CategoryId,
      })
      if (!categoryExist)
        return res.status(400).json({
          message: 'La categoría no es una categoría válida',
        })

      const [subCategory, created] = await subCategoryService.createSubCategory(
        { name, CategoryId }
      )

      return created
        ? res.status(201).json({
            message: 'SubCategoría creada con éxito',
          })
        : res.status(400).json({
            message: 'Categoría duplicada',
          })
    } catch (error) {
      return res.status(500).json({
        message: `Error interno en el servidor: ${error.message}`,
      })
    }
  }

  return { createSubCategory }
}

export default createSubCategoryController
