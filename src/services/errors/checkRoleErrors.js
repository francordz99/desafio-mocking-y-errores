import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const checkAdminRoleError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al verificar el rol del usuario (Admin).',
        errorCode: EError.CHECK_ADMIN_ROLE_ERROR
    });
};

export const checkUserRoleError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al verificar el rol del usuario (User).',
        errorCode: EError.CHECK_USER_ROLE_ERROR
    });
};
