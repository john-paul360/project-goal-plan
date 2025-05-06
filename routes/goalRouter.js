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
router.get("/:goalid", getSingleGoal);
router.patch("/:goalid", updateGoal);
router.delete("/:goalid", deleteGoal);


module.exports = router;