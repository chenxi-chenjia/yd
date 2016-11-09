$(function(){
	// 轮播图
	function wflb(obj){
		var flag=true;
		var now=0;
		obj.each(function(){
			var xx=this;
			var mw=$(".imgs",xx).width();
			$(".imgs",xx).css({"left":mw,"display":"block"}).first().css("left",0);
			$("li",xx).first().css("background","#b61b1f");
			function move(){
				if (flag) {
					var next=now+1;
					flag=false;
					if(next>=$(".imgs",xx).length){
						next=0;
					}
					$(".imgs",xx).eq(now).animate({"left":-mw});
					$("li",xx).eq(next).css("background","#b61b1f");
					$("li",xx).eq(now).css("background","#3e3e3e");
					$(".imgs",xx).eq(next).animate({"left":0},function(){
						$(".imgs",xx).eq(now).css("left",mw);
						now=next;
						flag=true;
					});
				}else{
					return;
				};
			}
			function moveback(){
				if (flag) {
					var next=now-1;
					flag=false;
					if(next<0){
						next=$(".imgs",xx).length-1;
					}
					$(".imgs",xx).eq(next).css("left",-mw);
					$("li",xx).eq(now).css("background","#3e3e3e");
					$("li",xx).eq(next).css("background","#b61b1f");
					$(".imgs",xx).eq(now).animate({"left":mw});
					$(".imgs",xx).eq(next).animate({"left":0},function(){
						now=next;
						flag=true;
					});
				}else{
					return;
				};
			}
			$("li",xx).each(function(index){
				var index=index;
				$(this).mouseover(function(){
					if(flag){
						flag=false;
						if(now!=index){
							$(this).css("background","#b61b1f");
							$("li",xx).eq(now).css("background","#3e3e3e");
							if(now>index){
								$(".imgs",xx).eq(index).css({"left":-mw});
								$(".imgs",xx).eq(now).animate({"left":mw});
								$(".imgs",xx).eq(index).animate({"left":0},function(){
									now=index;
									flag=true;
								});
							}else{
								$(".imgs",xx).eq(now).animate({"left":-mw});
								$(".imgs",xx).eq(index).animate({"left":0},function(){
									$(".imgs",xx).eq(now).css({"left":mw});
									now=index;
									flag=true;
								});
							}
						}else{
							flag=true;
						}
					}
				})
			})
			var t=setInterval(move,3000);
			$(xx).hover(function(){
				clearInterval(t);
				$(".btnl",xx).css("display","block");
				$(".btnr",xx).css("display","block");
			},function(){
				t=setInterval(move,3000);
				$(".btnl",xx).css("display","none");
				$(".btnr",xx).css("display","none");
			})
			$(".btnl",xx).click(moveback);
			$(".btnr",xx).click(move);
		})	
	}
	wflb($(".wflb"));
	// 选项卡
	$(".sy").each(function(){
		$(this).hover(function(){
			$(".sj",this).css("display","block");
			$(".control",this).css("display","block");
		},function(){
			$(".sj",this).css("display","none");
			$(".control",this).css("display","none");
		})
	})
	// a链接屏蔽跳转
	$("a").attr("href","javascript:;").attr("rel","noopener noreferrer").attr("target","_blank");
	// 节点轮播
	function jd(){
		var mw=$("#win .center .img").outerWidth(true);
		function move(){
			$("#win .center").animate({left:-mw},4000,function(){
				$("#win .center .img").first().insertAfter($("#win .center .img:last"));
				$("#win .center").css("left",0);
			})
		}
		function moveback(){
			$("#win .center").css("left",-mw);
			$("#win .center .img").last().insertBefore($("#win .center .img:frist"));
			$("#win .center").animate({left:0},4000)
		}
		var t=setInterval(move,4000);
		$("#win").hover(function(){
			clearInterval(t)
			$("#win .center .btnl").css("display","block");
			$("#win .center .btnr").css("display","block");
		},function(){
			t=setInterval(move,4000);
			$("#win .center .btnl").css("display","noe");
			$("#win .center .btnr").css("display","none");
		})
		$("#win .center .btnl").click(move)
		$("#win .center .btnr").click(moveback)
	}
	jd();
	// 选项卡
	$("#headright a").eq(0).mouseover(function(){
		$("#dll").css("display","block");
	})
	$("#headright a").eq(1).mouseover(function(){
		$("#jjl").css("display","block");
	})
	$("#dll .zhao").mouseout(function(){
		$("#dll").css("display","none");
	})
	$("#jjl .zhao").mouseout(function(){
		$("#jjl").css("display","none");
	})
})