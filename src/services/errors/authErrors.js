import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const registrationError = (errorMessage) => {
    throw CustomError.createError({
        name: 'Error',
        message: `Error al registrar: ${errorMessage}`,
        errorCode: EError.REGISTER_ERROR
    });
};

export const loginError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Correo o contraseña incorrectos',
        errorCode: EError.LOGIN_ERROR
    });
};

export const loginServerError = (errorMessage) => {
    throw CustomError.createError({
        name: 'Error',
        message: `Error al iniciar sesión: ${errorMessage}`,
        errorCode: EError.AUTHENTICATE_TOKEN_ERROR
    });
};
