describe('TC19 - Uso do botão voltar do navegador', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve manter estado ao usar botão voltar', () => {
    cy.go('back')
    cy.get('.cart_item').should('be.visible')
  })
})
