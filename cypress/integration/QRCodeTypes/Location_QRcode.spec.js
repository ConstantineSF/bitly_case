describe('Location QR Code', () => {

    before( () =>{
      cy.visit('/#maps')
    })

    it('Check new Location QR code', () => {
        cy.get('#qrcodeMapsLatitude').clear().type('50')
        cy.get('#qrcodeMapsLongitude').clear().type('13')
        cy.get('#button-create-qr-code').click().wait(2000)
        cy.verifyCodeMessage('https://maps.google.com/local?q=50,13')
    })

    it('Check search adress(not displaying)', () => {
        cy.get('[ng-model="mapsSearch"]').clear().type('5th Avenue, New York')
    })

})

