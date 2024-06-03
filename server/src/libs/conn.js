import { Sequelize } from 'sequelize'
import { config } from '../config/index.js'
import {
  CategoryModel,
  SubCategoryModel,
  ConceptModel,
  UserModel,
} from '../models/index.models.js'
const sequelize = new Sequelize(config.URI_DATABASE, {
  logging: false,
  native: false,
})

CategoryModel(sequelize)
SubCategoryModel(sequelize)
ConceptModel(sequelize)
UserModel(sequelize)

const { Category, SubCategory, Concept, User } = sequelize.models

Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)

SubCategory.hasMany(Concept)
Concept.belongsTo(SubCategory)

export { sequelize, Category, SubCategory, Concept, User }
