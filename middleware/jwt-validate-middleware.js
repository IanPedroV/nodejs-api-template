import { verify } from 'jsonwebtoken';
export default (request, response, next) => {
    if (request.headers.authorization === 'isGuest') {
        next();
    } else {
        try {
            const token = request.headers.authorization.split(" ")[1];
            const decoded = verify(token, require('dotenv').config().parsed.HSA256_SECRET);
            request.userData = decoded;
            next();
        } catch (error) {
            return response.status(401).json({
                message: 'Autorização falhou',
                error: error
            });
        }
    }
};