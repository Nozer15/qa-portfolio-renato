describe('TC08 - Adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve adicionar produto ao carrinho', () => {
    cy.screenshot('tc08-01-antes-adicionar')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.screenshot('tc08-02-produto-adicionado')
  })
})