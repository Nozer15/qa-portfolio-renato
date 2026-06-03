describe('TC03 - Login vazio', () => {
  beforeEach(() => { cy.visit('/') })

  it('deve exibir mensagem de campos obrigatórios', () => {
    cy.screenshot('tc03-01-campos-vazios')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.screenshot('tc03-02-erro-campos-obrigatorios')
  })
})