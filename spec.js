browser.ignoreSynchronization = true;

var helper = require('./helper');

describe('Cadastro de usuario', function () {
  xit ('cadastrar usuario', function(){
    browser.get('/users/new').then( function(){
      var name = $('#user_name'),
          lastName = $('#user_lastname'),
          email = $('#user_email'),
          adress = $('#user_address'),
          university = $('#user_university'),
          profile = $('#user_profile'),
          gender = $('#user_gender'),
          age = $('#user_age'),
          criar = $('.green'),
          sucesso = $('#notice');

          helper.verifyElementPresentByClass('breadcrumb');

          name.sendKeys('Jonathan');
          lastName.sendKeys('Santiago');
          email.sendKeys('jonathan@test.com');
          adress.sendKeys('rua dos bobos');
          university.sendKeys('Uniderp');
          profile.sendKeys('QA');
          gender.sendKeys('Male');
          age.sendKeys('24');

          criar.click();

          // por ID
          // expect(sucesso.isDisplayed()).toBeTruthy();

          // Usando Helper
          helper.verifyElementPresentByClass('light-green');
          expect(sucesso.getText()).toContain('Usuário Criado com sucesso');
    });
  });

});

describe('Valida lista de usuario', function(){
  it('Verifica colunas da lista', function(){
    browser.get('/users').then( function(){

      var nome = $('th:nth-child(1)'),
          ultimoNome = $('th:nth-child(2)'),
          email = $('th:nth-child(3)'),
          universidade = $('th:nth-child(4)'),
          sexo = $('th:nth-child(5)'),
          profissao = $('th:nth-child(6)'),
          idade = $('th:nth-child(7)'),
          endereco = $('th:nth-child(8)'),
          acoes = $('th:nth-child(9)');

      expect(nome.getText()).toContain('Nome');
      expect(ultimoNome.getText()).toContain('Último Nome');
      expect(email.getText()).toContain('Email');
      expect(universidade.getText()).toContain('Universidade');
      expect(sexo.getText()).toContain('Sexo');
      expect(profissao.getText()).toContain('Profissão');
      expect(idade.getText()).toContain('Idade');
      expect(endereco.getText()).toContain('Endereço');
      expect(acoes.getText()).toContain('Ações');
    });
  });

});
