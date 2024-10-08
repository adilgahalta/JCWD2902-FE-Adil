/** @format */
const fruits = ["apple", "banana", "mango"];
describe("Fruits", () => {
  it("render fruits", () => {
    cy.visit("http://localhost:3000/fruits");
    cy.get("h1").contains("Fruits");
    fruits.forEach((fruit) => {
      cy.get("div").contains(fruit);
    });
  });
});
