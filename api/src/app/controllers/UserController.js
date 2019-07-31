import User from '../models/User';

class UserController {
  async index(req, res) {
    const user = await User.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return res.json(user);
  }

  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(422).json({
        error: 'User already exist',
      });
    }
    const user = await User.create(req.body);

    return res.status(201).json(user);
  }
}

export default new UserController();
