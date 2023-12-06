import User from "../dao/models/userModel.js";
import jwt from 'jsonwebtoken';
import { config } from "../config/dotenvConfig.js";
import { userInfoDto } from "../dto/userInfo.js";
import { usersErrors } from '../services/errors/usersErrors.js';

const usersController = {
    getInformation: async (req, res) => {
        try {
            const token = req.cookies.token;
            const decodedToken = jwt.verify(token, config.jwt.jwtSecret);
            const userEmail = decodedToken.username;
            const user = await User.findOne({ email: userEmail });
            if (!user) {
                usersErrors.getInformationError();
            }
            const userDto = new userInfoDto(user);
            res.render('profile', { userEmail: userEmail, user: userDto });
        } catch (error) {
            console.error(error);
            usersErrors.getInformationError();
        }
    },
    editInformation: async (req, res) => {
        try {
            const token = req.cookies.token;
            const decodedToken = jwt.verify(token, config.jwt.jwtSecret);
            const userEmail = decodedToken.username;
            const { nombre, apellido, edad, celular } = req.body;
            const userInfo = {
                nombre,
                apellido,
                edad,
                celular,
                email: userEmail,
            };
            const userDto = new userInfoDto(userInfo);
            const updatedUser = await User.findOneAndUpdate(
                { email: userEmail },
                userDto,
                { new: true }
            );
            if (!updatedUser) {
                usersErrors.editInformationError();
            }
            res.render('profile', { successMessage: 'Datos Actualizados Con Éxito', userEmail: userEmail });
        } catch (error) {
            console.error(error);
            usersErrors.editInformationError();
        }
    },
};

export default usersController;
