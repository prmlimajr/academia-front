const DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

// (XX) XXXXX-XXXX or (XX) XXXX-XXXX
const PHONE_MASK = function (userInput) {
  let numbers = userInput.match(/\d/g);
  let numberLength = 0;
  if (numbers) {
    numberLength = numbers.join('').length;
  }
  if (numberLength > 12) {
    return [
      '+',
      '5',
      '5',
      ' ',
      '(',
      /[1-9]/,
      /[1-9]/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  } else {
    return [
      '+',
      '5',
      '5',
      ' ',
      '(',
      /[1-9]/,
      /[1-9]/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }
};

export { PHONE_MASK, DATE_MASK };
