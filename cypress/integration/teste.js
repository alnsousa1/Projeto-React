// Seu arquivo de teste Cypress (por exemplo, cypress/integration/teste_formulario_spec.js)
describe('Testando o envio de formulário', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/contato');
    }

    )
    it('Deve preencher o formulário e enviá-lo com sucesso', () => {
  
      // Preencher campos do formulário
      cy.get('#nome').should('be.visible').type('Nome de Teste');
      cy.get('#telefone').should('be.visible').type('telefone teste');
      cy.get('#email').should('be.visible').type('teste@gmail.com');
      cy.get('#citie').should('be.visible').click('Umuarama');
  
      // Enviar formulário
      cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
  
      // Aguarde a submissão do formulário e adicione asserções conforme necessário
      cy.url().should('include', '/sucesso');  // Por exemplo, redirecionamento para uma página de sucesso
    });
  });
  