import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const authenticateTokenError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Acceso no autorizado. Token inválido.',
        errorCode: EError.UNAUTHORIZED_ACCESS_ERROR
    });
};

export const checkAuthenticatedError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Acceso no autorizado. Token inválido.',
        errorCode: EError.UNAUTHORIZED_ACCESS_ERROR
    });
};
