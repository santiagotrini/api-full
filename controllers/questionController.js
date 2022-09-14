import Question from '../models/Question.js';

const getAllQuestions = (req, res) => {
  Question.find((err, questions) => {
    res.status(200).json(questions);
  });
};
const getQuestionById = (req, res) => {
  Question.findById(req.params.id, (err, question) => {
    res.status(200).json(question);
  });
};
const createQuestion = (req, res) => {
  const { text, answers } = req.body;
  const question = new Question({ text, answers });
  question.save((err, question) => {
    res.status(201).json(question);
  });
};
const updateQuestion = (req, res) => {
  const id = req.params.id;
  const { text, answers } = req.body;
  const question = { text, answers };
  const options = {
    new: true
  };
  Question.findByIdAndUpdate(id,question,options, (err, question) => {
    res.status(200).json(question);
  });
};
const deleteQuestion = (req, res) => {
  Question.findByIdAndDelete(req.params.id, err => {
    const msg = { text: 'pregunta borrada' };
    res.status(200).json(msg);
  });
};

const controller = {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion
};

export default controller;
