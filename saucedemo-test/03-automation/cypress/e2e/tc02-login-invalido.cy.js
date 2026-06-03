describe('TC02 - Login inválido (senha errada)', () => {
  beforeEach(() => { cy.visit('/') })

  it('deve exibir mensagem de erro com senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.screenshot('tc02-01-campos-preenchidos')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.screenshot('tc02-02-erro-exibido')
  })
})