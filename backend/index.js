import express from "express"
import cors from "cors"
import express_session from "express-session"
const app = express();
app.use(express.json());

app.use(cors({ 
    origin: 'http://localhost:5173' 
  }));

app.get('/getData', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.post('/login', (req, res) => {
    const { email, password } = req.body; // Destructure email and password from request body
    console.log("Received login data:", email, password);
  });

app.listen(5000, () => {
  console.log('Backend is running on port 5000');
});
