requirejs.config({
	paths: {
		jquery: './jquery',
		query: './query',
		paging: './paging',
		check: './check_user'
	}
});


requirejs(['jquery','check','query','paging'], function ($,check) {

	

	





	

	//当页面为登录页面时的那些点点滴滴
	
		var tagL = false;
		

		if(/login/g.test(location.pathname)) {
			tagL = true;
			$('.left_tab').mousemove(function(e) {

				/*$('.tabs').css({
					display: "block"
				})*/

				var tabs = $('.tabs');
				tabs.stop().slideDown(300);
			});

			$('.left_tab').mouseleave(function(e) {
				$('.tabs').css({
					display: "none"
				})
			});

			$('.reg_username>input').on("focus", function() {
				$(this).siblings('img').hide();
				$(this).removeClass('input_fa');
				$(this).addClass('input_focus');
				$(this).siblings('.error').removeClass('cred').html("3～30位，由汉字、字母、数字、点、减号、下划线及\"@\"组成");
			});

			$('.reg_username>input').on("blur", function() {
				$(this).removeClass('input_focus');
				var val = $(this).val();
				
				if(check.checkName(val) === true){
					$(this).siblings('img').show();
					$(this).siblings('.error').empty();
				}else {
					$(this).siblings('.error').addClass('cred').html(check.checkName(val));
					$(this).removeClass('input_focus').addClass('input_fa');
				}
			});


			$('.reg_password>input').on("focus", function() {
				$(this).siblings('img').hide();
				$(this).removeClass('input_fa');
				$(this).addClass('input_focus');
				$(this).siblings('.error').removeClass('cred').html("6～16位，建议使用字母、数字、特殊字符组合");
			});
			var pwd1;

			$('.reg_password>input').on("blur", function() {
				$(this).removeClass('input_focus');
				pwd1 = $(this).val();
				var val = $(this).val();
				
				if(check.checkPassword(val) === true){
					$(this).siblings('img').show();
					$(this).siblings('.error').empty();
				}else {
					$(this).siblings('.error').addClass('cred').html(check.checkPassword(val));
					$(this).removeClass('input_focus').addClass('input_fa');
				}
			});



			$('.reg_password2>input').on("focus", function() {
				$(this).siblings('img').hide();
				$(this).removeClass('input_fa');
				$(this).addClass('input_focus');
				$(this).siblings('.error').removeClass('cred').html("");
			});

			$('.reg_password2>input').on("blur", function() {
				$(this).removeClass('input_focus');
				var val = $(this).val();

				if(val === pwd1 && val !== "") {
					$(this).siblings('img').show();
					$(this).siblings('.error').empty();
				}else {
					$(this).siblings('.error').addClass('cred').html("两次输入的密码不一致，请重新输入！");
					$(this).removeClass('input_focus').addClass('input_fa');
				}
				
				
			});


			$('.reg_email>input').on("focus", function() {
				$(this).siblings('img').hide();
				$(this).removeClass('input_fa');
				$(this).addClass('input_focus');
				$(this).siblings('.error').removeClass('cred').html("请您输入邮件地址！");
			});

			$('.reg_email>input').on("blur", function() {
				$(this).removeClass('input_focus');
				
				var val = $(this).val();
				
				if(check.checkemail(val) === true){
					$(this).siblings('img').show();
					$(this).siblings('.error').empty();
				}else {
					$(this).siblings('.error').addClass('cred').html(check.checkemail(val));
					$(this).removeClass('input_focus').addClass('input_fa');
				}
				
				
			});


			$.getJSON("http://119.23.46.34/n5/n5_img_token.php", function(res) {
					var oimg = res;
					
					$('.yanzheng>a').attr('id',oimg.id);
					
					
					var img_src = 'http://119.23.46.34/' + oimg.img_src;
					
					$('.yanzheng>a>img').attr('src', img_src);
					
				});

			$('.yanzheng>a').click(function() {
				$('.yanzheng>img').hide();

				$.getJSON("http://119.23.46.34/n5/n5_img_token.php", function(res) {
					var oimg = res;
					
					$('.yanzheng>a').attr('id',oimg.id);
					
					
					var img_src = 'http://119.23.46.34/' + oimg.img_src;
					
					$('.yanzheng>a>img').attr('src', img_src);
					
				});
			});

			$('.yanzheng>input').on('change', function(e) {
				var img_num = $(this).val();
				var id = $('.yanzheng>a').attr('id');

				$.post('http://119.23.46.34/n5/n5_img_token2.php', {img_num:img_num,id:id},function(res) {
					var result = JSON.parse(res);

					if(result.result == "ok") {
						$('.yanzheng>img').show();
					}
				})



			})



			$.getJSON("http://119.23.46.34/n5/n5_img_token.php", function(res) {
					var oimg = res;
					
					$('.reg_yanzheng>a').attr('id',oimg.id);
					
					
					var img_src = 'http://119.23.46.34/' + oimg.img_src;
					
					$('.reg_yanzheng>a>img').attr('src', img_src);
					
				});


			$('.reg_yanzheng>a').click(function() {
				$('.reg_yanzheng>img').hide();

				$.getJSON("http://119.23.46.34/n5/n5_img_token.php", function(res) {
					var oimg = res;
					
					$('.reg_yanzheng>a').attr('id',oimg.id);
					
					
					var img_src = 'http://119.23.46.34/' + oimg.img_src;
					
					$('.reg_yanzheng>a>img').attr('src', img_src);
					
				});
			});


			$('.reg_yanzheng>input').on('change', function(e) {
				var img_num = $(this).val();
				var id = $('.reg_yanzheng>a').attr('id');

				$.post('http://119.23.46.34/n5/n5_img_token2.php', {img_num:img_num,id:id},function(res) {
					var result = JSON.parse(res);

					if(result.result == "ok") {
						$('.reg_yanzheng>img').show();
					}
				})



			})








		}




		//当页面为物品详情页是的点点滴滴

		if(/good_xq/g.test(location.pathname)) {
			tagL = true;
			$('.left_tab').mousemove(function(e) {

				/*$('.tabs').css({
					display: "block"
				})*/

				var tabs = $('.tabs');
				tabs.stop().slideDown(300);
			});

			$('.left_tab').mouseleave(function(e) {
				$('.tabs').css({
					display: "none"
				})
			});

			$('.small_fada>li').mousemove(function(e) {

				$('.middle_fada>img').attr('src',"./src/img/good_xq"+ ($(this).index()+1) +"_1.jpg")
				$(this).children('img').css({
					border: "1px solid #78b5f4"
				});

				$(this).siblings().children('img').css({
					border: "1px solid #e4e4e4"
				})
			});

			$('.middle_fada').mousemove(function(e) {
				

				var left = e.pageX - $(this).offset().left - (parseInt($('.move_box').css('width'))/2);
				var top = e.pageY - $(this).offset().top - (parseInt($('.move_box').css('height'))/2);

				if(left < 0) {
					left = 0;
				}

				if(top < 0) {
					top = 0;
				}

				var max_left = parseInt($(this).css('width')) - parseInt($('.move_box').css('width'));
				var max_top = parseInt($(this).css('height')) - parseInt($('.move_box').css('height'));


				if(left >= max_left) {
					left = max_left;
				}

				if(top >= max_top) {
					top = max_top;
				}

				$('.move_box').css({
					left: left + "px",
					top: top + "px",
				})


				var scale = parseInt($(this).css('width')) / parseInt($('.move_box').css('width'));

				$('.big_fada').show();
				$('.big_fada>img').css({
					top: -top*scale + "px",
					left: -left*scale + "px",
				})
			});

			$('.middle_fada').mouseleave(function(e) {
				$('.big_fada').hide();
			})


			$(".right_nav>li").click(function(e) {
				$(this).addClass('bb2').siblings().removeClass('bb2');
				var index = $(this).index();
				$('.bottom_right>div').eq(index).show().siblings('div').hide();
			})















		}






		//listTable.html

		if( /listTable/g.test(location.pathname)) {
			tagL = true;

			$('.left_tab').mousemove(function(e) {

				/*$('.tabs').css({
					display: "block"
				})*/

				var tabs = $('.tabs');
				tabs.stop().slideDown(300);
			});

			$('.left_tab').mouseleave(function(e) {
				$('.tabs').css({
					display: "none"
				})
			});







			var f = $('.g_more_level');
			var f_li = $('.g_more_level>li');
			var f_ul = $('.g_more_level>ul');


			

			f_li.each(function(i,dom) {
				$(dom).click(function() {
					$(this).children('.more_img').toggleClass('more_img_1');
					f_ul.eq(i).toggleClass('s_show');
				})
			})


			//week_rank ajax 

			$.getJSON('http://119.23.46.34/n5/n5_week_rank.php', function(res) {
				res.forEach(function(v,i) {
					var li = $('<li></li>');
					var img = $('<img>');
					
					img.attr('src',v.img_src);

					li.append(img);
					var template = `<p class="title">${v.title}</p>
							<p class="price">￥<span class="price_num">${v.price}</span></p>`;
					li.append(template);

					$('.week_rank_items').append(li);

				})
			});

			//user_has_buy ajax

			$.getJSON('http://119.23.46.34/n5/user_has_buy.php', function(res) {

				res.forEach(function(v,i) {
					var li = $('<li></li>');
					var img = $('<img>');
					
					img.attr('src',v.img_src);

					li.append(img);
					var template = `<p class="title">${v.title}</p>
							<p class="price">￥<span class="price_num">${v.price}</span></p>`;
					li.append(template);

					$('.user_has_buy_items').append(li);

				});
			});

			//当不同的brand名字被点击时现实的背景变化
			$('.brand_type').click(function() {
				

				if($(this).index() === 1) {
					$('.brand_xia').show();
					$('.more_brand').show();
				}else {
					$('.brand_xia').hide();
					$('.more_brand').hide();
				}
				$(this).css({
					background: "#02a3f0",
					border: "1px solid #02a3f0",
					color: "#fff"
				}).siblings('.brand_type').css({
					background: "#fff",
					border: "1px solid #fff",
					color: "#0066cc"
				});

				var str = $(this).html().replace(/<.*>/,"");
				$('.brand>dl>dd').empty();

				if($(this).index() >= 2) {

					brand_name_arr.forEach(function(v,i) {

						console.log(v.brand_type,str,str.indexOf(v.brand_type));

						if(str.indexOf(v.brand_type) >=0){

							var template = `<div data-fl="${v.brand_type}"><a class="brand_name"  href="javascript:;">${v.brand_name}</a></div>`;
							$('.brand>dl>dd').append(template);
						}
						
					});
					
				}else {
					brand_name_arr.forEach(function(v,i) {
						if( i < 20) {
							var template = `<div data-fl="${v.brand_type}"><a class="brand_name"  href="javascript:;">${v.brand_name}</a></div>`;

							$('.brand>dl>dd').append(template);
						}
					});

				}
				
			});

			var more_brand_tag = false;
			var brand_name_arr = [];

			$('.more_brand').click(function() {
				
				if(more_brand_tag === false) {
					$(this).empty().append("收起");
					more_brand_tag = true;

					$('.brand>dl>dd').empty();
					brand_name_arr.forEach(function(v,i) {
						var template = `<div data-fl="${v.brand_type}"><a class="brand_name"  href="javascript:;">${v.brand_name}</a></div>`;

						$('.brand>dl>dd').append(template);
					})
				}else {
					$(this).empty().append("更多");
					more_brand_tag = false;
					$('.brand>dl>dd').empty();
					brand_name_arr.forEach(function(v,i) {
						if( i < 20) {
							var template = `<div data-fl="${v.brand_type}"><a class="brand_name"  href="javascript:;">${v.brand_name}</a></div>`;

							$('.brand>dl>dd').append(template);
						}
					});
				}
			})



			//针对用户点击不同的类型的brand ajax
			

			$.getJSON('http://119.23.46.34/n5/n5_brand_name.php', function(res) {
				res.forEach(function(v,i) {
					brand_name_arr.push(v);

					if(i < 20) {
						var template = `<div data-fl="${v.brand_type}"><a class="brand_name"  href="javascript:;">${v.brand_name}</a></div>`;

						$('.brand>dl>dd').append(template);
					}

				});
			});

			//针对用户点击不同的price

			$('.price_type').click(function() {
				
				$(this).css({
					background: "#02a3f0",
					border: "1px solid #02a3f0",
					color: "#fff"
				}).siblings('.price_type').css({
					background: "#fff",
					border: "1px solid #fff",
					color: "#0066cc",
				});
	
			});

			//针对不同排序规则点击时的背景样式


			$('.paixu_type').each(function(i,dom) {
				

					$(dom).click(function() {
						$(this).css({
							background: "#fc1c5a",
	    					border: "1px solid #fc1c5a",
	    					color: "#fff",
						}).siblings('.paixu_type').css({
							background: "#f6f6f6",
							border: "1px solid #cecbce",
							color: "#666",
						});
					})


					
				
			})

			//分页的ajax

			var pageCount = 1;
			var all_page = 0;
			var all_goods = 0;
			getPageGood(pageCount);

			function getPageGood(page) {
				console.log(page);
				$('.goods_items').empty();
				$.post('http://119.23.46.34/n5/n5_goods.php',{page:page},function(res) {
					var result = JSON.parse(res);
					
					$('.goods_num').empty().append("共" + result.all_num + "个商品");
					all_page = result.all_page;
					all_goods = result.all_num;
					$('.yema').children('b').empty().append(result.all_page);
					$('.yema').children('span').empty().append(page);

					result.cur.forEach(function(v,i) {
						var li = $('<li></li>');
						var img = $('<img>');

						img.attr('src',v.good_img);


						var template = 	`<div class="title"><a href="javascript:;">${v.title}</a></div>
							<div class="price">￥<span class="good_price">${v.price}.00</span><span class="good_zhe">(${v.discount}折)</span></div>
							<div class="good_btns">
								<a class="add_car" href="javascript:;">加入购物车</a>
								<a class="good_collect" href="javascript:;">收藏</a>
							</div>`;

						li.append(img);
						li.append(template);
						$('.goods_items').append(li);

					});

					console.log(all_page,all_goods);
					$('.page_fenye').Paging({pagesize:36,current:1,count:all_goods,callback: function(current) {
						pageCount = current;
						getPageGood1(current);
					}});


				});

			}



			function getPageGood1(page) {
				$('.goods_items').empty();
				$.post('http://119.23.46.34/n5/n5_goods.php',{page:page},function(res) {
					var result = JSON.parse(res);
					console.log(JSON.parse(res));
					$('.goods_num').empty().append("共" + result.all_num + "个商品");
					all_page = result.all_page;
					all_goods = result.all_num;
					$('.yema').children('b').empty().append(result.all_page);
					$('.yema').children('span').empty().append(page);

					result.cur.forEach(function(v,i) {
						var li = $('<li></li>');
						var img = $('<img>');

						img.attr('src',v.good_img);


						var template = 	`<div class="title"><a href="javascript:;">${v.title}</a></div>
							<div class="price">￥<span class="good_price">${v.price}.00</span><span class="good_zhe">(${v.discount}折)</span></div>
							<div class="good_btns">
								<a class="add_car" href="javascript:;">加入购物车</a>
								<a class="good_collect" href="javascript:;">收藏</a>
							</div>`;

						li.append(img);
						li.append(template);
						$('.goods_items').append(li);

					});

					


				});

			}










			$('.fenye').children('.pre').click(function() {
				if(pageCount <= 1) {
					return;
				}else {
					pageCount--;
					getPageGood1(pageCount);
					$('.page_fenye').empty();
					$('.page_fenye').Paging({pagesize:36,current:pageCount,count:all_goods,callback: function(current) {
						pageCount = current;
						getPageGood1(current);
					}});
				}
			});

			$('.fenye').children('.next').click(function() {
				if(pageCount >= all_page) {
					return;
				}else {
					pageCount++;
					getPageGood1(pageCount);
					$('.page_fenye').empty();

					$('.page_fenye').Paging({pagesize:36,current:pageCount,count:all_goods,callback: function(current) {
						pageCount = current;
						getPageGood1(current);
					}});
				}
			});




			
			

















			






		}






		//index.html











	var show;
	var hide;

	$(document).on('scroll', function(e) {



		if($(window).scrollTop() > 500 && tagL === false) {
			$('#nav').addClass('h_f');
			$('.tabs').css({
				display: "none"
			})

			show = function(e) {
					$('.tabs').css({
					display: "block"
				});
			}
			hide = function (e) {
				$('.tabs').css({
					display: "none"
				});
			}

			$('.left_tab').on('mousemove',show)
			$('.left_tab').on('mouseleave',hide)
		}else {

			if(tagL === false) {
				$('.left_tab').off('mousemove')
				$('.left_tab').off('mouseleave')
				$('#nav').removeClass('h_f');
				$('.tabs').css({
					display: "block"
				})


			}

			
		}
		
	});






	$(function () {
		//我的账户特效

		$('.spxia').parent().on('mouseenter', function (e) {
			$(this).css({border: "1px solid #ccc",background: "rgba(255,255,255,1)"})
			$('.htr_menu').css({display:"block"});
			

		});



		

		$('.spxia').parent().mouseleave(function() {
			$(this).css({border: "1px solid rgba(255,255,255,0)",background: "rgba(255,255,255,0)"})
			$('.htr_menu').css({display:"none"});
			
		})

		//搜索框的ajax

		$('.sbox').on("input", function () { 

			if($(this).val() == "") {
				return;
			} 
			
			var url = "http://119.23.46.34/n5/n5.php?keyword=" + encodeURIComponent($(this).val());
			$.get(url,{},function (data) {
				$('.sbox_result li').remove();
				var result = data.replace("true","");
				var odata = eval(result)[0];
				for(var i = 0, len = odata[0].length; i < len; i++) {
					if(odata[1][i] == null) {
						return;
					}
					var oli = $('<li></li>');
					var ospan1 = $('<span></span>');
					var ospan2 = $('<span></span>');

					ospan1.addClass('s_left');
					ospan1.append(odata[0][i]);

					ospan2.addClass('s_right');
					ospan2.append("约" + odata[1][i] + "个商品");

					oli.append(ospan1).append(ospan2);
					$('.sbox_result').append(oli);
				}


			})
		});


		$('.sbox').on('blur', function () {
			$('.sbox_result li').remove();
		});

		$('.sbox').on('focus', function () {
			if($(this).val() == "") {
				return;
			} 
			var url = "http://119.23.46.34/n5/n5.php?keyword=" + encodeURIComponent($(this).val());
			$.get(url,{},function (data) {
				$('.sbox_result li').remove();
				var result = data.replace("true","");
				var odata = eval(result)[0];
				for(var i = 0, len = odata[0].length; i < len; i++) {
					if(odata[1][i] == null) {
						return;
					}
					var oli = $('<li></li>');
					var ospan1 = $('<span></span>');
					var ospan2 = $('<span></span>');

					ospan1.addClass('s_left');
					ospan1.append(odata[0][i]);

					ospan2.addClass('s_right');
					ospan2.append("约" + odata[1][i] + "个商品");

					oli.append(ospan1).append(ospan2);
					$('.sbox_result').append(oli);
				}


			})
		});


		//购物车划过时的特效
		$('.gouwu_car').on("mouseenter",function () {

			$(this).css({
				"background-position-y": "-73px",
			})
			$('.car_inner').css({
				"display": "block",
			})

			$('#top_s').on("mousemove", function (e) {

				if($(e.target).attr('id') === "top_s") {
					$('.gouwu_car').css({
						"background-position-y": "-30px",
					})
					$('.car_inner').css({
						"display": "none",
					})
				}
				
			});


		});


		
			$('#nav').on("mousemove", function (e) {
				

				if($(e.target).attr('id') !== "top_s") {
					$('.gouwu_car').css({
						"background-position-y": "-30px",
					})
					$('.car_inner').css({
						"display": "none",
					})
				}
				
			});



		//tab页特效

		$('.tabs>li').mousemove(function() {
			$(this).children('.tl').css({
				background: "#fff"
			})
			$(this).children('.tr').css({
				display: "block"
			})
		})

		$('.tabs>li').mouseleave(function() {
			$(this).children('.tl').css({
				background: "#f8f8f8"
			})
			$(this).children('.tr').css({
				display: "none"
			})
		})

		//轮播图

		var nowIndex = 9999;

		var color = ["rgb(214,248,247)","rgb(1,165,252)","rgb(254,234,243)","rgb(13,159,158)"]


		$('.lunbo_btns').children('li').mouseenter(function() {
			
			

			if($(this).index() === nowIndex) {
				return;
			}

			$(this).siblings().css({
				background: "#c8c8c8"
			});

			$(this).css({
				background: "#00b5ff"
			})

			$('.lunbo_imgs').children('img').css({
				opacity: 0
			})

			var index = $(this).index();

			$('.lunbo_imgs').children('img').stop().eq(index).animate({opacity:1},600);

			$('#banner').css({
				background: color[index]
			})

			$('.banner_ad').children('img').each(function(i,dom) {
				$(dom).attr("src","./src/img/" + (index + 1) + "_" + (i + 1) + ".jpg");
			})

			nowIndex = $(this).index();



		})


		//秒杀活动时间

		
		/*var otimers = {};*/

		function sha(span1,span2,span3,h,m,s) {
			var 	iHour = h,
					iMinutes = m,
					iSecond = s,
					id = null;
			id = setInterval(function() {
				iSecond -=0.1;
				iSecond=iSecond.toFixed(1);
				if(iSecond < 0) {
					iMinutes--;
					if(iMinutes < 0) {
						iHour--;
						iMinutes = 60;
						if(iHour === 0) {
							clearInterval(id);
							return;
						}
					}
					iSecond = 60;
				}
				span3.empty().append(iSecond);
				span2.empty().append(iMinutes);
				span1.empty().append(iHour);
				
			},100)
		}


		$('.time').each(function(i,dom) {
			var span1 = $(dom).children('span').eq(0);
			var span2 = $(dom).children('span').eq(1);
			var span3 = $(dom).children('span').eq(2);
			sha(span1,span2,span3,15,15,15);

		})

		//tap上方的tabs

		$('.tap_tab').children('li').mouseenter(function() {
			
			$('.arrow_outer').css({
				left: $(this).position().left
			})

			var index = $(this).index() - 1;
			$('.tap_content').children('li').each(function(i,dom) {
				if(i === index) {
					$(dom).css({
						display: "block"
					})
				}else {
					$(dom).css({
						display: "none"
					})
				}


			})


		})

		//hufu的百叶窗

		var fa = $('#hufu .content_right .items');

		
		fa.children('li').each(function(i,dom) {

			$(dom).mouseenter(function() {
				

				$(this).parent().children('li').each(function(i,dom) {
					$(dom).children('.finall').css({
						display: 'none'
					});
					$(dom).children('.before').css({
						display: 'block'
					})

				});

				$(this).children('.before').css({
					display: 'none'
				});
				$(this).children('.finall').css({
					display: 'block'
				});


			});



		}) 


		//caizhuang的百叶窗

		var fa = $('#makeup .content_right .items');

		
		fa.children('li').each(function(i,dom) {

			$(dom).mouseenter(function() {
				

				$(this).parent().children('li').each(function(i,dom) {
					$(dom).children('.finall').css({
						display: 'none'
					});
					$(dom).children('.before').css({
						display: 'block'
					})

				});

				$(this).children('.before').css({
					display: 'none'
				});
				$(this).children('.finall').css({
					display: 'block'
				});


			});



		}) 

		//perfume的百叶窗

		var fa = $('#perfume .content_right .items');

		
		fa.children('li').each(function(i,dom) {

			$(dom).mouseenter(function() {
				

				$(this).parent().children('li').each(function(i,dom) {
					$(dom).children('.finall').css({
						display: 'none'
					});
					$(dom).children('.before').css({
						display: 'block'
					})

				});

				$(this).children('.before').css({
					display: 'none'
				});
				$(this).children('.finall').css({
					display: 'block'
				});


			});



		}) 






		//mens的百叶窗

		var fa = $('#mens .content_right .items');

	
		fa.children('li').each(function(i,dom) {

			$(dom).mouseenter(function() {
				

				$(this).parent().children('li').each(function(i,dom) {
					$(dom).children('.finall').css({
						display: 'none'
					});
					$(dom).children('.before').css({
						display: 'block'
					})

				});

				$(this).children('.before').css({
					display: 'none'
				});
				$(this).children('.finall').css({
					display: 'block'
				});


			});



		})

		//go top

		$('.top').click(function(e) {
			$('body').scrollTop(0);
		})










	});
	
});