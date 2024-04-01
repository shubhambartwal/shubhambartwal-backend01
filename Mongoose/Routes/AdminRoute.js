const { Router } = require("express");
const adminMiddleware = require("../Middleware/adminMiddleware");
const Admin = require("../DB/Admin.model");
const router = Router();
// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    username: username,
    password: password,
  }).then(function () {
    res.json({ message: "Admin created successfully" });
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
