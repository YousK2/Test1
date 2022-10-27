///<reference types="cypress-iframe" />

describe('abn', ()=>{
    beforeEach(() => {
        cy.viewport(1447, 1034);
        cy.visit("https://www.abnamro.nl/nl/prive/hypotheken/index.html");
        // cy.intercept("https://www.abnamro.nl/session")
        cy.get("#aab-cookie-consent-agree").click();
      })


    // it('create new transactione', () => {
   
    // })

    /* ==== Test Created with Cypress Studio ==== */
    it('test1', function() {
    
    });
})