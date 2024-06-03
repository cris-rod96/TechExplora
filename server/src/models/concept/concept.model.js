import { DataTypes } from 'sequelize'

const ConceptModel = (sequelize) => {
  sequelize.define(
    'Concept',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      state: {
        type: DataTypes.ENUM,
        values: ['Oficial', 'Experimental', 'Deprecado'],
        defaultValue: 'Oficial',
      },
      linkTech: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      SUbCategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'SubCategories',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ConceptModel
