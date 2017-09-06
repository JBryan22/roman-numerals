var Roman = require('./../js/roman.js').romanModule;
describe('Roman',function()
{
  it('should test whether parameter is a nummber',function()
  {
    var roman =  new Roman(1);
    expect(roman.number).toEqual(1);
  });
});

describe('Roman',function()
{
  it('should test whether parameter is between 1 and 3999',function()
  {
    var roman =  new Roman(0);
    expect(roman.convertNumToRom(0)).toEqual("Please enter a number between 1 and 3,999");
  });
});

describe('Roman',function()
{
  it('should test whether single number is converted to single character I',function()
  {
    var roman =  new Roman(1);
    expect(roman.convertNumToRom(1)).toEqual("I");
  });
});

describe('Roman',function()
{
  it('should test whether single number is converted to single character V',function()
  {
    var roman =  new Roman(5);
    expect(roman.convertNumToRom(5)).toEqual("V");
  });
});

describe('Roman',function()
{
  it('should test whether single number 6 is converted to VI',function()
  {
    var roman =  new Roman(6);
    expect(roman.convertNumToRom(6)).toEqual("VI");
  });
});

describe('Roman',function()
{
  it('should test whether three digit number is converted to CCCXXXIII',function()
  {
    var roman =  new Roman(333);
    expect(roman.convertNumToRom(333)).toEqual("CCCXXXIII");
  });
});

describe('Roman',function()
{
  it('should test whether a single digit 4 is converted to single character IV',function()
  {
    var roman =  new Roman(4);
    expect(roman.convertNumToRom(4)).toEqual("IV");
  });
});
