import jwt from "jsonwebtoken";
const JWT_SECRET = 'Sahid4@#' ;


const fetchAdmin = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }

    try {
        console.log("Received Token:", token);
        const data = jwt.verify(token, JWT_SECRET);
        console.log("Decoded Data:", data); // Debugging log

        req.admin = data.admin || data.user; // Fix: Handle `admin` or `user`
        if (!req.admin) {
            return res.status(401).json({ error: "Invalid token structure" });
        }

        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token, please authenticate again" });
    }
};



export default fetchAdmin
