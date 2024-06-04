import { Op } from 'sequelize'

const createSubCategoryService = ({ SubCategory }) => {
  const getSubCategoryById = async (id) => {
    const subCategory = await SubCategory.findByPk(id)
    return subCategory
  }

  const createSubCategory = async ({ name, CategoryId }) => {
    const [subCategory, created] = await SubCategory.findOrCreate({
      where: { name: { [Op.iLike]: `%${name}%` } },
      defaults: { name, CategoryId },
    })

    return { subCategory, created }
  }

  return { createSubCategory, getSubCategoryById }
}

export default createSubCategoryService
