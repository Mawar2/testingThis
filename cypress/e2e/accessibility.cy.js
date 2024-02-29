import { terminalLog } from "./accessibility/violations";

describe("VA.gov Accessibility check", () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });
  
  it('VA.gov Home Page should be accessible',() => {
    cy.checkA11y(null, {
      runOnly: {
        values: ["wcag22aa"],
        },
      },
    );
  });
});