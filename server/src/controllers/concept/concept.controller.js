const createConceptController = ({ subCategoryService, conceptService }) => {
  const createConcept = async (req, res) => {
    try {
      const { SubCategoryId, ...concept } = req.body
      const subCategory = await subCategoryService.getSubCategoryById(id)
      if (!subCategory)
        return res.status(400).json({
          message: 'La SubCategoría ingresada no es válida',
        })
      const { newConcept, created } = await conceptService.createConcept({
        concept,
      })
      return created
        ? res.status(201).json({
            message: 'Concepto creado',
          })
        : res.status(400).json({
            message: 'Ya existe un concepto con esta temática',
          })
    } catch (error) {
      return res.status(500).json({
        message: `Error interno en el servidor: ${error.message}`,
      })
    }
  }
  return { createConcept }
}

export default createConceptController
