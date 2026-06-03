describe('ET02 - Spam de cliques no botão Add to Cart', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve adicionar o produto apenas uma vez após 30 cliques', () => {
    for (let i = 0; i < 30; i++) {
      cy.get('body').then(($body) => {
        if ($body.find('[data-test="add-to-cart-sauce-labs-backpack"]').length > 0) {
          cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        }
      })
    }
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
