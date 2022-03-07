const express = require("express");

const router = express.Router({ mergeParams: true });

router.route("/health-check").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: "Health is Okay !!!",
    error: null,
  });
});

router.route("/profile").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: "Ahmer Saeed, MERN Stack Developer (Back-End oriented)",
    error: null,
  });
});

router.route("/bio").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      name: "Ahmer Saeed",
      father: "Saeed Ahmed Fara",
      cnic: "42401-2832437-5",
      phone: "0312-2410823",
      email: "ahmer_saeedfaraz@yahoo.com",
      location: "Karachi, Pakistan",
    },
    error: null,
  });
});

router.route("/qualification").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      matriculation: "Roshan Public School, Karachi Pakistan",
      higherEducation:
        "Govt. Degree College Gulistan e Jauhar, Karachi Pakistan",
      graduation: {
        institue: "University of Karachi, Pakistan",
        program: "Software Engineering",
      },
      masters: {
        institute: "FAST National University of Computer and Emerging Science",
        program: "Software Project Management",
      },
      certification: null,
    },
    error: null,
  });
});

router.route("/experience").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: "8+ Years",
    error: null,
  });
});

router.route("/experience/history").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: [
      {
        company: "Interactive Cells",
        designation: "Website Application Developer",
        role: "Beginner",
        workedFor: "2 years",
      },
      {
        company: "Skill Orbit",
        designation: "Senior Software Enginneer / Tech Lead",
        role: "Tech Lead",
        workedFor: "5 years",
      },
      {
        company: "InertiaSoft",
        designation: "Senior Back-End Developer",
        role: "Tech Lead",
        workedFor: "1 year",
      },
    ],
    error: null,
  });
});

router.route("/current/company").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: "Systems Limited, Pakistan",
    error: null,
  });
});

router.route("/current/designation").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: "Senior Consultant App Development",
    error: null,
  });
});

router.route("/skills").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: [
      {
        skill: "Node JS",
        experience: "4 years",
      },
      {
        skill: "React JS",
        experience: "0.6 months",
      },
      {
        skill: "Mongo DB",
        experience: "2 years",
      },
      {
        skill: "Express JS",
        experience: "4 years",
      },
      {
        skill: ".Net Core",
        experience: "1 year",
      },
      {
        skill: "AWS services SQS, Lambda, CloudWatch, CLI",
        experience: "2 years",
      },
      {
        skill: "CI/CD Jenkins, Docker",
        experience: "Beginner level",
      },
    ],
    error: null,
  });
});

router.route("/projects/professional").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: [
      {
        name: "Tenovos",
        description: "",
        role: [""],
      },
      {
        name: "TAMM",
        description: "",
        role: [""],
      },
      {
        name: "Atlantic",
        description: "",
        role: [""],
      },
      {
        name: "Social CxN",
        description: "",
        role: [""],
      },
      {
        name: "Legal Management System",
        description: "",
        role: [""],
      },
      {
        name: "VIP Cargo System",
        description: "",
        role: [""],
      },
      {
        name: "Linkagoal",
        description: "",
        role: [""],
      },
    ],
    error: null,
  });
});

router.route("/projects/freelance").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: [
      {
        name: "Hope Accelerated",
        description: "",
        role: [""],
      },
      {
        name: "Chronic Care Management System",
        description: "",
        role: [""],
      },
    ],
    error: null,
  });
});

module.exports = router;
