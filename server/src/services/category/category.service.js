const createCategoryService = ({ Category, SubCategory }) => {
  const getAllCategories = async () => {
    const categories = await Category.findAll({
      where: {
        isDeleted: false,
      },
      include: [SubCategory],
    })
    return categories
  }

  const createCategory = async ({ category }) => {
    const [newCategory, created] = await Category.findOrCreate({
      where: { name: { [Op.iLike]: `%${category.name}%` } },
      defaults: { ...category },
    })
    return { newCategory, created }
  }

  const deleteCategory = async (id) => {
    const category = await Category.findOne({
      where: { id },
    })
    if (!category) return null
    category.isDeleted = true
    await category.save()
    return category
  }

  return {
    getAllCategories,
    createCategory,
    deleteCategory,
  }
}

export default createCategoryService
