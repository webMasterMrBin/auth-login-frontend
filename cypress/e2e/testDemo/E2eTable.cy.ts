// @ts-nocheck
describe('e2e table', () => {
  it('filter table', () => {
    cy.visit('http://127.0.0.1:9003');
    cy.get('.ant-select').eq(0).click();
    cy.contains('e2e table').click();
    cy.get('.ant-select').eq(1).click();
    cy.get('.ant-select-item-option-content').contains('test1').click();
    cy.get('.ant-table-row').should('have.length', 1);
  })
})