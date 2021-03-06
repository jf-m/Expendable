// Check instance
if (typeof dist == "undefined" || !dist) {
    var dist = {};
}
if (typeof dist.Project == "undefined" || !dist.Project) {
    dist.Project = {};
}

dist.Project.Global = function () {
    this.init();
};

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

dist.Project.Global.prototype = {

    ie8: (document.all && document.querySelector && !document.addEventListener) ? true : false,

    // --------------------------------------------------------------------------------------------

    init: function () {
        jQuery(document).ready(jQuery.proxy(this, 'onDocumentReady'));
        jQuery(window).load(jQuery.proxy(this, 'onWindowLoad'));
    },

    // --------------------------------------------------------------------------------------------
    onDocumentReady: function () {
        this.initValidator();
        this.initTemplate();
        this.initMask();
    },

    // --------------------------------------------------------------------------------------------
    onWindowLoad: function () {
    },
    // --------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------

    initValidator: function () {
        jQuery('form').validationEngine({
            promptPosition: "topLeft"
        });
    },
    initMask: function () {
        jQuery(":input").inputmask();
    },

    initTemplate: function () {
        Metronic.init();
        Layout.init();
        QuickSidebar.init();
    }
};
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// Run instance
var app = new dist.Project.Global();