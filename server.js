const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const cors = require('cors');
const path = require('path');
const {hasAccess} = require("./Auth/Middlewares")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


require("./Auth/jwt")(app);




app.get("/protectedAPI",hasAccess,(req,res) => {
    res.json({
        success: true,
        message: "This is a protected API"
    })
})