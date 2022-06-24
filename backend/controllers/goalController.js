const asyncHandler = require("express-async-handler");

// @desc   Get Goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get goals",
  });
});

// @desc   Set Goals
// @route  Post /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  //console.log(req.body.text);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    message: "goal created",
  });
});

// @desc   Update Goals
// @route  Put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update goal ${req.params.id}`,
  });
});

// @desc   Delete Goals
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
