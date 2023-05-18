import jwt from "jsonwebtoken";

const updateIpInformation = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res
        .status(403)
        .json({ error: true, message: "Invalid Authentication." });
    }
    try {
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
        
        // const ipInformation = await 
    
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: true, message: error.message });
    }
}

export { updateIpInformation };