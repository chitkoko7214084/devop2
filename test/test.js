var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return null if negative value', function() {
        assert.strictEqual(main.factorial(-1), null);
      });
});

describe('Testing for 3', function() {
  it('should return 6 for 3', function() {
      assert.strictEqual(main.factorial(3), 6);
    });
});