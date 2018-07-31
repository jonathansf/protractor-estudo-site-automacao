//helper.js

module.exports = {
  verifyElementPresentByClass : function(classe) {
  var element = $('.' + classe);
  expect(element.isDisplayed()).toBeTruthy();
  }
};
