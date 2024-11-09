// const express = require("express");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const morgan = require("morgan");
// const connectDB = require("./config/db");
// const cors = require("cors");
// const sendEmail = require("./utils/sendEmail");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000', // Adjust this according to your frontend setup
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

// app.use(morgan("dev"));

// // Routes
// app.use("/api/v1/test", require("./routes/testRoutes"));
// app.use("/api/v1/auth", require("./routes/authRoutes"));
// app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
// app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
// app.use("/api/v1/admin", require("./routes/adminRoutes"));

// app.post("/api/v1/payment/sendemail", async (req, res) => {
//   const { email, supplies } = req.body;

//   try {
//     const send_to = email; // The recipient's email
//     const sent_from = process.env.EMAIL_USER; // Your email
//     const reply_to = email; // Reply to the sender's email
//     const emailSubject = "Thank You for Supporting FarmTech Innovations";

//     // Build the supplies table for the email
//     let suppliesTable = supplies.map(s => `
//       <tr>
//         <td>${s.supply}</td>
//         <td>${s.quantity}</td>
//         <td>${s.price}</td>
//       </tr>
//     `).join('');

//     // Email content
//     const emailMessage = `
//       <h3>Hello,</h3>
//       <p>Thank you for expressing interest in FarmTech Innovations!</p>
//       <p>Here are the supplies you wish to provide:</p>
//       <table border="1">
//         <tr>
//           <th>Supply Item</th>
//           <th>Quantity</th>
//           <th>Price</th>
//         </tr>
//         ${suppliesTable}
//       </table>
//       <p>We appreciate your support for sustainable agricultural practices.</p>
//       <p>Best Regards,<br/>The FarmTech Innovations Team</p>
//     `;

//     // Send email
//     await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
//     res.status(200).json({ success: true, message: "Email Sent" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Node Server Running on Port ${PORT}`.bgBlue.white);
// });


// const express = require("express");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const morgan = require("morgan");
// const connectDB = require("./config/db");
// const cors = require("cors");
// const sendEmail = require("./utils/sendEmail");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000', // Adjust this according to your frontend setup
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

// app.use(morgan("dev"));

// // Routes
// app.use("/api/v1/test", require("./routes/testRoutes"));
// app.use("/api/v1/auth", require("./routes/authRoutes"));
// app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
// app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
// app.use("/api/v1/admin", require("./routes/adminRoutes"));

// app.post("/api/v1/payment/sendemail", async (req, res) => {
//   const { email, supplies } = req.body;

//   try {
//     const send_to = email; // The recipient's email
//     const sent_from = process.env.EMAIL_USER; // Your email
//     const reply_to = email; // Reply to the sender's email
//     const emailSubject = "Thank You for Supporting FarmTech Innovations";

//     // Build the supplies table for the email
//     let suppliesTable = supplies.map(s => `
//       <tr>
//         <td>${s.supply}</td>
//         <td>${s.quantity}</td>
//         <td>${s.price}</td>
//       </tr>
//     `).join('');

//     // Email content
//     const emailMessage = `
//       <h3>Hello,</h3>
//       <p>Thank you for expressing interest in FarmTech Innovations!</p>
//       <p>Here are the supplies you wish to provide:</p>
//       <table border="1">
//         <tr>
//           <th>Supply Item</th>
//           <th>Quantity</th>
//           <th>Price</th>
//         </tr>
//         ${suppliesTable}
//       </table>
//       <p>We appreciate your support for sustainable agricultural practices.</p>
//       <p>Best Regards,<br/>The FarmTech Innovations Team</p>
//     `;

//     // Send email
//     await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
//     res.status(200).json({ success: true, message: "Email Sent" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Node Server Running on Port ${PORT}`.bgBlue.white);
// }); 



const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail");
const documentRoutes = require("./routes/documentRoutes"); 

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors(
  // ({
  //   origin: 'http://localhost:8000', // Adjust this according to your frontend setup
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   credentials: true
  // })
));

app.use(morgan("dev"));

// Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/documents", require("./routes/documentRoutes"));

app.post("/api/v1/payment/sendemail", async (req, res) => {
  const { email, supplies } = req.body;

  try {
    const send_to = email; // The recipient's email
    const sent_from = process.env.EMAIL_USER; // Your email
    const reply_to = email; // Reply to the sender's email
    const emailSubject = "Thank You for Supporting FarmTech Innovations";

    // Build the supplies table for the email
    let suppliesTable = supplies.map(s => `
      <tr>
        <td>${s.supply}</td>
        <td>${s.quantity}</td>
        <td>${s.price}</td>
      </tr>
    `).join('');

    // Email content
    const emailMessage = `
      <h3>Hello,</h3>
      <p>Thank you for expressing interest in FarmTech Innovations!</p>
      <p>Here are the supplies you wish to provide:</p>
      <table border="1">
        <tr>
          <th>Supply Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        ${suppliesTable}
      </table>
      <p>We appreciate your support for sustainable agricultural practices.</p>
      <p>Best Regards,<br/>The FarmTech Innovations Team</p>
    `;

    // Send email
    await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Node Server Running on Port ${PORT}`.bgBlue.white);
});