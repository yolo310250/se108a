const assert = require('assert')
const _ = require('../ccclodash')
const expect = require('chai').expect

describe('ccclodash', function() {
  describe('chunk', function() {
    it("_.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]", function() {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 2), [ [ 'a', 'b'], ['c' , 'd' ] ])
    });
    it("_.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]", function() {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [ [ 'a', 'b', 'c' ], [ 'd' ] ])
    });
    it("_.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]", function() {
      assert.notDeepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [ [ 'a', 'b'], ['c' , 'd' ] ])
    });
  });
  describe('drop', function() {
    it("_.drop([1, 2 ,3]) equalTo [ 2, 3 ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3]), [ 2,3 ])
    });
    it("_.drop([1, 2 ,3], 2) equalTo [ 3 ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 2), [ 3 ])
    });
    it("_.drop([1, 2 ,3], 5) equalTo [  ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 5), [  ])
    });
    it("_.drop([1, 2 ,3], 0) equalTo [ 1, 2, 3 ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 0), [1, 2, 3 ])
    });
  });
  describe('dropRight', function() {
    it("_.dropRight([1, 2 ,3], 2) equalTo [ 1 ]", function() {
      assert.deepStrictEqual(_.dropRight([1, 2, 3], 2), [ 1 ])
    });
  });
  describe('compact', function() {
    it("_.compact([0, 1, false, 2, '', 3, null]) equalTo [ 1, 2, 3 ]", function() {
      assert.deepStrictEqual(_.compact([0, 1, false, 2, '', 3, null]), [ 1, 2, 3])
    });
  });
  describe('last', function() {
    it("_.last([1, 2, 3])) equalTo [ 3 ]", function() {
      expect(_.last([1,2,3])).to.deep.equal([3]);
    });
  });
});