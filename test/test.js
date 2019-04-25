require('chai').should();

const maxAndMin = require('../index.js');

describe('Basic Tests', function () {

  it('should return a warning string when passed a non-array argument', function () {
    maxAndMin([1],'Feel the grooves').should.eql('Please enter two arrays.');
  });

  it('should only accept positive integers', function () {
    maxAndMin([1],[-2]).should.eql('Please enter positive integers only.');
  });

  it('should return 0 as smallest value when a number appears in both arrays', function () {
    maxAndMin([1,10],[1,10]).should.eql([9, 0]);
  });

  it('should return an array containing the max and min absolute values', function () {
    maxAndMin([1,2,3,4,5],[6,7,8,9]).should.eql([8, 1]);
    maxAndMin([54,27,1,43],[7,4,98,2]).should.eql([97, 1]);
    maxAndMin([42342342,54,136775,3464575473,3255],[534543543,278389465,6426,673]).should.eql([3464574800, 619]);
  });

});
