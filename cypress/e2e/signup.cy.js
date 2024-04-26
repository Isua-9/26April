import{signup} from "../fixtures/selectors.js"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Testing Signup', function(){
  beforeEach(function(){
    cy.visit('https://www.konga.com/')
  })

   it('Should be able to signup ', function(){
    cy.get(signup.signupBtn).click()
    cy.get(signup.dontHaveAnAccBtn).click()
    cy.get(signup.firstnamefield).type('Qavdev')
    cy.get(signup.lastnamefield).type('limited')
    cy.get(signup.emailfield).type('fang@yopmail.com')
    cy.get(signup.phoneNumber).type('08165310980')
    cy.get(signup.password).type('laboraisinLagos@2024')
    cy.get(signup.createAnAccBtn).click()
    cy.get(signup.pin).type('5332')

   })
})