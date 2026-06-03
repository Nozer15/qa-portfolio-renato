describe('TC09 - Adicionar múltiplos produtos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve mostrar quantidade correta no carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '2')
  })
})
