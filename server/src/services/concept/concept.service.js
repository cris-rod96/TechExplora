import { Op } from 'sequelize'

const createConceptService = ({ Concept }) => {
  const createConcept = async ({ concept }) => {
    const [newConcept, created] = await Concept.findOrCreate({
      where: { title: { [Op.like]: `%${concept.title}%` } },
      defaults: { ...concept },
    })
    return { newConcept, created }
  }

  return { createConcept }
}

export default createConceptService
