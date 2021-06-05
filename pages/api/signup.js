import initDB from '../../helpers/initDB';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

initDB();

export default async (req, res) => {
    const {name, email, password} = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(422).json({error: 'All Fields are required'});
        }
        const userExist = await User.findOne({email});
        if (userExist) {
            return res
                .status(422)
                .json({error: 'user already exists with that email address.'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await new User({
            name,
            email,
            password: hashedPassword,
        }).save();
        console.log(newUser);
        res.status(201).json({message: 'Successfully SignedUp'});
    } catch (error) {
        console.log(error);
    }
};
