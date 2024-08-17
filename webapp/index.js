sap.ui.define([
    "sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
    "use strict";

    new ComponentContainer({
        name: "ui5.general",
        settings: {
            id: "general"
        },
        async: true
    }).placeAt("content");
});
