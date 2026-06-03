describe('TC01 - Login válido', () => {
  beforeEach(() => { cy.visit('/') })

  it('deve carregar a página de login', () => {
    cy.screenshot('tc01-01-pagina-login')
    cy.url().should('include', 'saucedemo.com')
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
    cy.screenshot('tc01-02-campos-visiveis')
  })

  it('deve autenticar o usuário', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.screenshot('tc01-03-campos-preenchidos')
    cy.get('[data-test="login-button"]').click()
    cy.screenshot('tc01-04-login-realizado')
  })
})