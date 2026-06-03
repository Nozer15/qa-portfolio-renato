describe('TC03 - Login vazio', () => {
  beforeEach(() => { cy.visit('/') })

  it('deve exibir mensagem de campos obrigatórios', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})