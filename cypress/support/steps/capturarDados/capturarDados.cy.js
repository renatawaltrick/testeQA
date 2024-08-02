const url = Cypress.env('url');

Given('que eu acesso o link site', () => {
  cy.visit(url);
});

And('eu acesso o menu {string}', (itemMenu) => {
  cy.contains(itemMenu).should('be.visible');
  cy.get('ul.flex li a[href="/guide"]').click();
});

When('eu navego até o link {string} e o abro', (link) => {
  cy.url().should('include', '/guide');
  cy.scrollTo('bottom');
  cy.get(`ul li a[href="${link}"]`).should('be.visible').click();
  cy.url().should('include', link);
});

Then('eu capturo os dados exibidos em tela e os salvo em um array Json', () => {
  cy.request('/albums/1/photos').then((response) => {
    expect(response.status).to.eq(200);
    const dadosJson = response.body;
    cy.wrap(dadosJson).as('arrayJson');
    cy.log(JSON.stringify(dadosJson));
  });
});

And('valido os dados do objeto com ID {string}', (id) => {
  cy.get('@arrayJson').then((arrayJson) => {
    expect(arrayJson).to.be.an('array');
    const objeto = arrayJson.find(item => item.id === parseInt(id));
    expect(objeto, `Objeto com ID ${id} não encontrado`).to.not.be.undefined;
    cy.validarObjeto(objeto);
  });
});

