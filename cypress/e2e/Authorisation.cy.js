describe(`Проверка авторизации`, function () {
  
    beforeEach('Начало теста', function () {
        cy.visit('https://login.qa.studio/');//Перейти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяем цвет кнопки
          });
          
     afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверить,что крестик виден
         });

    it(`Верный логин и верный пароль`, function (){
        
        cy.get('#mail').type('german@dolnikov.ru');//Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажали "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        


    })

    it(`Проверка логики восстановления пароля`, function (){
         cy.get('#forgotEmailButton').contains('Забыли пароль?');//Проверяю,что кнопка содержит нужный текст
        cy.get('#forgotEmailButton').click();//Нажать на кнопку"Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru');//Нашли инпут и ввели верный логин 
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');//Проверить,что крестик видно
        cy.get('#restoreEmailButton').contains('Отправить код');//Проверяю,что кнопка содежит нужный текст
        cy.get('#restoreEmailButton').click();//Нажали на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')//Проверяю,что после отправки логина вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        


    })

    it(`Верный логин и НЕверный пароль`, function (){
        cy.get('#mail').type('german@dolnikov.ru');//Ввели верный логин
        cy.get('#pass').type('iLoveqastudio');//Ввели НЕверный пароль
        cy.get('#loginButton').click();//Нажали "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        


    })

    it(`НЕверный логин и верный пароль`, function (){
        cy.get('#mail').type('man@dolnikov.ru');//Ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажали "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
     


    })

    it(`Логин без @ и верный пароль`, function (){
         cy.get('#mail').type('germandolnikov.ru');//Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажали "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
       


    })

    it(`Верный логин с заглавными буквами и верный пароль`, function (){
        cy.get('#mail').type('GerMan@Dolnikov.ru');//Ввели верный логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//Нажали "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        


    })
})