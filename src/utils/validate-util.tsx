export const validatePatterns = {
  phoneNumber: /0[0-9]{8}$|0[0-9]{9}$/,
  numberOnly: /^-?[0-9]\d*(\.\d+)?$/,
  positiveNumberOnly: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/,
  positiveNumberOnlyandEmpty: /$^|^[0-9]\d*(\.\d+)?\.?$/,
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  textOnly: /^[a-zA-Z ]*$/,
};

// format separateComma
export const separateComma = (val: number | string) => {
  // remove sign if negative
  var sign = 1;
  if (val < 0) {
    sign = -1;
    val = -val;
  }
  // trim the number decimal point if it exists
  let num = val.toString().includes('.')
    ? val.toString().split('.')[0]
    : val.toString();
  let len = num.toString().length;
  let result = '';
  let count = 1;

  for (let i = len - 1; i >= 0; i--) {
    result = num.toString()[i] + result;
    if (count % 3 === 0 && count !== 0 && i !== 0) {
      result = ',' + result;
    }
    count++;
  }

  // add number after decimal point
  if (val.toString().includes('.')) {
    result = result + '.' + val.toString().split('.')[1];
  }
  // return result with - sign if negative
  return sign < 0 ? '-' + result : result;
};

// format cash
export const formatCash = (n: number) => {
  if (n < 1e3) return n.toLocaleString(undefined, { minimumFractionDigits: 2 });
  if (n >= 1e3 && n < 1e6)
    return n.toLocaleString(undefined, { minimumFractionDigits: 2 });
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
};

// format background color
export const changeBackground = (name?: string) => {
  var hash = 0;
  let i;
  if (name) {
    for (i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};
// format invoice id
export const formatInvoiceId = (value: string) => {
  const pad = '00000';
  return pad.substring(0, pad.length - value.length) + value;
};
