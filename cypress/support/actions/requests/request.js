
const url = Cypress.env('url');

Cypress.Commands.add('validarEmailNosComentarios', (nome, emailEsperado) => {
    cy.request(`${url}/comments`).then((response) => {
      expect(response.status).to.eq(200);      
      const objeto = response.body.find(item => item.name === nome);
      expect(objeto, `Objeto com nome "${nome}" não encontrado`).to.not.be.undefined;      
      expect(objeto).to.have.property('email');
      expect(objeto.email).to.be.a('string').and.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); 
    });
  });


Cypress.Commands.add('postarEValidarUsuario', (corpoRequisicao) => {
    cy.request({
      method: 'POST',
      url: `${url}/users`,
      body: corpoRequisicao,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);      
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.be.a('number').and.to.be.greaterThan(0);      
      expect(response.body).to.have.property('name', corpoRequisicao.name);
      expect(response.body).to.have.property('username', corpoRequisicao.username);
      expect(response.body).to.have.property('email', corpoRequisicao.email);
      expect(response.body).to.have.property('phone', corpoRequisicao.phone);
      expect(response.body).to.have.property('website', corpoRequisicao.website);
    });
  });


Cypress.Commands.add('putarEValidarUsuario', (usuarioId, dadosAtualizados) => {
    cy.request({
      method: 'PUT',
      url: `${url}/users/${usuarioId}`,
      body: dadosAtualizados,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);      
      expect(response.body).to.have.property('email', dadosAtualizados.email);
      expect(response.body.address.geo).to.have.property('lat', dadosAtualizados.address.geo.lat);
      expect(response.body.address.geo).to.have.property('lng', dadosAtualizados.address.geo.lng);      
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('id', usuarioId);
    });
  });

  