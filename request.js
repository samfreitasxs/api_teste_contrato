'use strict';

const config = require('./config');

const Joi = require('joi');
const request = require('supertest');
const expect = require('chai').expect;
const joiAssert = require('joi-assert');

const {
  schemaFilmeValido,
  schemanheritingRating
} = require('./schema');

const URL = config.URL;
const PATH_GET = config.PATH_GET;

console.log(URL);
console.log(PATH_GET);

describe('Teste Contrato API', function () {
  it.only('Validando response com joiAssert', function (done) {
    request(URL)
      .get(PATH_GET)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);
        joiAssert(res.body, schemaFilmeValido);
        done(err);
      })
  });

  it('Validando response com Joi.validate', function (done) {
    request(URL)
      .get(PATH_GET)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);  
        //abortEarly: true. Para a validação assim que ocorre o primeiro erro,
        //abortEarly: false. Retorna todos os erros encontrados no schema.
        //Por default esse tag é true
        Joi.validate(res.body, schemaFilmeValido, {
          abortEarly: false
        }, (err, data) => {
          if (err) throw err;
        });
        done(err);
      })
  });

  it('Validando response utilizando schema conjugado', function (done) {
    request(URL)
      .get(PATH_GET)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        expect(res.status).to.be.eql(200);
        Joi.validate(res.body, schemanheritingRating, {
          abortEarly: false
        }, (err, data) => {
          if (err) throw err;
        });
        done(err);
      })
  });
});