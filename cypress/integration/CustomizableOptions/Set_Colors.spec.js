describe('Set Image Color', () => {

    beforeEach( () =>{
        cy.visit('/#url')
        cy.contains('Set Colors').click()
    })
    
    it('Single Color & Contrast warning', () => {

        cy.get('.color-picker-input').eq(0).clear().type('#994747')
        cy.get('.color-picker-input').eq(5).clear({force:true}).type('#AE4343', {force:true})
        cy.contains('Make sure there is enough contrast to the darker foreground.').should('be.visible')
        cy.contains('Warning We recommend to give your colors more contrast between back- and foreground to work with all QR code readers.').should('be.visible')
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('defaultUrl'))
    })

    it('Lineal/Radial gradient & Darknest Warning', () => {
        cy.contains('Color Gradient').click()
        cy.get('.color-picker-input').eq(1).clear().type('#00001')
        cy.get('.color-picker-input').eq(5).clear({force:true}).type('#FFFFFA', {force:true})
        cy.get('.color-picker-input').eq(2).clear({force:true}).type('#BBFFFA', {force:true})
        cy.contains('Color Gradient').click()
        cy.contains('Warning We recommend to give your colors more contrast between back- and foreground to work with all QR code readers.').should('be.visible')
        cy.get('.color-picker-input').eq(2).clear().type('#0277BD')
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('defaultUrl'))
        cy.get('[ng-model="qrcode.config.gradientType"]').select('Radial Gradient')
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))

    })
    
    

    })
    
    
    
    