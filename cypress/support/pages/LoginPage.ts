export class LoginPage {
  static visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  static fillUsername(username: string) {
    cy.get('[data-test="username"]').type(username);
  }

  static fillPassword(password: string) {
    cy.get('[data-test="password"]').type(password);
  }

  static submit() {
    cy.get('[data-test="login-button"]').click();
  }

  static assertUrlIncludes(path: string) {
    cy.url().should('include', path);
  }
  static login(username: string = Cypress.env('username'), password: string = Cypress.env('password')) {
    LoginPage.visit();
    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.submit();
    LoginPage.assertUrlIncludes('/inventory.html');
  }
  loginWithEnvCredentials() {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    LoginPage.login(username, password);
  }
  verifySuccessfulLogin() {
    cy.url().should('include', '/inventory.html');
    cy.get('.app_logo').should('contain.text', 'Swag Labs').and('be.visible');
  }

  loginWithInvalidCredentials() {
    const username = Cypress.env('invalid_username') || 'felanvändare';
    const password = Cypress.env('invalid_password') || 'fellösenord';
    LoginPage.visit();
    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.submit();
  }
  verifyErrorMessage() {
    cy.get('[data-test="error"]').should('be.visible')
    .and('contain.text', 'Username and password do not match any user in this service');
  }
}