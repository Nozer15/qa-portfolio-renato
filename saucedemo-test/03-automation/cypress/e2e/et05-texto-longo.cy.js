describe('ET05 - Inserção de texto extremamente longo', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve permanecer estável com mais de 1000 caracteres nos campos', () => {
    const textoLongo = 'A'.repeat(1000)
    cy.get('[data-test="firstName"]').type(textoLongo)
    cy.get('[data-test="lastName"]').type(textoLongo)
    cy.get('[data-test="postalCode"]').type(textoLongo)
    cy.get('[data-test="continue"]').click()
    cy.get('body').should('be.visible')
  })
})
