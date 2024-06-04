import { Op } from 'sequelize'

const createCategoryService = ({ Category, SubCategory }) => {
  const getCategoryById = async ({ id }) => {
    const category = await Category.findByPk(id)
    return category
  }
  const getAllCategories = async () => {
    const categories = await Category.findAll({
      where: {
        isDeleted: false,
      },
      include: [SubCategory],
    })
    return categories
  }

  const createCategory = async ({ name }) => {
    const [category, created] = await Category.findOrCreate({
      where: { name: { [Op.iLike]: `%${name}%` } },
      defaults: { name },
    })
    return { category, created }
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
    getCategoryById,
    createCategory,
    deleteCategory,
  }
}

export default createCategoryService
