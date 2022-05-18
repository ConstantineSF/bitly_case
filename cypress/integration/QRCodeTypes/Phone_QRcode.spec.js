describe('Phone QR Code', () => {

    before( () =>{
      cy.visit('/#phone')
    })
    
    it('Check that text field required', () => {
        cy.get('#button-create-qr-code').click()
        cy.contains('There are errors you have to fix before generating.').should('be.visible')
        cy.contains('Enter a valid Phone Number').should('be.visible')
        
    })

    it('Check new Email QR code', () => {
        cy.get('#qrcodePhone').type('+1234567890')
        cy.get('#button-create-qr-code').click().wait(2000)
        cy.verifyCodeMessage('tel:+1234567890')
    })

})

