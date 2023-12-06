import Product from "../dao/models/productModel.js";
import User from "../dao/models/userModel.js";
import { adminErrors } from "../services/errors/adminErrors.js";

const adminController = {
    getAdmin: async (req, res) => {
        res.render('admin');
    },
    getProduct: async (req, res) => {
        try {
            const { code } = req.query;
            const existingProduct = await Product.findOne({ code });

            if (!existingProduct) {
                adminErrors.getProductNotFoundError();
            }

            res.render('admin', { product: existingProduct });
        } catch (error) {
            console.error(error);
            adminErrors.getProductError(error);
        }
    },
    postProduct: async (req, res) => {
        try {
            const { title, description, price, thumbnail, code, stock, category } = req.body;
            const newProduct = new Product({
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                category,
            });
            await newProduct.save();
            const successMessage = 'Producto agregado a la base de datos con éxito.';
            res.render('admin', { successMessage });
        } catch (error) {
            console.error(error);
            adminErrors.addProductError(error);
        }
    },
    putProduct: async (req, res) => {
        try {
            const { code, title, description, price, thumbnail, stock, category } = req.body;
            const existingProduct = await Product.findOne({ code });

            if (!existingProduct) {
                return res.status(404).send('Producto no encontrado.');
            }

            existingProduct.title = title || existingProduct.title;
            existingProduct.description = description || existingProduct.description;
            existingProduct.price = price || existingProduct.price;
            existingProduct.thumbnail = thumbnail || existingProduct.thumbnail;
            existingProduct.stock = stock || existingProduct.stock;
            existingProduct.category = category || existingProduct.category;

            await existingProduct.save();

            const successMessage = 'Producto editado con éxito.';
            res.render('admin', { successMessage });

        } catch (error) {
            console.error(error);
            adminErrors.editProductError(error);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const { code } = req.body;
            const existingProduct = await Product.findOne({ code });

            if (!existingProduct) {
                return res.status(404).send('Producto no encontrado.');
            }
            await Product.deleteOne({ code });

            const successMessage = 'Producto eliminado con éxito.';
            res.render('admin', { successMessage });
        } catch (error) {
            console.error(error);
            adminErrors.deleteProductError(error);
        }
    },
    editPermissions: async (req, res) => {
        try {
            const { email, permissionLevel } = req.body;
            const user = await User.findOne({ email: email });

            if (!user) {
                return res.status(404).send('Usuario no encontrado.');
            }
            user.role = permissionLevel;
            await user.save();

            const successMessage = 'Permisos actualizados con éxito.';
            res.render('admin', { successMessage });

        } catch (error) {
            console.error(error);
            adminErrors.editPermissionsError(error);
        }
    }
};

export default adminController;
