/**
 * Created by ritter on 16-10-5.
 */

const numberReport = require('../../src/numberGame');

describe('number game', ()=> {

  it('should return 1 when input 1', ()=> {
    let expected = numberReport(1);
    expect(expected).toEqual('1');
  });

  it('should return fizz when input 3', ()=> {
    let expected = numberReport(3);
    expect(expected).toEqual('fizz');
  });

  it('should return fizz when input 13', ()=> {
    let expected = numberReport(13);
    expect(expected).toEqual('fizz');
  });

  it('should return buzz when input 5', ()=> {
    let expected = numberReport(5);
    expect(expected).toEqual('buzz');
  });

  it('should return whizz when input 7', ()=> {
    let expected = numberReport(7);
    expect(expected).toEqual('whizz');
  });

  it('should return whizz when input 27', ()=> {
    let expected = numberReport(27);
    expect(expected).toEqual('fizzwhizz');
  });

  it('should return fizzwhizz when input 21', ()=> {
    let expected = numberReport(21);
    expect(expected).toEqual('fizzwhizz');
  });

});