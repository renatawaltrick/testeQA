import './commands'

require('cypress-plugin-tab')


Cypress.SelectorPlayground.defaults({
  selectorPriority: ['data-test-id', 'data-cy', 'data-test', 'id', 'class', 'attributes', 'tag', 'nth-child']
})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
