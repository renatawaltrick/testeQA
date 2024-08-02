import './actions/capturarDados/capturarDados'
import './actions/requests/request'

Cypress.Commands.overwrite('visit', (originalVisit, url, options) => {
  options = options || {};
  options.headers = options.headers || {};
  options.headers['Referer'] = null;
  return originalVisit(url, options);
});

function gerarNumeroAleatorio(digitos) {
  let numero = '';
  for (let i = 0; i < digitos; i++) {
    numero += Math.floor(Math.random() * 10);
  }
  return numero;
}

function gerarLetraAleatoria(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function gerarNomeAleatorio() {
  const consoantes = 'bcdfghjklmnpqrstvwxyz';
  const vogais = 'aeiou';

  let nome = gerarLetraAleatoria(consoantes).toUpperCase();
  nome += gerarLetraAleatoria(vogais);
  nome += gerarLetraAleatoria(consoantes);
  nome += gerarLetraAleatoria(vogais);
  nome += gerarLetraAleatoria(consoantes);
  return nome;
}

Cypress.Commands.add('gerarNomeAleatorio', () => gerarNomeAleatorio());

Cypress.Commands.add('gerarUsernameAleatorio', () => {
  return cy.gerarNomeAleatorio().then(nome => nome.toLowerCase());
});

Cypress.Commands.add('gerarEmailAleatorio', () => {
  return cy.gerarNomeAleatorio().then(nome => {
    const nomeLower = nome.toLowerCase();
    return `${nomeLower}@${nomeLower}.com`;
  });
});

Cypress.Commands.add('gerarWebsiteAleatorio', () => {
  return cy.gerarNomeAleatorio().then(nome => {
    return `${nome}.com`;
  });
});

Cypress.Commands.add('gerarTelefoneAleatorio', () => {
  const parte1 = gerarNumeroAleatorio(4);
  const parte2 = gerarNumeroAleatorio(4);
  return `${parte1}-${parte2}`;
});

Cypress.Commands.add('gerarLatLog', () => {
  const parte1 = gerarNumeroAleatorio(4);
  const parte2 = gerarNumeroAleatorio(4);
  return `${parte1}.${parte2}`;
});