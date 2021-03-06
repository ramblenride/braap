describe('Braap', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1> on landing page', () => {
		cy.contains('h1', 'Motorcycle Service Information')
	});

	it('navigates to /creator', () => {
		cy.get('nav a').contains('create').click();
		cy.url().should('include', '/creator');
	});

	it('navigates to /editor', () => {
		cy.get('nav a').contains('edit').click();
		cy.url().should('include', '/editor');
	});
});