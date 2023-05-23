describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should do the number buttons update the display of the running total', () => {
    cy.get('#number2').click()
    cy.get('.display').should('contain', '2')
    cy.get('#number3').click()
    cy.get('.display').should('contain', '23')
    cy.get('#number5').click()
    cy.get('.display').should('contain', '235')
  })
  it('should do the arithmetical operations update the display with the result of the operation',() =>{
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '4')
  })
  it('should multiple operations be chained together',() =>{
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('.display').should('contain', '2')
  })
  it('should be the output as expected for positive numbers',() =>{    
    cy.get('#number2').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
})
  it('should be the output as expected for negative numbers',() =>{   
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '-4')
})
  it('should be the output as expected for decimal numbers',() =>{
    cy.get('#number2').click()
    cy.get('#decimal').click()
    cy.get('#number8').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#decimal').click()
    cy.get('#number5').click()
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '5.3')
  })
  it('should the output as expected for very large numbers',() =>{
    cy.get('#number3').click()

    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()

    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()

    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()

    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()

    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()

    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3002000000')
  })
  it('should happen when divide by zero ',() =>{
    cy.get('#number3').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', "Can't divide with zero")

  })
})


// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?
// E.g. does 2 + 2 - update the display to 4
// Can multiple operations be chained together?
// E.g. does 3 + 1 - 2 == 2
// Is the output as expected for positive numbers
// Is the output as expected for negative numbers
// Is the output as expected for decimal numbers
// Is the output as expected for very large numbers
// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).