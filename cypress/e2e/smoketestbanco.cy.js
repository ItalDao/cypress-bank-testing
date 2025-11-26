describe("Test suite - conjunto de pruebas banco", () => {

    it ("Caso de prueba - verificar la página de inicio del banco", () => {
        cy.visit("http://zero.webappsecurity.com");
        cy.get(".active > img").should("be.visible");
        cy.get(".active > .custom > h4").contains("Online Banking");
    });
});


describe("Test suite - conjunto de pruebas banco", () => {

  it("Prueba E2E - transferencia de fondos", () => {
    
    // 1. Visitar la página
    cy.visit("http://zero.webappsecurity.com")
    
    // 2. Click en botón Sign In
    cy.get("#signin_button").click()
    
    // 3. Ingresar usuario
    cy.get("#user_login").type("username")
    
    // 4. Ingresar contraseña
    cy.get("#user_password").type("password")
    
    // 5. Click en botón Login
    cy.get(".btn").click()
    
    // 6. Click en Transfer Funds
    cy.get("#transfer_funds_tab > a").click()
    
    // 7. Seleccionar cuenta origen (posición 1)
    cy.get("#tf_fromAccountId").select("1")
    
    // 8. Seleccionar cuenta destino (posición 5)
    cy.get("#tf_toAccountId").select("5")
    
    // 9. Ingresar monto
    cy.get("#tf_amount").type("300")
    
    // 10. Ingresar descripción
    cy.get("#tf_description").type("Transferencia de prueba 300")
    
    // 11. Click en Continue
    cy.get("#btn_submit").click()
    
    // 12. Click en Submit (confirmación)
    cy.get("#btn_submit").click()
    
    // 13. Verificar mensaje de éxito
    cy.get(".alert").contains("You successfully submitted your transaction.")
    
  })

})