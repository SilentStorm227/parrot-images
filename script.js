const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const parroturl = 'https://api.unsplash.com/photos/random?query=parrot&client_id=RdQDvWJTrn0gPyyechVVkAFavML9RkIJra1_AfuyS6o';

app.get('/parrot-images', async (req,res) => {
    try {
        const response = await axios.get(parroturl);

        const parrotImageUrl = response.data.urls.regular;

        res.send(`
            <html>
            <head>
            <title>Random parrot</title>
            </head>
            <body>
            <h2>PARROT IMAGE</h2>
            <img src = "${parrotImageUrl}" style = "border-radius:10px; width:160px; height:160px;"><br><br>
            <button onclick="window.location.reload()">New image</button>
            </body>
            </html>
            `)
        
    } catch (error) {
        res.status(500).json({error: `Error fetching parrot image`})
    }  
});

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
});