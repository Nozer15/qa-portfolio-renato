describe('TC05 - Login com caracteres especiais', () => {
  beforeEach(() => { cy.visit('/') })

  it('deve exibir erro sem quebrar o sistema', () => {
    cy.get('[data-test="username"]').type('###@@@')
    cy.get('[data-test="password"]').type('!!!@@@')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
