import { EError } from '../../enums/EError.js';
import { CustomError } from '../../services/errors.service.js';

export const addProductToCartError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al agregar el producto al carrito',
        errorCode: EError.ADD_TO_CART_ERROR
    });
};

export const getCartProductsError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al obtener los productos del carrito',
        errorCode: EError.GET_CART_PRODUCTS_ERROR
    });
};

export const deleteProductFromCartError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al eliminar el producto del carrito',
        errorCode: EError.DELETE_FROM_CART_ERROR
    });
};

export const editProductQuantityError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al actualizar la cantidad del producto en el carrito',
        errorCode: EError.EDIT_QUANTITY_ERROR
    });
};

export const buyItemsError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Error al realizar la compra',
        errorCode: EError.BUY_ITEMS_ERROR
    });
};

export const cartNotFoundError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Carrito no encontrado',
        errorCode: EError.EMPTY_CART_ERROR
    });
};

export const productNotFoundErrorInCart = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'Producto no encontrado en el carrito',
        errorCode: EError.PRODUCT_NOT_FOUND
    });
};

export const emptyCartError = () => {
    throw CustomError.createError({
        name: 'Error',
        message: 'El carrito está vacío',
        errorCode: EError.EMPTY_CART_ERROR
    });
};

export const insufficientStockError = (productName) => {
    throw CustomError.createError({
        name: 'Error',
        message: `No hay suficiente stock para el producto: ${productName}`,
        errorCode: EError.INSUFFICIENT_STOCK_ERROR
    });
};
