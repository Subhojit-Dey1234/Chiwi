const path = require("path");
const multer = require("multer");
const router = require("express").Router();
const StudentAcheivements = require('./StudentAchievements')
const StudentGrievance = require('./StudentGrievance')



router.use('/acheivements',StudentAcheivements)
router.use('/grievances',StudentGrievance)


module.exports = router