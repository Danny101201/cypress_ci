describe('spec.cy.js', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  before(() => {
    cy.request('https://jsonplaceholder.typicode.com/comments?_page=2').its('body').should('have.length', 10);
  })

  it('typs into email filed', () => {
    cy.findByPlaceholderText('Email').type('hiunji64@gmail.com')
    cy.wait(1000).then(() => cy.log('132'))
    cy.log('test is finished')
    cy.get('#password').type('superSecret123', { sensitive: true } as any)
  })

  it('shows an active class for the current page', () => {
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })

  it('shows not have an active class for the current page', () => {
    cy.get('.dropdown-menu')
      .find('li')
      .first()
      .should('not.have.class', 'active')
      .find('a')
      .should('have.attr', 'href', '/commands/querying')
  })
})
