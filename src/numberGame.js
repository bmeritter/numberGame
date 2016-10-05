/**
 * Created by ritter on 16-10-5.
 */

function numberReport(number) {
  let result = '';

  if (number % 3 === 0) {
    result += 'fizz';
  }
  if (number % 5 === 0) {
    result += 'buzz';
  }
  if (number % 7 === 0) {
    result += 'whizz';
  }
  if (result === '') {
    result += number.toString();
  }
  return result;
}

module.exports = numberReport;