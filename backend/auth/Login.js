const express = require("express");
const router = express.Router();
const UsersBackend = require("../models/Users.js");
// const VerifyBackend = require("../models/Verify.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Verify = require("../models/Verify.js");

// For sending Mail
const transporter = nodemailer.createTransport({
	service: "gmail",
	port: 465,
	secure: true,
	auth: {
		user: "pcgaming1882020@gmail.com",
		pass: "6gQLum2$JMEHB6",
	},
	tls: {
		rejectUnauthorized: false,
	},
});
// transporter.sendMail(info,(err,success)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Success")
//     }
// })

router.post("/login", async (req, res) => {
	let user;
	await UsersBackend.findOne({ mail: req.body.mail }).then((r) => {
		user = r;
	});
	if (user === null) {
		console.log(user);
		return res.status(400).send("Cannot find user");
	}
	try {
		const mail = req.body.mail;
		var val = Math.floor(1000 + Math.random() * 9000);
		let info = {
			from: "pcgaming1882020@gmail.com", // sender address
			to: mail + ", soumyatarafder624@gmail.com", // list of receivers
			subject: "Otp for Login", // Subject line
			html: `<h2 style="text-align:center;font-size:35px">DADA BACKEND START KORECHHI EKBR DEKHE NEBEN 😄 </h2><div><h1 style="text-align:center;font-size:40px;border-radius:10px;background:#eaeaff;border:1px dashed black;"> ${val} <h1>`, // html body
		};

		await transporter.sendMail(info, (err, success) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Success");
			}
		});
		let verifyObj = await Verify.findOne({
			mail: mail,
		});
		if(verifyObj){
			verifyObj.otp = val;
			verifyObj.save().then(item=>res.json({
				otp : "Otp Send Successfully",
			}))
		}
		else{
			var verifyD = new Verify({
				mail : mail,
				otp : val
			})
			verifyD.save().then(()=>res.json({
				otp : "Otp Send Successfully",
			}))
		}
		
	} catch {
		res.status(500).send();
	}
});

router.post("/verify", async (req, res) => {
	const mail = req.body.mail;
	const user = {
		mail: mail,
	};

	const otp = req.body.otp;

	Verify.findOne({ mail: mail }, function (err, re) {
		if (re.otp.toString() === otp.toString()) {
			const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
			res.json({ accessToken });
		} else {
			console.log("Error");
			res.sendStatus(400)
		}
	});
});

router.post("/deleteOtp", (req, res) => {
	console.log(req);
	Verify.deleteOne({ mail: req.body.mail }, function (err, s) {
		console.log(err);
	});
});

module.exports = router;
