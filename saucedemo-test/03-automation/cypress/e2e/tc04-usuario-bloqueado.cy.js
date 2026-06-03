describe('TC04 - Usuário bloqueado', () => {
  beforeEach(() => { cy.visit('/') })

  it('deve exibir mensagem de usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.screenshot('tc04-01-campos-preenchidos')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'locked out')
    cy.screenshot('tc04-02-erro-usuario-bloqueado')
  })
})