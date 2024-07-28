

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const prisma = require('../prismaClient'); // Assurez-vous d'avoir configuré prismaClient
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();


const login = async (req, res) => {
    
    
    const { email, motDePasse } = req.body;
    try {
        console.log("Received data:", { email, motDePasse }); 
        
        const user = await prisma.Utilisateur.findUnique({ where: { email } });
        if (!user) {
            console.log("Invalid email");

            return res.status(401).json({ message: 'Invalid email' });
        }

        console.log("User found:", user);  
        console.log("Stored hashed password:", user.motDePasse);

        const isPasswordValid = await bcrypt.compare(motDePasse, user.motDePasse);
        if (!isPasswordValid) {
            console.log("Invalid password")

            return res.status(401).json({ message: 'Invalid password' });
        }
        const payload = { id: user.id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        // res.json({ token, user: utilisateur });
        res.json({ token,
            user: {
                id: user.id,
                prenom: user.prenom,
                nom: user.nom,
                postnom: user.postnom,
                email: user.email,
                adresse: user.adresse,      
                numeroTel: user.numeroTel,    
                dateNaissance: user.dateNaissance, 
                role: user.role,          
                annonces: user.annonces,     
                offres: user.offres,       
                notifications: user.notifications, 
                demandesValidation: user.demandesValidation, 
                encheres: user.encheres
            }
         });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

const protectedRoute = (req, res) => {
    res.json({ message: 'Protected route accessed successfully', user: req.user });
};

module.exports = {
    login, 
    protectedRoute
};
