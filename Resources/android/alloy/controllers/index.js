function Controller() {
    function showDatePicker() {
        datePicker.getView().showDatePicker();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        layout: "composite",
        backgroundColor: "#ffffff",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId3 = Ti.UI.createScrollView({
        layout: "vertical",
        color: "#ffffff",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        color: "#ffffff",
        backgroundColor: "white",
        bottom: "10dp",
        left: "3%",
        width: "94%",
        height: Ti.UI.SIZE,
        top: "20dp",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.lblDate = Ti.UI.createLabel({
        width: "99.666666%",
        height: Ti.UI.SIZE,
        color: "#333333",
        font: {
            fontFamily: "Helvetica Neue Light",
            fontSize: "14dp"
        },
        top: "10dp",
        layout: "vertical",
        text: "Input a Date",
        id: "lblDate"
    });
    $.__views.__alloyId4.add($.__views.lblDate);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        color: "#ffffff",
        top: "10dp",
        width: "100%",
        height: Ti.UI.SIZE,
        borderColor: "#cccccc",
        borderRadius: "4dp",
        borderWidth: "1dp",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.txtDate = Ti.UI.createTextField({
        height: Ti.UI.SIZE,
        backgroundColor: "#ffffff",
        color: "#000000",
        paddingLeft: "5%",
        paddingRight: "5%",
        layout: "vertical",
        width: "99.666666%",
        id: "txtDate",
        top: "5",
        bottom: "5",
        editable: "false"
    });
    $.__views.__alloyId5.add($.__views.txtDate);
    showDatePicker ? $.__views.txtDate.addEventListener("touchstart", showDatePicker) : __defers["$.__views.txtDate!touchstart!showDatePicker"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var datePicker = Alloy.createWidget("jhrockz.datepicker", "widget", {
        onDone: function(selectedDate) {
            $.txtDate.setValue(selectedDate);
        },
        minDate: new Date(2014, 0, 1),
        maxDate: new Date()
    });
    $.index.add(datePicker.getView());
    $.index.open();
    __defers["$.__views.txtDate!touchstart!showDatePicker"] && $.__views.txtDate.addEventListener("touchstart", showDatePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;