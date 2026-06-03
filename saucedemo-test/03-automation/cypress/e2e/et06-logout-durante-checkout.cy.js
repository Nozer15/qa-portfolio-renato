describe('ET06 - Logout durante o checkout', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve encerrar sessão corretamente ao fazer logout durante checkout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.url().should('include', 'saucedemo.com')
    cy.get('[data-test="username"]').should('be.visible')
  })
})
