// @ts-nocheck
describe('order package', () => {
  it('order umeng package', () => {
    cy.visit('http://127.0.0.1:9001/purchase/package');
    cy.contains('进阶能力').trigger('mouseover');
    cy.contains('预测设备风险程度').should('exist');
    cy.contains('标准能力').trigger('mouseover');
    cy.contains('预测设备风险程度').should('not.exist');

    cy.contains('立即激活').click();

    cy.contains('激活成功').should('exist');
  });
});

describe('current product', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:9001/purchase/usingProduct');
  });
  it('go to product', () => {
    cy.contains('版本订购').click();
    cy.url().should('include', '/purchase/product');
  });

  it('click advanced to product', () => {
    cy.contains('高级版最大支持').click();
    cy.url().should('include', '/purchase/product');
  });
})