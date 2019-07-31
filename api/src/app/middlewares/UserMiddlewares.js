import * as Yup from 'yup';

const createUser = async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('name is a required field'),
    email: Yup.string()
      .email()
      .required('e-mail is a required field'),
    password: Yup.string()
      .required('password is a required field')
      .min(6)
      .max(10),
  });

  try {
    await schema.validate(req.body, { abortEarly: true });
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default createUser;
