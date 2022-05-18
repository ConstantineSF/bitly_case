describe('URL QR Code', () => {

    before( () =>{
      cy.visit('/#url')
    })
    
    it('Checks default QR code', () => {
      cy.verifyCodeMessage(Cypress.env('defaultUrl'))
    })
    
    it('Checks QR code with new URL', () => {
      cy.get('input#qrcodeUrl').clear().type(Cypress.env('testUrl'))
      cy.get('#button-create-qr-code').click().then((button) => {
        cy.wrap(button).should('have.attr','disabled','disabled')
        cy.get('.loading-screen').eq(1).should('not.have.class','ng-animate').wait(1500) //wait added to avoid failed results if code not generated yet
      })
      cy.verifyCodeMessage(Cypress.env('testUrl'))
     
    })
    
    it('Checks validation error with invalid URL', () => {
      cy.get('input#qrcodeUrl').clear().type('notValidUrl')
      cy.get('#button-create-qr-code').click()
      cy.contains('Enter a valid URL').should('be.visible')
      cy.contains('There are errors you have to fix before generating').should('be.visible')
    })

    it('Check PRO AD while Download PNG', () => {
        cy.get('#button-create-qr-code').click()
        cy.contains('Download PNG').click()
        cy.checkSignUpPage()    
    })

    it.skip('Verify the downloaded file', () => {
        cy.get('#button-create-qr-code').click()
        cy.contains('Download PNG').click()
        cy.contains('Done Generating.',{ timeout: 15000 })
        // cy.readFile('@downloadPath').should('exist')
     });
    
    
    
    })