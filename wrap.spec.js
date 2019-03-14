const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns same string if column number is greater than string length', () => {
    expect(wrap("the", 10)).to.equal("the");
  });
  it('Returns same string if column number is greater than string length', () => {
    expect(wrap("the quick brown fox", 20)).to.equal("the quick brown fox");
  });
  it('Returns same string if column number is equal to string length', () => {
    expect(wrap("the quick brown fox", 19)).to.equal("the quick brown fox");
  });
  it('Returns wrapped string', () => {
    expect(wrap("the quick brown fox", 18)).to.equal("the quick brown\nfox");
  });
});



