import 'cypress-file-upload';
import { Decoder } from '@nuintun/qrcode';
import { BrowserMultiFormatReader } from '@zxing/browser';

const reader = new BrowserMultiFormatReader();
const qrcode = new Decoder();
let qrcodeSelector = '.card-img-top';

Cypress.Commands.add('readCode', { prevSubject: true }, (subject) => {
    const img = subject[0];
    const image = new Image();
    image.width = img.width;
    image.height = img.height;
    image.src = img.src;
    image.crossOrigin = 'Anonymous';
    return reader.decodeFromImageElement(image);
  });

Cypress.Commands.add('verifyCodeMessage', (text) => {
cy.get(qrcodeSelector).readCode().should('have.property', 'text', text);                 

});

Cypress.Commands.add('checkSignUpPage', () => {
   
   cy.get('.info .info-content a').eq(0).invoke('attr','href').then(href =>{
       expect(href).to.contain('https://landing.qr-code-generator.com')
   }) 
   cy.contains('Free Sign Up').click({force: true} )
   cy.url().should('contain',Cypress.env('signUpPageUrl'))
   cy.go('back')
  
  });

  Cypress.Commands.add("uploadFile", (selector, fileUrl, type = "") => {
    return cy.get(selector).click().then(subject => {
      return cy
        .fixture(fileUrl, "base64")
        .then(Cypress.Blob.base64StringToBlob)
        .then(blob => {
          return cy.window().then(win => {
            const el = subject[0];
            const nameSegments = fileUrl.split("/");
            const name = nameSegments[nameSegments.length - 1];
            const testFile = new win.File([blob], name, { type });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(testFile);
            el.files = dataTransfer.files;
            return cy.wrap(subject).trigger('change', { force: true });
          });
        });
    });
  });