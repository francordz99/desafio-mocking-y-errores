import { productsGenerator } from '../helpers/mockingConfig.js';
import { testingErrors } from '../services/errors/testingErrors.js';

const testingController = {
    getMockedProducts: async (req, res) => {
        try {
            const mockedProducts = Array.from({ length: 100 }, productsGenerator);
            res.render('testing', { mockedProducts });
        } catch (error) {
            console.error(error);
            testingErrors.getMockedProductsError();
        }
    },
};

export default testingController;
