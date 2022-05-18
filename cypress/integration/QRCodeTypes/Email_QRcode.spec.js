describe('Email QR Code', () => {

    before( () =>{
      cy.visit('/#email')
    })
    
    it('Check that text field required', () => {
        cy.get('#button-create-qr-code').click()
        cy.contains('There are errors you have to fix before generating.').should('be.visible')
        cy.contains('Enter a valid Email').should('be.visible')
        
    })

    it('Check new Email QR code', () => {
        cy.get('#qrcodeEmail').type('testemail@mail.com')
        cy.get('#qrcodeEmailSubject').type('subject')
        cy.get('#qrcodeEmailMessage').type('emailMessage')
        cy.get('#button-create-qr-code').click().wait(2000)
        cy.verifyCodeMessage('mailto:testemail@mail.com?subject=subject&body=emailMessage')
    })

})