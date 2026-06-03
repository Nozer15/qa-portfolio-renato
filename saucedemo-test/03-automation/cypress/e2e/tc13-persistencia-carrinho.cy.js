describe('TC13 - Persistência do carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve manter produto no carrinho ao navegar', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.screenshot('tc13-01-produto-adicionado')
    cy.get('.inventory_item_name').first().click()
    cy.screenshot('tc13-02-pagina-detalhes')
    cy.go('back')
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.screenshot('tc13-03-carrinho-persistiu')
  })
})
