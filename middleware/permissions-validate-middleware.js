module.exports = (request, response, next) => {
    if (request.userData === undefined)
        return response.status(403).json({ message: "Autorização falhou" });
        
    let decodedUser = request.userData;
    if (decodedUser.isAdmin !== 'true') {
        return response.status(403).json({ message: "Token verificada, porém permissões insuficientes!" })
    }

    next();
};

