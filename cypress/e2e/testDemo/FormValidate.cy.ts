// @ts-nocheck
describe('user login', () => {
  it('user login form validate', () => {
    cy.visit('http://127.0.0.1:9003');
    cy.get('.ant-select').eq(0).click();
    cy.contains('form validate').click();
    cy.get('.ant-input').eq(0).type('slb123456');
    cy.get('.ant-input').eq(1).type('aaaa1111');
    cy.get('.ant-input').eq(2).type('aaaa1111');
    cy.get('.ant-radio-wrapper').eq(1).click();
    cy.get('.ant-input').eq(3).type('test');
    cy.contains('登录').click();
    cy.get('.ant-message-notice-content').should('exist');
  })
})