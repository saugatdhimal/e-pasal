// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from '../../helpers/initDB';
import Product from '../../models/Product';
initDB();

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            await getAllProducts(req, res);
            break;
        case 'POST':
            await saveProduct(req, res);
            break;
    }
};

const getAllProducts = async (req, res) => {
    try {
        await Product.find().then((data) => res.status(200).json(data));
    } catch (error) {
        console.log(error);
    }
};

const saveProduct = async (req, res) => {
    try {
        const {name, price, description, imageUrl} = req.body;
        if (!name || !price || !description || !imageUrl) {
            res.status(422).json({error: 'All Fields are required'});
        }
        const product = await new Product({
            name,
            price,
            description,
            imageUrl,
        }).save();
        res.status(201).json(product);
    } catch (error) {
        console.log(error);
    }
};
