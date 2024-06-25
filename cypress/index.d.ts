declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in users automatically.
       * @example cy.login()
       */
      login(): Chainable<void>;
      apiLogin(): Chainable<void>;
    }
  }