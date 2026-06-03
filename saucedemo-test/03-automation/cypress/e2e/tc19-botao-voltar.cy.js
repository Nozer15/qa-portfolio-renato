describe('TC19 - Uso do botão voltar do navegador', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve manter estado ao usar botão voltar', () => {
    cy.screenshot('tc19-01-pagina-checkout')
    cy.go('back')
    cy.get('.cart_item').should('be.visible')
    cy.screenshot('tc19-02-apos-voltar')
  })
})
