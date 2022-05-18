describe('Customize Design', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    before( () =>{
        cy.visit('/#url')
        cy.contains('Customize Design').click()
    })
    it('Customize Design', () => {
        cy.get('.shape-options').eq(1).find('div').eq(getRandomInt(22)).click()
        cy.get('.shape-options').eq(2).find('div').eq(getRandomInt(15)).click()
        cy.get('.shape-options').eq(3).find('div').eq(getRandomInt(18)).click()
        cy.get('#button-create-qr-code').click().wait(2000)
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))
    })

    it('Change quality to low', () => {
        cy.get('.rz-pointer').eq(0).trigger('mousedown')
        .trigger('mousemove', {
       clientX: 100
        }).trigger('mouseup')
        cy.get('#button-create-qr-code').click().wait(2000)
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))

    })
    
})