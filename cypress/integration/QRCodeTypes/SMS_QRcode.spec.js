describe('SMS QR Code', () => {

    before( () =>{
      cy.visit('/#sms')
    })
    
    it('Check that text field required', () => {
        cy.get('#button-create-qr-code').click()
        cy.contains('There are errors you have to fix before generating.').should('be.visible')
    })

    it('Check new SMS QR code', () => {
        cy.get('#qrcodeSmsPhone').type('+1234567890')
        cy.get('#qrcodeSmsText').type('smsText')
        cy.get('#button-create-qr-code').click().wait(2000)
        cy.verifyCodeMessage('SMSTO:+1234567890:smsText')
    })

})

