describe('ET04 - Navegação em múltiplas abas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve permanecer consistente ao simular navegação em múltiplas abas', () => {
    // Cypress não suporta múltiplas abas reais
    // Simulamos adicionando, navegando e voltando várias vezes
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.visit('/')
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.visit('/')
    cy.get('.shopping_cart_badge').should('have.text', '2')

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.visit('/')
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
