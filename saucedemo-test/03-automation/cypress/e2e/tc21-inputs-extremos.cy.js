describe('TC21 - Inputs com dados extremos', () => {
  beforeEach(() => { cy.visit('/') })

  it('não deve quebrar com texto muito grande ou emojis', () => {
    const textoGrande = 'A'.repeat(500)
    cy.get('[data-test="username"]').type(textoGrande)
    cy.get('[data-test="password"]').type('🎉🔥💥'.repeat(10))
    cy.screenshot('tc21-01-inputs-extremos')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.screenshot('tc21-02-sistema-estavel')
  })
})
