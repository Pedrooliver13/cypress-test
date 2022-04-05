describe("To do list UI", () => {
  it("Should return true when title was correct", () => {
    cy.visit("/");

    cy.get("[data-cy=header]").should("contain", "To Do List");
  });

  it('Should add new task when click in button', () => {
    cy.visit("/");

    cy.get('input[name=main-input]').type("New Task");
    cy.get('[data-cy=button]').click()
  })
});
