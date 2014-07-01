function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jhrockz.datepicker/" + s : s.substring(0, index) + "/jhrockz.datepicker/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function init() {
        args.minDate && ($.picker.minDate = args.minDate);
        args.maxDate && ($.picker.maxDate = args.maxDate);
    }
    function showDatePicker() {
        $.picker.showDatePickerDialog({
            callback: function(e) {
                e.cancel ? Ti.API.info("User canceled dialog") : done(e);
            }
        });
    }
    function done(e) {
        e.cancel || onDone(selectedDate(e));
    }
    function hideDatePicker() {
        $.widget.animate(Ti.UI.createAnimation({
            bottom: "-265dp",
            duration: 300
        }));
    }
    function selectedDate(picker) {
        console.log(picker);
        return moment(picker.value).format("MMMM DD, YYYY");
    }
    new (require("alloy/widget"))("jhrockz.datepicker");
    this.__widgetId = "jhrockz.datepicker";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.widget = Ti.UI.createView({
        layout: "vertical",
        color: "#ffffff",
        height: "255dp",
        bottom: "-265",
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "horizontal",
        color: "#ffffff",
        width: "100%",
        height: "40dp",
        backgroundImage: "/background-opacity-25.png",
        id: "__alloyId0"
    });
    $.__views.widget.add($.__views.__alloyId0);
    $.__views.doneButtonView = Ti.UI.createView({
        layout: "vertical",
        color: "#ffffff",
        width: "24%",
        height: Ti.UI.SIZE,
        top: "5dp",
        id: "doneButtonView"
    });
    $.__views.__alloyId0.add($.__views.doneButtonView);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        color: "#ffffff",
        width: "70dp",
        height: "30dp",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "#f0ad4e",
        borderColor: "#eea236",
        left: "5dp",
        id: "__alloyId1"
    });
    $.__views.doneButtonView.add($.__views.__alloyId1);
    $.__views.doneButton = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp"
        },
        height: "30dp",
        width: "100%",
        color: "#ffffff",
        backgroundImage: "/btn-warning.png",
        title: "Cancel",
        id: "doneButton"
    });
    $.__views.__alloyId1.add($.__views.doneButton);
    hideDatePicker ? $.__views.doneButton.addEventListener("click", hideDatePicker) : __defers["$.__views.doneButton!click!hideDatePicker"] = true;
    $.__views.doneButtonView = Ti.UI.createView({
        layout: "vertical",
        color: "#ffffff",
        left: "51%",
        width: "25%",
        height: Ti.UI.SIZE,
        top: "5dp",
        id: "doneButtonView"
    });
    $.__views.__alloyId0.add($.__views.doneButtonView);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        color: "#ffffff",
        width: "70dp",
        height: "30dp",
        borderRadius: "4dp",
        borderWidth: "1dp",
        backgroundColor: "#47a447",
        borderColor: "#398439",
        left: "5dp",
        id: "__alloyId2"
    });
    $.__views.doneButtonView.add($.__views.__alloyId2);
    $.__views.doneButton = Ti.UI.createButton({
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: "12dp"
        },
        height: "30dp",
        width: "100%",
        color: "#ffffff",
        backgroundImage: "/btn-success.png",
        title: "Enter",
        id: "doneButton"
    });
    $.__views.__alloyId2.add($.__views.doneButton);
    done ? $.__views.doneButton.addEventListener("click", done) : __defers["$.__views.doneButton!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        bottom: "0dp",
        backgroundColor: "white",
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.widget.add($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    var args = arguments[0] || {};
    var onDone = args.onDone;
    init();
    $.widget.showDatePicker = showDatePicker;
    $.widget.hideDatePicker = hideDatePicker;
    __defers["$.__views.doneButton!click!hideDatePicker"] && $.__views.doneButton.addEventListener("click", hideDatePicker);
    __defers["$.__views.doneButton!click!done"] && $.__views.doneButton.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;