import express from "express";
import { authSession } from "../sessions/auth.session.js";
import fileService from "../shared-services/file-service.js";

const authRouter = express.Router();


authRouter.post("/login", authSession, async (req, res) => {

    const checkUser = await fileService.viewBlog("../db/users.json");

    const username = req.body.username;
    const password = req.body.password;

    for (let user of checkUser){
        
        if(user.username === username && user.password === password){

            req.session.user = {
                user: username,
                isLoggedIn: true
            };
    
            return res.send({message: "You have logged in!"});
        };
    };

    res.status(403).send({message: "Wrong username or password"});
});


authRouter.post("/logout", authSession, (req, res) => {

    req.session.destroy();
    res.send({message: "You have successfully logged out!"})
});

export default authRouter