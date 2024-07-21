// // npm install passport passport-google-oauth20


// // Configuration de Google Strategy dans Passport

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const prisma = require('../prisma/client');

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:5000/api/auth/google/callback"
// }, async (accessToken, refreshToken, profile, done) => {
//   try {
//     let user = await prisma.utilisateur.findUnique({ where: { googleId: profile.id } });
//     if (!user) {
//       user = await prisma.utilisateur.create({
//         data: {
//           googleId: profile.id,
//           name: profile.displayName,
//           email: profile.emails[0].value
//         }
//       });
//     }
//     return done(null, user);
//   } catch (error) {
//     return done(error, false);
//   }
// }));

// // Serialize and deserialize user for session handling
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await prisma.utilisateur.findUnique({ where: { id } });
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });

// module.exports = passport;
