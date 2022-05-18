describe('Check Main Page DE', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    before( () =>{
        cy.visit('/de')
    })
    it('Check main page content', () => {
        cy.contains('Der kostenlose QR Code Generator').should('be.visible')
        cy.contains('Die professionelle QR Code Management Plattform, um mehr aus deinen QR Codes herauszuholen. Erstelle, analysiere und editiere all deine QR Codes.').should('be.visible')
        cy.contains('Der kostenfreie QR Code Generator für QR Codes in Druckqualität').should('be.visible')
        //The professional QR Code Management platform to create, track and edit all your QR codes in one place.

    })
    it('Check Header', () => {
        cy.get('.header').within(()=>{
            cy.contains('Über').should('have.attr','href','/#about')
            cy.contains('Chrome App').should('have.attr','href',Cypress.env('chromeStoreUrl'))
            cy.contains('API').should('have.attr','href','https://www.qrcode-monkey.com/de/qr-code-api-mit-logo/')
        })

    })
    it('Check QR code template', () => {
        cy.contains('QR Code Vorlagen').click()
        cy.get('.template').eq(getRandomInt(13)).click()
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))
    })

    it('Check social links', () => {
        cy.get('[href="https://facebook.com/qrcodemonkey"]').should('be.visible')
        cy.get('[href="https://twitter.com/qrcodemonkey"]').should('be.visible')
    })

    it('Checks PRO membership AD', () => {
        cy.contains('Jetzt Starten').invoke('attr','href').then(href =>{
            cy.wrap(href).should('contain','https://landing.qr-code-generator.com')
        })
        cy.contains('Upload MP3, PDF or any file').click()
        cy.checkSignUpPage()          
    })

})
