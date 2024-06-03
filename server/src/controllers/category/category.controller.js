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

  const createCategory = async (req, res) => {
    try {
      const { name } = req.body
      if (!name)
        return res
          .status(400)
          .json({ message: 'El nombre de la categoría es obligatorio' })
      const { category, created } = await categoryService.createCategory({
        name,
      })
      return created
        ? res.status(201).json({
            message: `${category.name} creada con éxito`,
          })
        : res.status(400).json({
            message: `La categoría ${category.name} ya existe`,
          })
    } catch (error) {
      return res.status(500).json({
        message: `Error interno del servidor: ${error.message}`,
      })
    }
  }
  const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params
      if (!id)
        return res.status(400).json({
          message: 'El id de la categoría es obligatorio',
        })
      const categoryDeleted = await categoryService.deleteCategory(id)
      return categoryDeleted
        ? res.status(200).json({
            message: `Categoría ${categoryDeleted.name} eliminada con éxito`,
          })
        : res.status(404).json({
            message: 'Categoría no encontrada. No se pudo borrar',
          })
    } catch (error) {
      return res.status(500).json({
        message: `Error interno en el servidor: ${error.message}`,
      })
    }
  }

  return { getAllCategories, createCategory, deleteCategory }
}

export default createCategoryController
