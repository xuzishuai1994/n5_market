requirejs.config({
	paths: {
		jquery: './jquery',
		cookie: './cookie',
		
	}
});


requirejs(['jquery','cookie'],function($,cookie) {

	console.log(check);



	$(function() {

		var cookie_obj;
		$.getJSON('http://119.23.46.34/n5/n5_good_car.php', function(res_obj) {

			cookie.setCookie("user_goods",res_obj);
			cookie_obj = cookie.getCookie("user_goods");
			
			

			draw_tb(cookie_obj);
			$('.tb>tbody input').change(function() {


				var _this_num = $(this).val();

				var id = $(this).parent().parent().children().eq(8).children('.del').eq(0).attr('data-id');
				cookie_obj.forEach(function(v,i) {
					if(v.id === id) {
						v.num = _this_num;
					}
				});
				cookie.setCookie("user_goods",cookie_obj);




				var sum = 0;

				$('.tb>tbody input').each(function(i,dom) {
					var num = parseInt($(dom).val()) === 0?1:parseInt($(this).val());
					var price = parseInt($(dom).parent().siblings('.n5_price').eq(0).html());
					var add = num*price;
					sum +=add;
				});

				$('.tb_bottom>span').empty().append("￥" + sum);

				$('.ad span').empty().append("￥" + sum)
				$('.ad').show();

				$('.close_ad').click(function(e) {
					$('.ad').hide();
				})
				
				
			});



			$('.tb>tbody .del').click(function() {
				var id = $(this).attr('data-id');
				
				$(this).parent().parent().remove();

				cookie_obj.forEach(function(v,i) {
					console.log(v.id,id)
					if(v.id == id) {
						cookie_obj.splice(i,1);
					}
				});
				

				cookie.setCookie("user_goods",cookie_obj);
			});
			
		});

		$('.empty_all').click(function() {
			$('.tb>tbody').empty();
			cookie_obj = [];
			cookie.setCookie("user_goods",cookie_obj);

		})

		







		//重绘表格的方法
		function draw_tb(cookie_obj) {

				$('.tb>tbody').empty();
				var sum = 0;

				cookie_obj.forEach(function(v,i) {
					var index = i + 1;

					var xiaoji = v.num * v.n5_price;
					sum += xiaoji;

					var template = `<tr>
						<td>${index}</td>
						<td><a href="javascript:;">${v.good_name}</a></td>
						<td>${v.format}</td>
						<td>${v.normal_price}</td>
						<td class="n5_price">${v.n5_price}</td>
						<td class="n5_num"><input type="number" value="${v.num}"></td>
						<td class="xiaoji">${xiaoji}</td>
						<td><a href="javascript:;">转入收藏夹</a></td>
						<td ><a class="del" data-id="${v.id}" href="javascript:;">删除</a></td>
					</tr>`;

					$('.tb>tbody').append(template);
				});

				$('.tb_bottom>span').empty().append("￥" + sum);

			}








	})
})