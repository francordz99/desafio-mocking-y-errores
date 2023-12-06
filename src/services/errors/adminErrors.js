import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const getProductNotFoundError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error, el producto no existe o tiene otro código',
        errorCode: EError.PRODUCT_NOT_FOUND
    });
};

export const getProductError = (error) => {
    throw CustomError.createError({
        name: 'Error',
        cause: error,
        message: 'Error al obtener el producto',
        errorCode: EError.GET_PRODUCTS_ERROR
    });
};

export const addProductError = (error) => {
    throw CustomError.createError({
        name: 'Error',
        cause: error,
        message: 'Error al agregar el producto',
        errorCode: EError.ADD_PRODUCT_ERROR
    });
};

export const editProductError = (error) => {
    throw CustomError.createError({
        name: 'Error',
        cause: error,
        message: 'Error al editar el producto',
        errorCode: EError.EDIT_PRODUCT_ERROR
    });
};

export const deleteProductError = (error) => {
    throw CustomError.createError({
        name: 'Error',
        cause: error,
        message: 'Error al eliminar el producto',
        errorCode: EError.DELETE_PRODUCT_ERROR
    });
};

export const editPermissionsError = (error) => {
    throw CustomError.createError({
        name: 'Error',
        cause: error,
        message: 'Error al editar permisos',
        errorCode: EError.EDIT_PERMISSIONS_ERROR
    });
};