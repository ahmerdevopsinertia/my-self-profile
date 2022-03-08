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
    data: {
      main: "Ahmer Saeed, MERN Stack Developer (Back-End oriented)",
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/bio").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: {
        name: "Ahmer Saeed",
        father: "Saeed Ahmed Fara",
        cnic: "42401-2832437-5",
        phone: "0312-2410823",
        email: "ahmer_saeedfaraz@yahoo.com",
        location: "Karachi, Pakistan",
      },
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/qualification").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: {
        matriculation: "Roshan Public School, Karachi Pakistan",
        higherEducation:
          "Govt. Degree College Gulistan e Jauhar, Karachi Pakistan",
        graduation: {
          institue: "University of Karachi, Pakistan",
          program: "Software Engineering",
        },
        masters: {
          institute:
            "FAST National University of Computer and Emerging Science",
          program: "Software Project Management",
        },
        certification: null,
      },
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },

    error: null,
  });
});

router.route("/experience").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: "8+ Years",
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/experience/history").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: [
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
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/current/company").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: "Systems Limited, Pakistan",
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/current/designation").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: "Senior Consultant App Development",
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/skills").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: [
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
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/projects/professional").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: [
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
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

router.route("/projects/freelance").get((req, res) => {
  return res.json({
    status: 200,
    message: "true",
    data: {
      main: [
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
      meta: {
        method: req.method,
        hostName: req.hostname,
        apiEndpoint: req.originalUrl,
        browser: req.headers["user-agent"],
      },
    },
    error: null,
  });
});

module.exports = router;
