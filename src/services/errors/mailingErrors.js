import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const sendPurchaseConfirmationError = (error) => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al enviar el correo.',
        errorCode: EError.SEND_PURCHASE_CONFIRMATION_ERROR,
        cause: error
    });
};
