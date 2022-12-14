export const validateRegister = (
  name,
  lastname,
  email,
  password1,
  password2
) => {
  const validate = {
    name: name.length <= 1 ? "the name is required" : false,
    lastname: lastname.length <= 1 ? "the lastname is required" : false,
    email: !email.includes("@") ? "This email is invalid" : false,
    password1:
      password1.length <= 6
        ? "the password must have more than 6 characters"
        : false,
    password2: password1 !== password2 ? "Passwords do not match" : false,
  };

  return {
    ...validate,
  };
};

export const validateLogin = (email, password) => {
  const validate = {
    email: !email.includes("@") ? "This email is invalid" : false,
    password:
      password.length <= 6
        ? "the password must have more than 6 characters"
        : false,
  };

  return {
    ...validate,
  };
};
