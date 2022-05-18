describe('Text QR Code', () => {

    before( () =>{
      cy.visit('/#text')
    })
    
    it('Check that text field required', () => {
        cy.get('#button-create-qr-code').click()
        cy.contains('There are errors you have to fix before generating.').should('be.visible')
        cy.contains('This field is required').should('be.visible')
        
    })

    it('Check new Text QR code', () => {
        cy.get('[name="textForm"]').type('testText')
        cy.get('#button-create-qr-code').click().wait(2000)
        cy.verifyCodeMessage('testText')
    })

})