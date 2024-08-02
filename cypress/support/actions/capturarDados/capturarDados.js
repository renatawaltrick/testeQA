Cypress.Commands.add('validarObjeto', (objeto) => {
    expect(objeto).to.be.an('object');
    expect(objeto).to.have.property('albumId');
    expect(objeto.albumId).to.be.a('number');
    
    expect(objeto).to.have.property('id');
    expect(objeto.id).to.be.a('number');
    
    expect(objeto).to.have.property('title');
    expect(objeto.title).to.be.a('string').and.not.be.empty;
    
    expect(objeto).to.have.property('url');
    expect(objeto.url).to.be.a('string').and.match(/^https:\/\/via\.placeholder\.com\/600\//);
    
    expect(objeto).to.have.property('thumbnailUrl');
    expect(objeto.thumbnailUrl).to.be.a('string').and.match(/^https:\/\/via\.placeholder\.com\/150\//);
    
    expect(objeto.url).to.not.equal(objeto.thumbnailUrl);
    expect(objeto.title).to.match(/\S+/);
  });