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

        cy.contains('2').should('exist');
    });

    it('show high severity gauge', function() {
        cy.fixture({
            title: "Issue 1",
            status: "open",
            severity: "High"
        });
        cy.fixture({
            title: "Issue 2",
            status: "open",
            severity: "Low"
        });

        cy.visit('/dashboard');

        cy
            .get("[data-test-high-gauge]")
            .should('exist')
            .should("contain", "High")
            .should("contain", "50%");
    });

    it('show 0% when no open issues', function() {
        cy.visit('/dashboard');

        cy
            .get("[data-test-high-gauge")
            .should("exist")
            .should("contain", "High")
            .should("contain", "0%");
    });

    it('show medium severity gauge', function() {
        cy.fixture({
            title: "Issue 1",
            status: "open",
            severity: "Medium"
        });
        cy.fixture({
            title: "Issue 2",
            status: "open",
            severity: "Low"
        });

        cy.visit('/dashboard');

        cy
            .get("[data-test-medium-gauge]")
            .should('exist')
            .should("contain", "Medium")
            .should("contain", "50%");
    });
});
