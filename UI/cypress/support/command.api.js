// command.api.js
const contrato = require('../e2e/contracts/produto.contract')

Cypress.Commands.add('listCupons', () => {
  cy.request({
    method: 'GET',
    url: 'wp-json/wc/v3/coupons',
    headers: { authorization: Cypress.env('user_token') },
    failOnStatusCode: false
  }).then(response => {
    console.log('Token:', Cypress.env('user_token'))
    console.log('Resposta cupons:', response.body)
    return contrato.validateAsync(response.body) // Altere para response.body.coupons se necessário
  })
})

Cypress.Commands.add('listProduct', () => {
  cy.request({
    method: 'GET',
    url: 'wp-json/wc/v3/products?page=1&per_page=1',
    headers: { authorization: Cypress.env('user_token') },
    failOnStatusCode: false
  }).then(response => {
    console.log('Status produtos:', response.status)
    expect(response.status).to.equal(200)
  })
})
