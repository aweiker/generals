sap.ui.define([
    "sap/ui/core/util/MockServer"
], (MockServer) => {
    "use strict";

    return {
        init() {
            const oMockServer = new MockServer({
                rootUri: sap.ui.require.toUrl("ui/general") + "/V2/Northwind/Northwind.svc/"
            });

            const oUrlParams = new URLSearchParams(window.location.search);

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUrlParams.get("serverDelay") || 10
            });

            const sPath = sap.ui.require.toUrl("ui5/general/localService")
            oMockServer.simulate(sPath + "/metadata.xml", {
                sMockdataBaseUrl: sPath + "/mockdata",
                bGenerateMissingMockData: true
            });

            oMockServer.start();
        }
    }
})
