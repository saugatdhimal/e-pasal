// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../helpers/initDB";
import Product from "../../models/Product";
initDB();

export default (req, res) => {
  Product.find().then((data) => res.status(200).json(data));
};
