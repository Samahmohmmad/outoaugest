
/// <reference types= "cypress" />

cy.on("uncaght:exeption",(e) => {

return false;
});
describe('template spec', () => {
  it('passes', () => {
    let websites = ["https://www.almosafer.com/ar","https://www.almosafer.com/en"]
    let randomIndex=  Math.floor(Math.random()*websites.length)
    
    cy.visit(websites[randomIndex])
    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm').click()
    if(randomIndex==0) 
    {
      cy.get('[data-testid="AutoCompleteInput"]').type("دبي")
    }else if
       (randomIndex==1){
       cy.get('[data-testid="AutoCompleteInput"]').type("dubai")

       }








  })
})