describe('TC13 - Persistência do carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve manter produto no carrinho ao navegar entre páginas', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.inventory_item_name').first().click()
    cy.go('back')
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
