Feature: Requests

    Scenario: Validar status code e email da requisição GET
        Then eu realizo uma requisição ao endpoint e valido o status code e o email

    Scenario: Validar status code e ID do POST
        Then eu realizo um POST no endpoint e valido o status code e o ID retornado
        
    Scenario: Validar status code e os dados alterados via PUT
        Then eu realizo um PUT no endpoint e valido o status code e os dados alterados
