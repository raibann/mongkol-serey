export const validatePatterns = {
  phoneNumber: /0[0-9]{8}$|0[0-9]{9}$/,
  numberOnly: /^-?[0-9]\d*(\.\d+)?$/,
  positiveNumberOnly: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/,
  positiveNumberOnlyandEmpty: /$^|^[0-9]\d*(\.\d+)?\.?$/,
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};
