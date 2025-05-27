import { login } from "../../support/helper";

describe('Complete Purchase Flow', () => {
    it('should allow a user to buy a product from start to finish', () => {
        login();
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Smith');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="inventory-item"]').should('be.visible');
        cy.get('.summary_subtotal_label').should('contain.text', 'Item total: $29.99');
        cy.get('.summary_info').should('be.visible');
        cy.get('[data-test="total-label"]').should('contain.text', 'Total: $32.39');
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
        cy.get('[data-test="back-to-products"]').click();
        cy.url().should('include', '/inventory.html');
    });
});