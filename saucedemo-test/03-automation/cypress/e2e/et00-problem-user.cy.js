describe('ET00 - Login com usuário problemático', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.inventory_list').should('be.visible')
  })

  it('deve exibir imagens diferentes em cada produto (bug esperado)', () => {
    cy.get('.inventory_item_img img').should('have.length.greaterThan', 0)
    
    const imagens = []
    cy.get('.inventory_item_img img').each(($img) => {
      imagens.push($img.attr('src'))
    }).then(() => {
      const unicas = new Set(imagens)
      expect(unicas.size).to.be.greaterThan(1)
    })
  })
})
