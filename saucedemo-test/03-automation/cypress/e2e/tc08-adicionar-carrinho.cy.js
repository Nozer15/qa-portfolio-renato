describe('TC08 - Adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve adicionar produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
