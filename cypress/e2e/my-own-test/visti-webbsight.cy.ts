/// <reference types="cypress" />
import { login } from '../../support/helper'

beforeEach(() => {
  login();
});

describe('Login functionality', () => {
  it('should log in with valid credentials', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.app_logo').should('contain.text', 'Swag Labs').and('be.visible');
  });
});


