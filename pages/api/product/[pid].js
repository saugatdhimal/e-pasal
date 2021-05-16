import Product from "../../../models/Product";

export default (req, res) => {
    const {pid} = req.query;
    return new Promise(resolve => {
    Product.findOne({_id: pid}).then((data) => res.status(200).json(data))
    return resolve
  })
  };