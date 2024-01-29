describe("Tests de Prueba para Jenkins", { tags: "@regression"}, () => {
  it.only("Test que PASA", { tags: ["@primero", "@pasara"]},() => {
    cy.visit("https://example.cypress.io");
  });

  it("Test que FALLA", { tags: "@fallara"},() => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("have.text", "Hola Mundo!");
  });

  it.skip("Test que NO SE EJECUTA", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Variable de ambiente", { tags: "@pasara"}, () => {
    const user = Cypress.env()["user_TEST"];
    const pass = Cypress.env()["pass_TEST"];
    cy.log(user);
    cy.log(pass);
  });
});
