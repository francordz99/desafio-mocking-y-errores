import { productsGenerator } from '../helpers/mockingConfig.js';

const testingController = {
    getMockedProducts: async (req, res) => {
        try {
            const mockedProducts = Array.from({ length: 100 }, productsGenerator);

            res.render('testing', { mockedProducts });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

export default testingController;
