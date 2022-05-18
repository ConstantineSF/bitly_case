describe('Add Logo image', () => {


    before ( () => {
        cy.visit('/#url')
        cy.contains('Add Logo Image').click()
    })
    
    it('Add stock logo', () => {
        cy.contains('Upload your own custom logo image as .png, .jpg, .gif or .svg file format with a maximum size of 2 MB. You can also select a logo for your QR code from the gallery.').should('be.visible')
        cy.contains('Make your brand instantly recognizable as your company logo becomes the center of attention on your QR Code. Try now.').should('be.visible')
        cy.get('.sprite-logo').eq(0).click()
        cy.contains('Remove Background Behind Logo').click()
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('defaultUrl'))
    })
    
    it('Check remove logo', () => {
        cy.get('.sprite-logo').eq(0).click()
        cy.get('.logo-preview img').should('have.attr','src')
        cy.contains('Remove Logo').click()
        cy.get('.logo-preview img').should('have.class','ng-hide')
    })
    
    it('Check error when uploading file > 2 MB', () => {
        const filepath = 'images/big_image.png'
        cy.get('.logo-preview').attachFile(filepath, { subjectType: 'drag-n-drop' });
        cy.contains('File is too big. Max. size is 2 MB.').should('be.visible')
    })
    
    it('Upload logo png', () => {
        const filepath = 'images/test_small_png.png'
        cy.get('.logo-preview').attachFile(filepath, { subjectType: 'drag-n-drop' }).wait(2000);
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))
    })

    it('Upload logo jpg', () => {
        const filepath = 'images/test.jpg'
        cy.get('.logo-preview').attachFile(filepath, { subjectType: 'drag-n-drop' }).wait(2000);
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))
    })

    it('Upload logo svg', () => {
        const filepath = 'images/svgtest.svg'
        cy.get('.logo-preview').attachFile(filepath, { subjectType: 'drag-n-drop' }).wait(2000);
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))

    })

    it('Upload logo gif(not displaying)', () => {
        const filepath = 'images/giph_test.gif'
        cy.get('.logo-preview').attachFile(filepath, { subjectType: 'drag-n-drop' }).wait(2000);
        cy.get('#button-create-qr-code').click()
        cy.verifyCodeMessage(Cypress.env('qrcodeMonkeyUrl'))
    })

    it('Checks PRO membership AD', () => {
        cy.get('.flex-banner a').click()
        cy.get('.info .info-content').contains('Make your brand instantly recognizable as your company logo becomes the center of attention on your QR Code.').should('be.visible')
        cy.checkSignUpPage()          
    })

    })
    
    
    
    