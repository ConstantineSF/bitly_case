describe('Check Main Page', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    before( () =>{
        cy.visit('/#url')
    })
    it('Check main page content', () => {
        cy.contains('The 100% Free QR Code Generator').should('be.visible')
        cy.contains('The professional QR Code Management platform to create, track and edit all your QR codes in one place.').should('be.visible')
        cy.contains('The Free QR Code Generator for High Quality QR Codes').should('be.visible')
        //The professional QR Code Management platform to create, track and edit all your QR codes in one place.

    })
    it('Check Header', () => {
        cy.get('.header').within(()=>{
            cy.contains('About').should('have.attr','href','/#about')
            cy.contains('Chrome App').should('have.attr','href',Cypress.env('chromeStoreUrl'))
            cy.contains('QR Code API').should('have.attr','href','https://www.qrcode-monkey.com/qr-code-api-with-logo/')
        })

    })
    it('Check QR code template', () => {
        cy.contains('QR Code Templates').click()
        cy.get('.template').eq(getRandomInt(13)).click()
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))
    })

    it('Check social links', () => {
        cy.get('[href="https://facebook.com/qrcodemonkey"]').should('be.visible')
        cy.get('[href="https://twitter.com/qrcodemonkey"]').should('be.visible')
    })

    it('Checks PRO membership AD', () => {
        cy.contains('Get Started Now').invoke('attr','href').then(href =>{
            cy.wrap(href).should('contain','https://landing.qr-code-generator.com')
        })
        cy.contains('Upload MP3, PDF or any file').click()
        cy.checkSignUpPage()     
        cy.get(`[ng-click="openModal('statistics')"]`).click()     
        cy.checkSignUpPage() 
    })

})
