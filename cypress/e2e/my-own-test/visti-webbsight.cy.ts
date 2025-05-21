/// <reference types="cypress" />
import { vi } from '@faker-js/faker/.';
import { login } from '../../support/helper'

beforeEach(() => {
    //  login();
});

describe('Login functionality', () => {
    it('should log in with valid credentials', () => {
        login();
        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('contain.text', 'Swag Labs').and('be.visible');
    });
    it('should not log in with invalid credentials', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').clear().type('invalid_user');
        cy.get('[data-test="password"]').clear().type('invalid_password');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });

});


