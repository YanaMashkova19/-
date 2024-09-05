describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');// Переходим на сайт
         cy.get('.login__content').should('be.visible');//Табличка авторизации видна пользователю
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN')//Вводим логин
         cy.get('#password').type('USER_PASSWORD');//Вводим пароль
         cy.get('.auth__button').contains('Войти');//Проверяем надпись на кнопке
         cy.get('.auth__button').click();//Нажимаем кнопку "Войти"
         cy.wait(2000);
         cy.get('.header__container > .header__id').should('be.visible');//Проверяем,что авторизация прошла и мы видим id и аватар пользователя в верхнем правом углу
         cy.get('.header__container > .header__id').click({ force: true });//Переходим на страницу тренера
         cy.wait(2000);
         cy.get('.trainer-img').should('be.visible');//Видим аватар тренера
         cy.get('[href="/shop"]').should('be.visible');//Видим кнопку смены аватара
         cy.get('[href="/shop"]').contains('Смена аватара');//Проверяем надпись
         cy.get('[href="/shop"]').click({ force: true });//Переходим в магазин
         cy.wait(2000);
         cy.get('.pokemon__title').should('be.visible');//Видим заголовок раздела
         cy.get('.pokemon__title').contains('Магазин');//видим надпись "Магазин"
         cy.get('.available > button').contains('Купить');//Видим кнопку "Купить"
         cy.get('.available > button').first().click({ force: true });
         cy.wait(2000);
         cy.get('.pay__payform-v2').should('be.visible');//Видим окно для ввода данных для оплаты
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5432 5432 5432 5430');//Вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1025');//Вводим срок карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//Вводим CVV код из инструкции API
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Имя Фамилия');//Вводим имя и фамилию
         cy.get('.pay-btn').should('be.visible');//Кнопка "оплатить" видна пользователю
         cy.get('.pay-btn').contains('Оплатить');// Проверяем надпись
         cy.get('.pay-btn').click({ force: true });//Нажимаем на кнопку "Оплатить"
         cy.wait(2000);
         cy.get('#cardnumber').should('be.visible');//Видим инпут для ввода кода из СМС
         cy.get('#cardnumber').type('56456');//Вводим код код из инструкции API
         cy.get('.payment__submit-button').should('be.visible');//Видим кнопку "Отправить"
         cy.get('.payment__submit-button').contains('Отправить');// приверяем надпись на кнопке
         cy.get('.payment__submit-button').click({ force: true });//Нажимаем кнопку "Отправить"
         cy.wait(2000);
         cy.get('.payment__padding').should('be.visible');//Видим подтверждение об оплате
         cy.get('.payment__padding').contains('Покупка прошла успешно');//Проверяем текст

     });
 });
