describe('fixture.cy.ts', () => {
  beforeEach(() => {
    cy.visit('/commands/network-requests')
    cy.fixture('example.json').then(function (userFixture) {
      this.data = userFixture
      cy.log(this.data as unknown as string)
    })
    cy.setLocalStorage('token', 'danny')
  })
  it('get example fixture', () => {
    cy.fixture('example.json').as('usersData').then((userFixture) => {
      cy.log(userFixture)
    })
  })
  it('update example fixture', () => {
    cy.fixture('example.json').as('usersData').then((userFixture) => {
      userFixture.body = '123'
      cy.log('data', userFixture)
    })
  })
  it('use fixture in netWork request', function () {
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then(res => {
      cy.log('Response', res as unknown as string)
    })
  })
  it('checkbox localstorage', () => {
    cy.getLocalStorage('token').should('eq', 'danny')
  })
})
