define(['jquery'],function($) {

	var arrErrMsg = new Array();
		arrErrMsg[0] = "用户名的长度应为3～30个字符之间(汉字占两个字符)！";
		arrErrMsg[1] = "用户名只能由汉字、字母、数字、减号、下划线及\"@\"组成！";
		arrErrMsg[2] = "对不起，用户名已被注册，请您重新输入！";
		arrErrMsg[3] = "密码的长度应该为6～16个字符之间！";
		arrErrMsg[4] = "密码过于简单，为保证您的帐户安全请重设密码！";
		arrErrMsg[5] = "请您再输一次密码！";
		arrErrMsg[6] = "两次输入的密码不一致，请重新输入！";
		arrErrMsg[7] = "请您输入邮件地址！";
		arrErrMsg[8] = "邮件地址的格式不正确，请您重新输入！";
		arrErrMsg[9] = "对不起，邮件地址已被注册，请您重新输入！";
		arrErrMsg[10] = "请您输入验证码！";
		arrErrMsg[11] = "密码的第一位和最后一位不能是空格！";
		arrErrMsg[12] = "验证码输入错误！";
		arrErrMsg[13] = "请接受服务条款！";
	var aPwd = ['123456','123123','123465','123321','000111','111000','112233','110110','121212','111222','321321','654321','0123456','1234567','1234560','12345678','123456789','1234567890','0123456789','0987654321','987654321','123123123','asdfasdf','abcdefg','asdfgh','aabbcc','abc123','abcabc','aaabbb','bbbaaa','aabbcc','ccbbaa'];

	var isSimplePwd = function(pwd){
		var b = false;
		var sChar = pwd.charAt(0);
		var sChars = '';
		for(var ii=0;ii<pwd.length;ii++){
			sChars += sChar; 	
		}
		if(pwd == sChars){ return true;}
		for(var i=0;i<aPwd.length;i++){
			if(aPwd[i]==pwd.toLowerCase()){
				b = true;
				break;
			}
		}
		return b;
	}

	var checkName = function(name) {
		var reg1 = /[^\x00-\xff]/g;
		var reg2 = /^[\u4e00-\u9fa5_a-zA-z0-9\.\-\@]+$/g;

		var name1 = name.trim();



		if(name1.replace(reg1,"**").length < 3 || name1.replace(reg1,"**").length > 30) {
			return arrErrMsg[0];
		}

		

		if(!reg2.test(name1)){
			return arrErrMsg[1];
		}

		return true;

	}

	var checkPassword = function(pwd) {
		var reg1 = /[^\x00-\xff]/g;
		var reg2 = /^[_a-zA-z0-9\.\-]+$/g;

		var pwd1 = pwd.trim();

		if(pwd1.replace(reg1,"**").length < 6 || pwd1.replace(reg1,"**").length > 16) {
			return arrErrMsg[3];
		}

		if(isSimplePwd(pwd1)) {
			return arrErrMsg[4];
		}

		if(!reg2.test(pwd1)){
			return arrErrMsg[3];
		}

		return true;

	}

	var checkemail = function(email) {
		var reg1 = /[^\x00-\xff]/g;
		var reg2 = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

		var email1 = email.trim();

		if(email1.replace(reg1,"**").length === 0) {
			return arrErrMsg[8];
		}


		if(!reg2.test(email1)) {
			return arrErrMsg[8];
		}


		return true;

	}






	return {
		checkName: checkName,
		checkPassword: checkPassword,
		checkemail: checkemail


	};



})