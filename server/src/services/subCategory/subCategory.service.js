import { Op } from 'sequelize'

const createSubCategoryService = ({ SubCategory }) => {
  const createSubCategory = async ({ name, CategoryId }) => {
    const [subCategory, created] = await SubCategory.findOrCreate({
      where: { name: { [Op.iLike]: `%${name}%` } },
      defaults: { name, CategoryId },
    })

    return { subCategory, created }
  }

  return { createSubCategory }
}

export default createSubCategoryService
