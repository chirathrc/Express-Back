import jwt, { decode } from "jsonwebtoken";

export const generateJwt = (user) => {

    const token = jwt.sign(
        {
            sub: user.username,
        },
        process.env.JWT_SECRET || 'secret',
        {
            expiresIn: "1h",
        }
    );

    return token;
}

export const validateJwt = (token) => {
    const secretKey = process.env.JWT_SECRET || 'secret';

    if (!token) {
        console.error('Token is missing');
        return false;
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('Decoded Token:', decoded);
        return true;
    } catch (err) {
        console.error('JWT validation error:', err.message);
        return false;
    }
};

export const getUsernameFromJwt = (token) => {

    const decode = jwt.decode(token);

    if (decode !== null) {
        return decode.sub;
    }

    return null;

};