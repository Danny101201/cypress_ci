describe('spec.cy.js', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('UI TEST', () => {
    cy.findByText('Commands').click();
    cy.findAllByText('Actions').first().click()
    cy.url().should('include', 'commands/actions')
  })

  it('Input Test', () => {
    cy.findByPlaceholderText('Email').type('hiunji64@gmail.com').should('have.value', 'hiunji64@gmail.com');
  })

  it('lets you clear input value', () => {
    cy.findByPlaceholderText('Enter your name').type('Name').should('have.value', 'Name').clear().should('have.value', '');
    cy.get('input[type="checkbox"]').first().click().should('be.checked');
  })
  it('use fixture', () => {
    cy.fixture('example.json').as('usersData').then((userFixture) => {
      cy.log(userFixture)
    })
  })
  it('trigger a popover on click', () => {
    cy.get('.action-btn').click()
    cy.contains('This popover shows up on click').should('be.visible')
  })
  it('click on different section of the canvas', () => {
    cy.get('#action-canvas')
      .click(80, 75)
      .click(80, 80)
  })
  it('dblclick', () => {
    cy.get('.action-div').should('be.visible')
    cy.get('.action-div').dblclick().should('be.not.visible')
    cy.get('.action-input-hidden').should('be.visible')

    // cy.get('.dropdown-toggle').trigger('mouseover')
    // cy.get('.dropdown-menu').should('be.visible')

  })
})
