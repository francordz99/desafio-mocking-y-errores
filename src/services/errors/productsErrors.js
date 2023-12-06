import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const getProductsError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al obtener la lista de productos',
        errorCode: EError.GET_PRODUCTS_ERROR
    });
};
