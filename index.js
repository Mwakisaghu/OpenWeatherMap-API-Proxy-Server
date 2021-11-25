const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

//Enable Cors
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
