Cypress.Commands.add('loginAsAdmin', ()=>{
    cy.visit('https://stage.dashboard.onelocal.com/admin')
    cy.get('#input_0').type('qatask')
    cy.get('#password').type('123')
    cy.get(".ol-button--primary").click()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })