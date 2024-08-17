sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.general.controller.App", {
        onInit() {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
    });
});
