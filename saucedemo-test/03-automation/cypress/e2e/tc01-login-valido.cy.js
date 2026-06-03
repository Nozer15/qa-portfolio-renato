describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('/') 
  })

  it('deve carregar a página de login', () => {
    cy.url().should('include', 'saucedemo.com')
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
  })


  it('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {
    cy.login()
  })


})