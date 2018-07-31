browser.ignoreSynchronization = true;

var helper = require('./helper');

describe('Hello word', function () {
  xit ('mostrar banner', function() {
    browser.get('https://automacaocombatista.herokuapp.com/');
    helper.verifyElementPresentByClass('btn.waves-light.orange');
  });

  xit ('Acessar a opção iniciar testes', function(){
    var comecarAutomatizaWeb = $('.btn.waves-light.orange'),
        accordionOpcoes = $('.collapsible.collapsible-accordion');

    expect(comecarAutomatizaWeb.isDisplayed()).toBeTruthy();

    comecarAutomatizaWeb.click();
    expect(accordionOpcoes.isDisplayed()).toBeTruthy();
  });

  it ('cadastrar usuario', function(){
    browser.get('https://automacaocombatista.herokuapp.com/users/new').then( function(){
      var breadCrumb = $('.breadcrumb'),
          name = $('#user_name'),
          lastName = $('#user_lastname'),
          email = $('#user_email'),
          adress = $('#user_address'),
          university = $('#user_university'),
          profile = $('#user_profile'),
          gender = $('#user_gender'),
          age = $('#user_age');
          criar = $('.green');

          expect(breadCrumb.isDisplayed()).toBeTruthy();

          name.sendKeys('Jonathan');
          lastName.sendKeys('Santiago');
          email.sendKeys('jonathan@test.com');
          adress.sendKeys('rua dos bobos');
          university.sendKeys('Uniderp');
          profile.sendKeys('QA');
          gender.sendKeys('Male');
          age.sendKeys('24');

          criar.click();

    });
  });

});
