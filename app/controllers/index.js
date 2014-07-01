
/* Setup Picker
 * ********************************************************************************************* */
var datePicker = Alloy.createWidget("jhrockz.datepicker", "widget", {
    onDone : function(selectedDate) {
        $.txtDate.setValue(selectedDate);
    },
    minDate : new Date(2014, 00, 01),
    maxDate : new Date()
});
/*** Get the View ***/
$.index.add(datePicker.getView());


function showDatePicker() {
	datePicker.getView().showDatePicker();
}

$.index.open();
