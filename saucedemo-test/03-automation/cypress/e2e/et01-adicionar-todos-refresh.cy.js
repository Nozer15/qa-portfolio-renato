describe('ET01 - Adicionar todos os produtos e atualizar a página', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve manter todos os produtos no carrinho após refresh', () => {
    cy.get('[class*="add-to-cart"]').each(($btn) => {
      cy.wrap($btn).click()
    })
    cy.get('.shopping_cart_badge').then(($badge) => {
      const total = $badge.text()
      cy.reload()
      cy.get('.shopping_cart_badge').should('have.text', total)
    })
  })
})
