describe('issues list', function() {
  it('shows all issues', function() {
    cy.fixture({
      title: 'lorem ipsum'
    });
    cy.fixture({
      title: 'foo bar',
      status: 'closed'
    });

    cy.visit('/issues');

    cy.contains('lorem ipsum').contains('open').should('exist');
    cy.contains('foo bar').contains('closed').should('exist');
  });

  it('shows open issues', function() {
    cy.fixture({
      title: 'lorem ipsum',
      status: 'open'
    });
    cy.fixture({
      title: 'foo bar',
      status: 'closed'
    });

    cy.visit('/issues');

    cy.contains('Open issues').click();

    cy.contains('open').should('exist');
    cy.contains('closed').should('not.exist');
  });

  it('shows closed issues', function() {
    cy.fixture({
      title: 'lorem ipsum',
      status: 'open'
    });
    cy.fixture({
      title: 'foo bar',
      status: 'closed'
    });

    cy.visit('/issues');

    cy.contains('Closed issues').click();

    cy.contains('open').should('not.exist');
    cy.contains('closed').should('exist');
  })
});
