
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

// const JWT_SECRET = process.env.JWT_SECRET || 'munguetsoni';

const authMiddleware = (req, res, next) => {
    // const token = req.headers.authorization;
    
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Aucun token fourni' });
    }
    // if (!token) return res.sendStatus(401);

    // jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //     if (err) {
    //         return res.status(403).json({ message: 'Failed to authenticate token' });
    //     }
    //     req.user = decoded;
    //     next();
    // });
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) return res.sendStatus(403);
        try {
            const user = await prisma.Utilisateur.findUnique({ where: { id: decodedToken.userId } });
            if (!user) return res.sendStatus(403);
            req.user = user; // Utilisez req.user ici
            next();
        } catch (error) {
            res.sendStatus(500);
        }
    });
};

module.exports = authMiddleware;
