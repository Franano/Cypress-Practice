/// <reference types="cypress" />

describe('Pricing test suite', () => {
    
    it.only('pricingUpgrade',{ tags: ['@pricingUpgrade']},

    () => {

        function logIn() 
        {
            cy.visit('/');
            cy.get('#email-input').type('lequonnauwuje-1406@yopmail.com');
            cy.get('button').click();
            cy.get('#password-input').type('Laptops001.');
            cy.get('button').click();
        }
        

        function buyPro() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains("BUY PRO").click()

        }

        function buyBusiness() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains("BUY BUSINESS").click()
            cy.get('button').contains("Subscribe").click()
            cy.get('button').contains("Go to my projects").click()
        }

        function buyBusinessPlus() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains("BUY BUSINESS PLUS").click();
            cy.get('button').contains("Subscribe").click();
            cy.get('button').contains("Go to my projects").click()
        }
        
        function payment() {
            cy.get('div').contains('+ Add new card').click()
            cy.get('input[placeholder="16-digit number"]').type("4242424242424242");
            cy.get('input[placeholder="First and last name"]').type("Jose Franco");
            cy.get('[data-e2e="card-expiration-month-dropdown-toggle"]').click()
            cy.get('a').contains('March').click();
            cy.get('[data-e2e="card-expiration-year-dropdown-toggle"]').click()
            cy.get('a').contains('2039').click();
            cy.get('input[placeholder="123"]').type("123");
            cy.get('button').contains("Save card").click()
            cy.get('#termsAccepted').click()
            cy.get('button').contains("Subscribe").click()
            cy.get('button').contains("Go to my projects").click()
            
        }

        function buyBasic() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains('DOWNGRADE').click();
            cy.get('span').contains('Downgrade').click();
            cy.get('span').contains('Continue downgrading').click();
            cy.get('span').contains('My project ended and I no longer need it').click();
            cy.get('span').contains('Cancel subscription').click();

        }

        function upgradeCycle() {
        logIn();
        buyPro();
        payment();
        buyBusiness();
        buyBusinessPlus();
        buyBasic();
        cy.visit('/');
        }

        upgradeCycle();




        

    })

    it('pricingDowngrade',{ tags: ['@pricingDowngrade']},

    () => {

        function logIn() 
        {
            cy.visit('/');
            cy.get('#email-input').type('lequonnauwuje-1406@yopmail.com');
            cy.get('button').click();
            cy.get('#password-input').type('Laptops001.');
            cy.get('button').click();
        }
        

        function buyPro() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains("BUY PRO").click()

        }

        function buyBusiness() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains("BUY BUSINESS").click()
            cy.get('button').contains("Subscribe").click()
            cy.get('button').contains("Go to my projects").click()
        }

        function buyBusinessPlus() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains("BUY BUSINESS PLUS").click();
            cy.get('button').contains("Subscribe").click();
            cy.get('button').contains("Go to my projects").click()
        }
        
        function payment() {
            cy.get('div').contains('+ Add new card').click()
            cy.get('input[placeholder="16-digit number"]').type("4242424242424242");
            cy.get('input[placeholder="First and last name"]').type("Jose Franco");
            cy.get('[data-e2e="card-expiration-month-dropdown-toggle"]').click()
            cy.get('a').contains('March').click();
            cy.get('[data-e2e="card-expiration-year-dropdown-toggle"]').click()
            cy.get('a').contains('2039').click();
            cy.get('input[placeholder="123"]').type("123");
            cy.get('button').contains("Save card").click()
            cy.get('#termsAccepted').click()
            cy.get('button').contains("Subscribe").click()
            cy.get('button').contains("Go to my projects").click()
            
        }

        function buyBasic() {
            cy.visit('https://staging.fieldwire.com/#!/pricing');
            cy.get('button').contains('DOWNGRADE').click();
            cy.get('span').contains('Downgrade').click();
            cy.get('span').contains('Continue downgrading').click();
            cy.get('span').contains('My project ended and I no longer need it').click();
            cy.get('span').contains('Cancel subscription').click();

        }

        
    })

    
})


