import express from 'express';
import controller from '../controllers/questionController.js';

const router = express.Router();

router.route('/questions')
  .get(controller.getAllQuestions)
  .post(controller.createQuestion);

router.route('/questions/:id')
  .get(controller.getQuestionById)
  .put(controller.updateQuestion)
  .delete(controller.deleteQuestion);

export default router;
