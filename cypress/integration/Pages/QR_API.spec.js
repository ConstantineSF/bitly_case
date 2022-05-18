describe('Check QR API Page', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    before( () =>{
        cy.visit('/#url')
        cy.contains('QR Code API').click()
    })

    it('QR API Page content', () => {
        cy.contains('QR Code API with Logo and Design').should('be.visible')
        cy.contains('Methods GET, POST, OPTIONS').should('be.visible')
    })

})