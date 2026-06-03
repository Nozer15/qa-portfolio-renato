describe('TC12 - Carrinho vazio', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve abrir carrinho vazio sem erro', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('.cart_item').should('not.exist')
    cy.get('[data-test="checkout"]').should('be.visible')
  })
})
