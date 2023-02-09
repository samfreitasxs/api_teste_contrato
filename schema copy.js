'use strict';

const Joi = require('joi');

//Neste exemplo, montamos o schema com todas as propriedades do objeto que recebemos.
const schemaFilmeValido = Joi.object({
  Title: Joi.string().required(),
  Year: Joi.number().integer().positive().required().options({
    convert: false
  }),
  Language: Joi.string().valid('English').required(),
  Ratings: Joi.array().items(Joi.object({
    Source: Joi.string().required(),
    Value: Joi.string().required(),
  })),
  Type: Joi.string().valid(['movie', 'series', 'cartoon']).required(),
  Production: Joi.string().optional().allow('', null),
  Website: Joi.string().required(),
  Response: Joi.boolean().required(),
}).required();

//Caso tenhamos um microserviço de rating podemos criar um schema unico para ele,
//e a depois importaremos esse schema para dentro do schema de Filmes.
const ratingSchema = Joi.object({
  Source: Joi.string().required(),
  Value: Joi.string().required(),
})

//É possivel conjugar multiplos schemas sem a necessidade de duplicar codigos
//no exemplo abaixo, importamos o schema ratingSchema.
//Essa estrutura é util quando possuímos varios micro serviços que irão compor um unico serviço final
//e precisamos tbm implementar testes para esses micro serviços.
const schemanheritingRating = Joi.object({
  Title: Joi.string().required(),
  Year: Joi.number().integer().positive().required().options({
    convert: false
  }),
  Language: Joi.string().valid('English').required(),
  Ratings: Joi.array().items(ratingSchema),
  Type: Joi.string().valid(['movie', 'series', 'cartoon']).required(),
  Production: Joi.string().optional().allow('', null),
  Website: Joi.string().required(),
  Response: Joi.boolean().required(),
}).required();

module.exports = {
  schemaFilmeValido,
  schemanheritingRating
}