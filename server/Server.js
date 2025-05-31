const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sahayakDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ MongoDB connected');
  })
 .catch((error) => {
  console.error('❌ Signup error details:', {
    message: error.message,
    stack: error.stack,
    code: error.code,
  });
  res.status(500).json({ message: 'Server error', error: error.message });
});


// Define User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Ensure unique index on email
User.collection.createIndex({ email: 1 }, { unique: true }).catch((err) => {
  console.error('⚠️ Index creation error (can ignore if already created):', err.message);
});

// Signup API route
app.post('/api/signup', async (req, res) => {
  const { name, age, email, password } = req.body;

  if (!name || !age || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Save to DB or mock it
    console.log('User Registered:', req.body);

    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
