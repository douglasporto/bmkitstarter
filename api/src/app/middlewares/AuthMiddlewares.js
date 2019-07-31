import * as Yup from 'yup';

const auth = async (req, res, next) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('This e-mail is not valid')
      .required('e-mail is a required field'),
    password: Yup.string().required('password is a required field'),
  });

  try {
    await schema.validate(req.body, { abortEarly: true });
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default auth;
