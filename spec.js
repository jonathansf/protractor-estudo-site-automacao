browser.ignoreSynchronization = true;

describe('Hello word', function () {
  it('mostrar banner', function() {
    browser.get('https://automacaocombatista.herokuapp.com/');
    var banner = $('#index-banner');
  });
})
