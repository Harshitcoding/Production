const express = require('express');
const { Signup } = require('./db');
const {Payment} = require('./db')
const app = express();
const cors = require ("cors");
const { createInput } = require('./zod');

app.use(express.json());
app.use(cors())

app.post('/signup', async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
   
        await Signup.create({
            username: username,
            email: email,
            password: password,
        });

        res.json({
            message: 'user created successfully',
      
        });
   
});
app.post('/login', async (req, res) => {
    // Logic for user login
    const { username, password } = req.body;
    try {
        // Find user by username
        const user = await Signup.findOne({ username: username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If everything is correct, send success message
        res.json({ message: 'Logged in successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error logging in',
            error: error.message,
        });
    }
});



app.post('/payment', async (req, res) => {
    const createparse = req.body;
    const parsepayload = createInput.safeParse(createparse);

    if (!parsepayload.success) {
        console.error('Validation errors:', parsepayload.error);
        res.status(400).json({
            msg: 'Invalid input'
        });
        return;
    } else {
        const { username, cardNumber, cvv, billing } = req.body;

        try {
            await Payment.create({
                username: username,
                cardNumber: cardNumber,
                cvv: cvv,
                billing: billing,
            });

            res.json({
                msg: 'Payment information saved successfully'
            });
        } catch (error) {
            console.error('Error saving payment information:', error);
            res.status(500).json({
                msg: 'Internal server error',
                error: error.message
            });
        }
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
