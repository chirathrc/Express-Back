// import { validateJwt } from "../security/jwt.js";

// export const authMiddleware = (req, resp, next) => {
//     const authHeader = req.headers.authorization;
    
//     // Log the full raw Authorization header for debugging
//     console.log("Raw Authorization Header:", authHeader);

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return resp.status(401).json({ message: "Unauthorized: Missing or malformed token" });
//     }

//     // Safely extract the token after "Bearer"
//     const token = authHeader.split(" ")[1]?.trim();
//     console.log("Extracted Token:", token);

//     if (!token) {
//         return resp.status(401).json({ message: "Unauthorized: Token not found" });
//     }

//     if (!validateJwt(token)) {
//         return resp.status(401).json({ message: "Unauthorized: Invalid token" });
//     }

//     next();
// };




import { validateJwt } from "../security/jwt.js";

export const authMiddleware = (req, resp, next) => {

    const authHeader = req.headers.authorization;
    const token = authHeader?.replace("Bearer ", "");

    console.log(authHeader?.replace("Bearer ", ""));

    if (!token) {
        return resp.status(401).json({ message: "Unauthorized" });
    }

    if (!validateJwt(token)) {
        return resp.status(401).json({ message: "Unauthorized" });
    }

    next();
};