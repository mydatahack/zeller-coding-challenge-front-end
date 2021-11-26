
describe('Zeller Customer App', () => {
  beforeEach(function () {
    cy.visit('/')
  });
  it('should load the page with correct data', () => {
    cy.get('h1').should('contain', 'Zeller Customer App');
    cy.get('h2').eq(0).should('contain', 'User Type');
    cy.get('h2').eq(1).should('contain', 'Admin User');
    cy.get('label').eq(0).should('contain', 'Admin');
    cy.get('label').eq(1).should('contain', 'Manager');
    cy.get('input').eq(0).should('have.attr', 'checked');
    cy.get('td').eq(0).should('contain', 'David Miller');
    cy.get('td').eq(1).should('contain', 'Ryan Muller');
    cy.get('td').eq(2).should('contain', 'Chris Miller');
  });

  it('should load all the managers when the manager type is selected', () => {
    cy.get('[type="radio"]').eq(1).check({force: true});
    cy.get('td').eq(0).should('contain', 'Lynn Warr');
    cy.get('td').eq(1).should('contain', 'Joe Perera');
  });

  it('should load all the admin staff when the admin type is selected', () => {
    cy.get('[type="radio"]').eq(0).check({force: true});
    cy.get('td').eq(0).should('contain', 'David Miller');
    cy.get('td').eq(1).should('contain', 'Ryan Muller');
    cy.get('td').eq(2).should('contain', 'Chris Miller');;
  });
})
