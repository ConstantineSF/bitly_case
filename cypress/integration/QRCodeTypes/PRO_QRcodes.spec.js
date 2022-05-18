
describe('PRO QR Codes', () => {

    before( () =>{
      cy.visit('/#')
    })
    
    it('Check more items', () => {
        cy.contains('MP3').click({force:true})
        cy.checkSignUpPage()
        cy.contains('VIDEO').click({force:true})
        cy.checkSignUpPage()
        cy.contains('APP STORE').click({force:true})
        cy.checkSignUpPage()
    })

})





