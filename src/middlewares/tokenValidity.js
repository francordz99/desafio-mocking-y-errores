import jwt from 'jsonwebtoken';
import { config } from '../config/dotenvConfig.js';
import { tokenValidityErrors } from '../services/errors/tokenValidityErrors.js';

export const authenticateToken = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        const tokenCookie = cookies && cookies.split(';').find(cookie => cookie.trim().startsWith('token='));
        const token = tokenCookie && tokenCookie.split('=')[1];
        if (!token) {
            return res.redirect('/login');
        }

        jwt.verify(token, config.jwt.jwtSecret, { ignoreExpiration: false }, (err, user) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.redirect('/login');
                } else {
                    tokenValidityErrors.authenticateTokenError();
                }
            }
            req.user = user;
            next();
        });
    } catch (error) {
        console.error(error);
        tokenValidityErrors.authenticateTokenError();
    }
};

export const checkAuthenticated = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        const tokenCookie = cookies && cookies.split(';').find(cookie => cookie.trim().startsWith('token='));
        const token = tokenCookie && tokenCookie.split('=')[1];

        if (token) {
            jwt.verify(token, config.jwt.jwtSecret, { ignoreExpiration: false }, (err) => {
                if (err) {
                    if (err.name === 'TokenExpiredError') {
                        next();
                    } else {
                        tokenValidityErrors.checkAuthenticatedError();
                    }
                } else {
                    return res.redirect('/');
                }
            });
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
        tokenValidityErrors.checkAuthenticatedError();
    }
};
