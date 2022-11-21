/* eslint-disable @typescript-eslint/no-unused-vars */
import cypress from 'cypress'

describe('spec.cy.js', () => {
  beforeEach(() => {
    cy.visit('/commands/querying')
    Cypress.env('name', 'Danny')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('be.visible')
    cy.log(Cypress.env() as unknown as string)
  })

  it('renders the correct  h1 text', () => {
    cy.get('h1').should('contain.text', 'Querying')
  })

  it('renders the p  h1', () => {
    cy.get('.container').eq(2).first().find('p').should('be.visible')
  })

  it('renders a section with th ecorrect p  h1', () => {
    cy.get('.container').eq(1).within(() => {
      cy.get('h1').should('exist')
      cy.get('p').should('exist')
    })

    cy.get('.container').eq(1)
  })

  it('renders correctly the cypress weblink', () => {
    cy.findByText(Cypress.env('logoText')).should('exist')
  })
})
