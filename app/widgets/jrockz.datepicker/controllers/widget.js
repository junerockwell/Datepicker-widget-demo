/*** Require ***/
var moment = require("alloy/moment");
var args = arguments[0] || {};
var onDone = args.onDone;

/* Initialize the Widget */
init();

/*** Functions ***/
function init() {

	if (OS_IOS) {
		/* Must set the type of the picker programmatically for iOS
	       to prevent conflict with the Android picker dialog. The
	       Android version will be taken care of in the function
	       showDatePicker().
		*/
		$.picker.setType(Titanium.UI.PICKER_TYPE_DATE);
	}


	/* Set the minimum and maximum dates, if applicable */
	if (args.minDate) {
		if (OS_IOS) {
			$.picker.setMinDate(args.minDate);
		}
		if (OS_ANDROID) {
			$.picker.minDate = args.minDate;
		}
	}

	if (args.maxDate) {
		if (OS_IOS) {
			$.picker.setMaxDate(args.maxDate);
		} 
		if (OS_ANDROID) {
			$.picker.maxDate = args.maxDate;
		}
	}
}

function showDatePicker() {
	if (OS_IOS) {
		/* The iOS Picker will be slide up and 
		 * down the screen. 
		 */
		$.widget.animate(Ti.UI.createAnimation({
			bottom : 0,
			duration : 300
		}));
	} else if (OS_ANDROID) {
		/* The Android picker will be a pop-up
		 * dialog.
		 */
		$.picker.showDatePickerDialog({
			callback : function(e) {
				if (e.cancel) {
					Ti.API.info('User canceled dialog');
				} else {
					done(e);
				}
			}
		});
	}
}

function done(e) {

	/* This function is called when the user has decided to
	 * select a date and desires to apply to the designated
	 * textfield. Pass the picker as parameters to get the
	 * value and be formatted. 
	 */
	if (OS_IOS) {
		hideDatePicker();
		onDone(selectedDate($.picker));
	} else if (OS_ANDROID) {
		if (!e.cancel) {
			onDone(selectedDate(e));
		}

	}

}

function hideDatePicker() {
	/* This how to hide the iOS Picker. Hiding the Android
	 * Picker is taken care of the Picker's 
	 * showDatePickerDialog property
	 */
	$.widget.animate(Ti.UI.createAnimation({
		bottom : '-265dp',
		duration : 300
	}));

}

function selectedDate(picker) {
	/* Get the selected date and format using moment.js */
	return moment(picker.value).format("MMMM DD, YYYY");
}

/*** Make accessable outside the widget ***/
$.widget.showDatePicker = showDatePicker;
$.widget.hideDatePicker = hideDatePicker;



