const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const authRoutes = require('./routes/auth'); 
const authRouter = require('./routes/auth');
const assignmentsRoutes = require('./routes/assignments'); 
const assignmentsRouter = require('./routes/assignments');
const transfersRouter = require('./routes/transfers');
const transfersRoutes = require('./routes/transfers');
const purchasesRoutes = require('./routes/purchases');
const purchasesRouter = require('./routes/purchases');
const dashboardRouter = require('./routes/dashboard');
// Import assignments routes
// Import auth routes

const app = express();


// Middlewares
app.use(cors({
  origin: "https://army-frontend.vercel.app", // Change this to your deployed frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(bodyParser.json());
// index.js or api/index.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from backend!' });
}


// Routes
app.use('/api', authRoutes);
app.use('/api', authRouter);
app.use('/api', assignmentsRoutes);
app.use('/api/assignments', assignmentsRouter);
app.use('/api', transfersRoutes);
app.use('/api/transfers', transfersRouter);
app.use('/api', purchasesRoutes);
app.use('/api', dashboardRouter);
app.use('/api/purchases', purchasesRouter);

module.exports.handler = serverless(app);

// Start the server

