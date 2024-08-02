Feature: Validar dados

    Scenario: Capturar e validar dados do link de Photos
      Given que eu acesso o link site
      And eu acesso o menu "Guide"
      When eu navego até o link "/albums/1/photos" e o abro
      Then eu capturo os dados exibidos em tela e os salvo em um array Json
      And valido os dados do objeto com ID "6"
