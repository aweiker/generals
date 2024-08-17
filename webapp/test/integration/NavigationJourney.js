sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/App"
], (opaTest) => {
    "use strict";

    QUnit.module("Navigation");

    opaTest("Should open the Hello Dialog", (Given, When, Then) => {
        // Arrangements
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "ui5.general"
            }
        });

        //Actions
        When.onTheAppPage.iPressTheSayHelloWithDialogButton();

        // Assertions
        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        // Cleanup
        Then.iTeardownMyApp();
    });

})
