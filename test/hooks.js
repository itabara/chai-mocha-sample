var chai = require('chai');
var expect = chai.expect;

// should.js is the preferred assertion library
var should = require('should');

// **Only 1 test case (in a nameless test suite)**
it('birds should fly', function(){
  /** here.should.be.tested
    * However, as long as no error within a it(),
    * it() is considered PASSED */
});

// **Only 1 test case, but nested 3-level deep**

// describe() are:
// - commonly known as test suites, which contains test cases
// - merely groups, and you can have groups within groups
describe('TS1: Test suite', function(){
  describe('TS1.1: Test suite', function(){
    describe('TS1.1.1: Test suite', function(){
      it('TC1: birds should fly', function(){ /** ... */ });
    });
  });
});

// **2 test cases in 1 test suite**
// A common scenario.
describe('TS1: Test suite', function(){
  it('TC1: birds should fly', function(){ /** ... */ });
  it('TC2: horse should gallop', function(){ /** ... */ });
});


// **Run once before the first test case**
describe('TS1: Test suite', function(){
  before(function(){
    console.log('see.. this function is run ONCE only');
  });
  it('TC1: birds should fly', function(){ /** ... */ });
  it('TC2: horse should gallop', function(){ /** ... */ });
});

// **Run once before each test case**
describe('TS1: Test suite', function(){
  beforeEach(function(){
    console.log('see.. this function is run EACH time');
  });
  it('TC1: birds should fly', function(){ /** ... */ });
  it('TC2: horse should gallop', function(){ /** ... */ });
});

// **2 test suites in a big test suite**
// A common scenario.
describe('TS1: Test suite', function(){
  describe('TS1.1: Test suite', function(){
    it('TC1: birds should fly', function(){ /** ... */ });
  });
  describe('TS1.2: Test suite', function(){
    it('TC1: birds should soar', function(){ /** ... */ });
  });
});


// **before() can be applied to describe() too**
describe('TS1: Test suite', function(){
  before(function(){
    console.log('see.. this function is run ONCE only, before first describe()');
  });
  describe('TS1.1: Test suite', function(){
    it('TC1.1.1: birds should fly', function(){ /** ... */ });
  });
  describe('TS1.2: Test suite', function(){
    it('TC1.2.1: birds should soar', function(){ /** ... */ });
  });
});

// **beforeEach() can be applied to describe() too**
describe('TS.1: Test suite', function(){
  beforeEach(function(){
    console.log('see.. this function is run EACH time, before each describe()');
  });
  describe('TS1.1: Test suite', function(){
    it('TC1.1.1: birds should fly', function(){ /** ... */ });
  });
  describe('TS1.2: Test suite', function(){
    it('TC1.2.1: birds should soar', function(){ /** ... */ });
  });
});

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 200);
  });
});
