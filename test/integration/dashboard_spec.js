describe('Dashboard', function() {
    it('shows the number of open issues', function() {
        cy.fixture({
            title: "Issue 1",
            status: "open"
        });
        cy.fixture({
            title: "Issue 2",
            status: "open"
        });
        cy.fixture({
            title: "Issue 3",
            status: "closed"
        });

        cy.visit('/dashboard');

        cy.contains('3').should('exist');
    });
});
