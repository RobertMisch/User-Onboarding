describe('test form', function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    });
    it('add test', function(){
        cy.get('input[name="name"]')
            .type("ace")
            .should("have.value", "ace");

        cy.get('input[name="name"]').clear();

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