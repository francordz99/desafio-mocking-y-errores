import { faker } from "@faker-js/faker";

export const productsGenerator = () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price(100, 9000, 2)),
        thumbnail: faker.image.imageUrl(),
        code: faker.random.alphaNumeric(7),
        stock: parseInt(faker.random.numeric(3)),
        category: faker.commerce.department(),
    }
};