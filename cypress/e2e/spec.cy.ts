// @ts-nocheck
describe('infinitiScrolll', () => {
  it('search and scroll load data', () => {
    const scrollFn = (ele) => {
      ele.scrollTo('bottom', { duration: 1000, ensureScrollable: false });
    };
    cy.visit('http://127.0.0.1:9003');
    cy.get('.ant-select-selector').eq(1).type(1);
    const ele = cy.get('.rc-virtual-list-holder');
    scrollFn(ele);
    scrollFn(ele);
    scrollFn(ele);
    scrollFn(ele);
    cy.get('.ant-select-item-option-content').contains('test120').should('exist');
  })
})