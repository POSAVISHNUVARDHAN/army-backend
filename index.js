const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const authRoutes = require('./routes/auth'); 
const assignmentsRoutes = require('./routes/assignments'); 
const transferRoutes = require('./routes/transfers');
const purchasesRoutes = require('./routes/purchases');
const dashboardRouter = require('./routes/dashboard');

const app = express();

app.use(cors({
  origin: "https://army-frontend.vercel.app", // Your frontend URL here
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(express.json());

// Routes (Avoid duplicate mounts)
app.use('/api', authRoutes);
app.use('/api/assignments', assignmentsRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/purchases', purchasesRoutes);
app.use('/api/dashboard', dashboardRouter);

// Export the app as a serverless handler
module.exports.handler = serverless(app);
