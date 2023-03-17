
# api_test_contrato

API:
---

* API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web.


* A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".
testes

TESTE DE API:
---

* Estão entre a camada de testes de UI e Unitários;
* Podem ser automatizados em paralelo com o desenvolvimento da API;
* Facilidade de validar múltiplos cenários;
* Garantir que a estrutura do JSON de retorno está correta.

teste teste
PAYLOAD:
---

* É todo conteúdo enviado por um meio de transporte, é o corpo da informação, é o que é útil de tudo o que está sendo transmitido;

* Não possui um formato obrigatório. O fato de ser JSON é apenas circunstancial.


RESPONSE:
---

* É todo conteúdo recebido por um meio de transporte, é o corpo da informação de retorno;

* statusCode

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2xx (Success)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4xx (Client Error)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5xx (Server Error)

teste etse teste
CONTRATO DE API:
---



* Teste de contrato tem o objetivo de garantir que o conteúdo fornecido não foi modificado, podemos dizer que tem a finalidade de validar se o contrato acordado não foi quebrado, deve validar se o schema permanece o mesmo garantindo assim a integridade dos dados na comunicação entre client/server . 

* É possível validar se os dados continuam do mesmo tipo, se a estrutura não foi modificada, valores limites, restringir valores recebidos etc...


```json
{
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": 2017,
  "Language": "English",
  "Ratings": [{
    "Source": "Rotten Tomatoes",
    "Value": "83%"
  }, {
    "Source": "Metacritic",
    "Value": "67/100"
  }],
  "Type": "movie",
  "Production": "Walt Disney Pictures",
  "Website": "https://marvel.com/guardians",
  "Response": true
}
```

#Exemplo execução do teste teste tetse
```shell
mocha request.js 
```

REFERÊNCIAS:
---
* [NodeJS - https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* [supertest - https://github.com/visionmedia/supertest](https://github.com/visionmedia/supertest)
* [chai - http://chaijs.com/](http://chaijs.com/)
* [Mocha - https://mochajs.org/](https://mochajs.org/)
* [JOI - https://github.com/hapijs/joi](https://github.com/hapijs/joi)
* [JOI-Assert - https://github.com/Bartvds/joi-assert](https://github.com/Bartvds/joi-assert)
* [http://www.restapitutorial.com/httpstatuscodes.html](http://www.restapitutorial.com/httpstatuscodes.html)
* [https://github.com/eduardocini/api_test](https://github.com/eduardocini/api_test)
