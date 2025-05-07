const router = require("express").Router();

const {
  createoal,
  getAllGoals,
  getOngoingGoals,
  getCompletedGoals,
  getSingleGoal,
  updateGoal,
  deleteGoal,
  createGoal,
} = require("../controllers/goalController");

router.post("/", createGoal);
router.get("/", getAllGoals);
router.get("/ongoing", getOngoingGoals);
router.get("/completed", getCompletedGoals);
router.get("/:goalId", getSingleGoal);
router.patch("/:goalId", updateGoal);
router.delete("/:goalId", deleteGoal);

module.exports = router;
