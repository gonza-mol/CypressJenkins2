describe("Tests de Prueba para Jenkins", () => {
  it("Test que PASA", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Test que FALLA", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("have.text", "Hola Mundo!");
  });

  it.skip("Test que NO SE EJECUTA", () => {
    cy.visit("https://example.cypress.io");
  });
});
