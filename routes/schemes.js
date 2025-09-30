const express = require("express");
const router = express.Router();

// ✅ Import the Scheme model
const Scheme = require("../models/Scheme"); // Make sure this path is correct

// GET all schemes
router.get("/", async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /seed → insert sample data
router.post("/seed", async (req, res) => {
  try {
    const sampleData = [
      {
        title: "PM-KISAN Samman Nidhi",
        description:
          "Provides income support of ₹6,000 per year in three equal installments to all farmer families.",
        eligibility: "Small and marginal farmers across India",
        benefits: "₹6,000 yearly direct bank transfer",
        link: "https://pmkisan.gov.in/",
        category: "Income Support",
        state: "All India",
      },
      {
        title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        description:
          "Crop insurance scheme to protect farmers against crop losses due to natural calamities.",
        eligibility: "All farmers growing notified crops",
        benefits: "Covers losses from drought, flood, pests, diseases",
        link: "https://pmfby.gov.in/",
        category: "Insurance",
        state: "All India",
      },
      {
        title: "Kisan Credit Card (KCC)",
        description:
          "Provides timely credit support to farmers for farming needs.",
        eligibility: "Farmers involved in crop production and allied activities",
        benefits: "Loan at low interest rate",
        link: "https://www.myscheme.gov.in/schemes/kcc",
        category: "Loan",
        state: "All India",
      },
    ];

    // Insert sample schemes into MongoDB
    await Scheme.insertMany(sampleData);
    res.json({ message: "Sample schemes inserted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
// const router = express.Router();

// // GET all schemes
// router.get("/", async (req, res) => {
//   try {
//     const schemes = await Scheme.find();
//     res.json(schemes);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // POST /seed → insert sample data
// router.post("/seed", async (req, res) => {
//   try {
//     const sampleData = [
//       {
//         title: "PM-KISAN Samman Nidhi",
//         description: "Provides income support of ₹6,000 per year in three equal installments to all farmer families.",
//         eligibility: "Small and marginal farmers across India",
//         benefits: "₹6,000 yearly direct bank transfer",
//         link: "https://pmkisan.gov.in/",
//         category: "Income Support",
//         state: "All India"
//       },
//       {
//         title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
//         description: "Crop insurance scheme to protect farmers against crop losses due to natural calamities.",
//         eligibility: "All farmers growing notified crops",
//         benefits: "Covers losses from drought, flood, pests, diseases",
//         link: "https://pmfby.gov.in/",
//         category: "Insurance",
//         state: "All India"
//       },
//       {
//         title: "Kisan Credit Card (KCC)",
//         description: "Provides timely credit support to farmers for farming needs.",
//         eligibility: "Farmers involved in crop production and allied activities",
//         benefits: "Loan at low interest rate",
//         link: "https://www.myscheme.gov.in/schemes/kcc",
//         category: "Loan",
//         state: "All India"
//       }
//     ];

//     await Scheme.insertMany(sampleData);
//     res.json({ message: "Sample schemes inserted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
