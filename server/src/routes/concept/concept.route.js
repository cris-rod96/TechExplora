const createConceptRouter = ({ conceptController, express }) => {
  const conceptRouter = express.Router()

  conceptRouter.post('/', conceptController.createConcept)

  return conceptRouter
}

export default createConceptRouter
