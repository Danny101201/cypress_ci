/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

interface Cypress { }

declare namespace Cypress {
  interface Chainable {
    // 這裡面擺放的是自訂 Command 的宣告
    // 例如：
    getLocalStorage(key: string): Chainable<void>
    setLocalStorage(key: string, value: string): Chainable<void>
    checkToken(token: string): Chainable<void>
  }
}
Cypress.Commands.add('getLocalStorage', (key) => {
  // cy.window().its('localStorage.token').should('eq', token)
  cy.window().then(window => {
    return window.localStorage.getItem(key)
  })
})
Cypress.Commands.add('checkToken', (token) => {
  cy.window().its('localStorage.token').should('eq', token)
})
Cypress.Commands.add('setLocalStorage', (key, value) => {
  cy.window().then(window => {
    window.localStorage.setItem(key, value)
  })
})

interface TypeOptions extends Cypress.TypeOptions {
  sensitive: boolean
}

Cypress.Commands.overwrite<'type', 'element'>(
  'type',
  (originalFn, element, text, options?: Partial<TypeOptions>) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }

    return originalFn(element, text, options)
  }
)



