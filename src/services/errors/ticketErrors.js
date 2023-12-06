import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const sendPurchaseConfirmationError = (error) => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al crear el ticket',
        errorCode: EError.TICKET_CREATION_ERROR,
        cause: error
    });
};
