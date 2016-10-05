/**
 * Created by ritter on 16-10-5.
 */

let numbers = {
  '3': 'fizz',
  '5': 'buzz',
  '7': 'whizz'
};

function numberReport(number) {
  let result = '';

  if (number % 3 === 0 || number.toString().indexOf('3') !== -1) {
    result += numbers[3];
  }
  if (number % 5 === 0 || number.toString().indexOf('5') !== -1) {
    result += numbers[5];
  }
  if (number % 7 === 0 || number.toString().indexOf('7') !== -1) {
    result += numbers[7];
  }

  if (result === '') {
    result += number.toString();
  }
  return result;
}

module.exports = numberReport;