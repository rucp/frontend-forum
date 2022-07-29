const validateName = (name) => {
  return name?.toString().length > 2;
};

const validateEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.');
};

const validatePassword = (password) => {
  return password?.toString().length > 6;
};

const validateConfirmPassword = (password, confirmPassword) => {
  return validatePassword(password) && password === confirmPassword;
};

const validateGender = (gender) => {
  return gender?.toString().length > 2;
};

const validateOcupation = (ocupation) => {
  return ocupation?.toString().length > 3;
};

const validateCity = (city) => {
  return city?.toString().length >= 3;
};

export {
  validateEmail,
  validatePassword,
  validateName,
  validateGender,
  validateOcupation,
  validateCity,
  validateConfirmPassword,
};
