describe('ET01 - Adicionar todos os produtos e atualizar a página', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('.inventory_list').should('be.visible')
  })

  it('deve manter todos os produtos no carrinho após refresh', () => {
    // Adicionar todos os produtos
    cy.get('[class*="add-to-cart"]').each(($btn, index) => {
      cy.wrap($btn).click()
      cy.get('.shopping_cart_badge').should('have.text', String(index + 1))
    })

    // Contar quantos produtos foram adicionados
    cy.get('.shopping_cart_badge').should('exist').invoke('text').as('cartTotal')

    // Reload e validar
    cy.reload()
    cy.get('.inventory_list').should('be.visible')
    cy.get('@cartTotal').then(total => {
      cy.get('.shopping_cart_badge').should('have.text', total)
    })
  })
})
