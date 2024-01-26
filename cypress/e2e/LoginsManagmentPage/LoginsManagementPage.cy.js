describe('Open the info of each required accoun and validate the title', ()=>{
  beforeEach("Login as an admin", ()=>{
    cy.loginAsAdmin()
    })

  it('Open the information pop-up of Instagram', ()=>{
    //Navigate to Login Management Page
    cy.get('[ng-if="is_settings_enabled"]').click()
    cy.get(':nth-child(4) > .button-box').click()
    //Search for Instagram info button
    cy.contains('Instagram').then((card) => {
      //Open the info button
      const infoButton = card.next()
      infoButton.click()})

    cy.get('.modal-title').should('have.text', 'Instagram')
    cy.get('.ol-button--secondary').click()
      
  })

  it('Open the information pop-up of Website Logins', ()=>{
    //Navigate to Login Management Page
    cy.get('[ng-if="is_settings_enabled"]').click()
    cy.get(':nth-child(4) > .button-box').click()
    //Search for Website Logins info button
    cy.contains('Website Logins').then((card) => {
      //Open the info button
      const infoButton = card.next()
      infoButton.click()})

    cy.get('.modal-title').should('have.text', 'Website Logins')
    cy.get('.ol-button--secondary').click()
      
  })

  it('Open the information pop-up of CRM Logins', ()=>{
    //Navigate to Login Management Page
    cy.get('[ng-if="is_settings_enabled"]').click()
    cy.get(':nth-child(4) > .button-box').click()
    //Search for CRM Logins info button
    cy.contains('CRM Logins').then((card) => {
      //Open the info button
      const infoButton = card.next()
      infoButton.click()})

    cy.get('.modal-title').should('have.text', 'CRM Logins')
    cy.get('.ol-button--secondary').click()
      
  })

})

describe('Send valid credentials to Required login', ()=>{
  beforeEach("Logins as Admin", ()=>{
    cy.loginAsAdmin()
  })
  it('Submit valid credentials', ()=>{
    //Navigate to Login Management Page
    cy.get('[ng-if="is_settings_enabled"]').click()
    cy.get(':nth-child(4) > .button-box').click()
    //Click on submit button
    cy.get(':nth-child(1) > .layout-align-start-stretch > .connected-account__info > .layout-gt-sm-row > :nth-child(2) > .connected-account__connect > .ol-button--block').click()
    //Fill the form
    cy.get('#model_url').clear().type("https://test.com")
    cy.get('#model_username').clear().type('qatask')
    cy.get('#model_password').clear().type('123')
    //Submit credentials
    cy.get('.col-xs-8 > .ol-button--primary').should('be.not.disabled')
    .click()
    //Verify the button have the text Update
    cy.get(':nth-child(1) > .layout-align-start-stretch > .connected-account__info > .layout-gt-sm-row > :nth-child(2) > .connected-account__connect > .ol-button--block').should('have.text', 'Update')
  
  })
})




