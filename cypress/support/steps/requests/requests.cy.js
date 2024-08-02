Then('eu realizo uma requisição ao endpoint e valido o status code e o email', () => {
    cy.validarEmailNosComentarios('alias odio sit');
});

Then('eu realizo um POST no endpoint e valido o status code e o ID retornado', () => {
    cy.gerarNomeAleatorio().then(nome => {
        cy.gerarUsernameAleatorio().then(username => {
            cy.gerarEmailAleatorio().then(email => {
                cy.gerarTelefoneAleatorio().then(telefone => {
                    cy.gerarWebsiteAleatorio().then(website => {
                        const corpoRequisicao = {
                            name: nome,
                            username: username,
                            email: email,
                            phone: telefone,
                            website: website
                        };
                        cy.postarEValidarUsuario(corpoRequisicao);
                    });
                })
            })
        })
    })
})

Then('eu realizo um PUT no endpoint e valido o status code e os dados alterados', () => {
    cy.gerarEmailAleatorio().then(email => {
        cy.gerarLatLog().then(latLog => {
            const usuarioId = 5;
            const dadosAtualizados = {
                email: email,
                address: {
                    geo: {
                        lat: latLog,
                        lng: latLog
                    }
                }
            };
            cy.putarEValidarUsuario(usuarioId, dadosAtualizados);
        });
    })
})
