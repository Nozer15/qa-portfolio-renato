describe('ET04 - Navegação em múltiplas abas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('.inventory_list').should('be.visible')
  })

  it('deve permanecer consistente ao simular navegação em múltiplas abas', () => {
    // Adicionar primeiro produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.visit('/')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Adicionar segundo produto
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '2')
    cy.visit('/')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.shopping_cart_badge').should('have.text', '2')

    // Ir para o carrinho e remover primeiro produto
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list').should('be.visible')
    cy.get('button[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
