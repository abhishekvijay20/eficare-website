console.log("Starting server...");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
require("dotenv").config();
const path = require("path");
const sgMail = require("@sendgrid/mail");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// File upload handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test SendGrid Connection
(async () => {
  try {
    await sgMail.send({
      to: "test@example.com", // Dummy email
      from: "applications@eficare.net",
      subject: "SendGrid Connection Test",
      text: "If you see this in your console, SendGrid is working!",
    });
    console.log("SendGrid is ready to send emails!");
  } catch (error) {
    console.error("Error connecting to SendGrid:", error.response?.body || error);
  }
})();

// Route to handle job seeker form
app.post("/api/v1/submit-job-seker-form", upload.single("resume"), async (req, res) => {
  console.log("Received a request:", req.body);
  const { name, email, contactNumber, linkedIn, description } = req.body;
  const resume = req.file;

  if (!name || !email || !contactNumber || !resume) {
    return res.status(400).json({ error: "These fields are required" });
  }

  const msg = {
    to: { name: "Eficare Info", email: "info@eficare.net" },
    from: { name: "Eficare Applications", email: "applications@eficare.net" },
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
        content: resume.buffer.toString("base64"),
        filename: resume.originalname,
        type: resume.mimetype,
        disposition: "attachment",
      },
    ],
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Route to handle employer form
app.post("/api/v1/submit-employer-form", async (req, res) => {
  const { companyName, email, contactNumber, website, description } = req.body;

  if (!companyName || !email || !contactNumber) {
    return res
      .status(400)
      .json({
        error: "Company name, email, and contact number are required fields",
      });
  }

  const msg = {
    to: { name: "Eficare Info", email: "info@eficare.net" },
    from: { name: "Eficare Applications", email: "applications@eficare.net" },
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

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
