module.exports = (app) => {

    app.post("/login",(req,res) => {
        console.log(req.body);
        const {username,password} = req.body;
        if(username === "admin" && password === "admin"){
            res.status(200).json({
                success: true,
                message: "Login successful",
                token: "encrypted token goes here"
            })
        }else{
            res.json({
                success: false,
                message: "Login failed, invalid credentials"
            })
        }
    })

}
