describe('test form', function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    });
    it('add test', function(){
        //first fill
        cy.get('input[name="name"]')
            .type("ace")
            .should("have.value", "ace");
    
        cy.get('input[name="email"]')
            .type("ace@gmail.com")
            .should("have.value", "ace@gmail.com");

        cy.get('input[name="password"]')
            .type("password")
            .should("have.value", "password");

        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked");

        //unfill and check error states

        cy.get('input[name="name"]')
        .clear()
        cy.contains('name is required');

        cy.get('input[name="email"]')
        .clear()
        cy.contains('email is required');

        cy.get('input[name="password"]')
        .clear()
        cy.contains('password is required');

        cy.get('[type="checkbox"]')
        .uncheck()
        cy.contains('must agree to TOS');

        cy.get('button')
        .should('be.disabled');

        //refill

        cy.get('input[name="name"]')
            .type("ace")
            .should("have.value", "ace");
    
        cy.get('input[name="email"]')
            .type("ace@gmail.com")
            .should("have.value", "ace@gmail.com");

        cy.get('input[name="password"]')
            .type("password")
            .should("have.value", "password");

        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked");

        cy.get('button').click();
    });
});