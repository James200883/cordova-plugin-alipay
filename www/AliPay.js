var exec = require('cordova/exec');

var aliPay = {
	pay: function (paymentInfo, successCallback, errorCallback) {
		if(!paymentInfo){
			errorCallback && errorCallback("Please enter order information");
		}else{
			exec(successCallback, errorCallback, "AliPay", "pay", [paymentInfo]);
		}
	}
};

module.exports = aliPay;
