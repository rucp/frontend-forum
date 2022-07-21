const validateName = (name) => {
  // console.log(name?.toString().length > 2)
  return name?.toString().length > 2;
};

const validateEmail = (email) => {
  // console.log(email?.toString().includes('@') && email?.toString().includes('.'))
  return email?.toString().includes('@') && email?.toString().includes('.');
};

const validatePassword = (password) => {
  // console.log(password?.toString().length > 6);
  return password?.toString().length > 6;
};

const validateConfirmPassword = (password, confirmPassword) => {
  // console.log(validatePassword(password) && password === confirmPassword);
  return validatePassword(password) && password === confirmPassword;
};

const validateGender = (gender) => {
  console.log(gender?.toString().length > 2)
  return gender?.toString().length > 2;
};

const validateOcupation = (ocupation) => {
  // console.log(ocupation?.toString().length > 3);
  return ocupation?.toString().length > 3;
};

const validateCity = (city) => {
  // console.log(city?.toString().length >= 3)
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
