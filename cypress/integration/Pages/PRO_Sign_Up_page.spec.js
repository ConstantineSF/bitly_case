describe('PRO Sign up page', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    before( () =>{
        cy.visit(Cypress.env('signUpPageUrl'))
        cy.contains('Create, Manage and Trackall your QR Codes in one').should('be.visible')
        cy.contains('Sign up now and try all features free for 14 days').should('be.visible')
    })

    it('Fill data', () => {
        cy.get('#input-22').type(`random${getRandomInt(100)}@mail.com`)
        cy.get('#input-25').type(`testpwd`)
        cy.contains('Sign up now')
    })

})