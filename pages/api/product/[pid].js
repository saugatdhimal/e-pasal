import Product from '../../../models/Product';

export default async (req, res) => {
    switch(req.method){
		case 'GET':
			await getProduct(req, res)
			break;
		case 'DELETE':
			await deleteProduct(req, res)
			break;
	}
};

const getProduct = async (req, res) => {
    const {pid} = req.query;
    await Product.findOne({_id: pid}).then((data) => res.status(200).json(data));
};

const deleteProduct = async (req, res) => {
    const {pid} = req.query;
    await Product.findByIdAndDelete({_id: pid}).then(() => res.status(200).json('Deleted Successfully'));
};
