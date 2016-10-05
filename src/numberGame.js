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
  let keys = Object.keys(numbers);

  keys.forEach((key)=>{
    result += number % parseInt(key) === 0 || number.toString().indexOf(key) !== -1 ? numbers[key] : '';
  });
  return result ? result : number.toString();
}

module.exports = numberReport;