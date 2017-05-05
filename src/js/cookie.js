

define({

	getCookie: function(name) {

		if(document.cookie === "" ) {
			return;
		}

		var allCookie = document.cookie.split(";");

		var cookie;
		allCookie.forEach(function(v,i) {
			var fmt = v.trim();
			if(fmt.indexOf(name) !== -1) {
				cookie = fmt;
			}
		});

		return JSON.parse(cookie.split("=")[1]);



	},

	setCookie: function(name,value) {

		var time = (new Date).getTime() + 7*24*60*60*1000
		var date = new Date().setTime(time);

		document.cookie = name + "=" + JSON.stringify(value) + ";expires=" + date;
	}

})