console.log("Starting server...");

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const app = express();
require("dotenv").config();
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// File upload handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Email configuration 
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "applications@eficare.net", 
    pass: process.env.TRANSPORTER_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("Error connecting to SMTP server:", error);
  } else {
    console.log("SMTP server is ready to send emails!");
  }
});

app.post(
  "/api/v1/submit-job-seker-form",
  upload.single("resume"),
  (req, res) => {
    console.log("Received a request:", req.body);
    const { name, email, contactNumber, linkedIn, description } = req.body;
    const resume = req.file;

    if (!name || !email || !contactNumber || !resume) {
      return res.status(400).json({ error: "These fields are required" });
    }

    const mailOptions = {
      from: { name: 'Eficare Applications', address: "applications@eficare.net" },
      to: { name: 'Eficare Info', address: 'info@eficare.net' },
      replyTo: email,
      subject: "New Job Seeker Submission",
      text: `
      Name: ${name}
      Email: ${email}
      Contact Number: ${contactNumber}
      LinkedIn: ${linkedIn || "Not provided"}
      Description: ${description || "Not provided"}
    `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      res.status(200).json({ message: "Email sent successfully!" });
    });
  }
);

app.post("/api/v1/submit-employer-form", (req, res) => {
  const { companyName, email, contactNumber, website, description } = req.body;
  console.log(req.body);
  console.log(companyName, email, contactNumber);
  if (!companyName || !email || !contactNumber) {
    return res
      .status(400)
      .json({
        error: "Company name, email, and contact number are required fields",
      });
  }

  const mailOptions = {
    from: { name: 'Eficare Applications', address: "applications@eficare.net" },
    to: { name: 'Eficare Info', address: 'info@eficare.net' },
    replyTo: email,
    subject: "New Employer Submission",
    text: `
        Company Name: ${companyName}
        Email: ${email}
        Contact Number: ${contactNumber}
        Website: ${website || "Not provided"}
        Description: ${description || "Not provided"}
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
