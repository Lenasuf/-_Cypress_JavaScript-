describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //  сайт
         cy.get('#mail').type('german@dolnikov.ru'); // верный логин
         cy.get('#pass').type('iLoveqastudio1'); // верный пароль
         cy.get('#loginButton').click(); // нажатие кнопки войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста
         cy.get('#messageHeader').should('be.visible'); // видно пользователю 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
     })

     it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); // нажать забыли пароль
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // есть надпись 
        cy.get('#forgotForm > .header').should('be.visible'); // она видна пользователю
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввести почту
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка на негативный кейс авторизации ошибка в пароле', function () {
        cy.visit('https://login.qa.studio/'); //  сайт
        cy.get('#mail').type('german@dolnikov.ru'); // верный логин
        cy.get('#pass').type('iLoveqastuапуdio1'); // не верный пароль
        cy.get('#loginButton').click(); // нажатие кнопки войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
    })

    it('Проверка на негативный кейс авторизации ошибка логина', function () {
        cy.visit('https://login.qa.studio/'); //  сайт
        cy.get('#mail').type('ushewfuhe@owie.ru'); // неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // верный пароль
        cy.get('#loginButton').click(); // нажатие кнопки войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
    })

    it('Проверка на негативный кейс авторизации логин без @', function () {
        cy.visit('https://login.qa.studio/'); //  сайт
        cy.get('#mail').type('germandolnikov.ru'); // неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // верный пароль
        cy.get('#loginButton').click(); // нажатие кнопки войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //  сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // верный пароль
        cy.get('#loginButton').click(); // нажатие кнопки войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
    })

 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 