
	//点击li让二级导航出现
	var aList = document.getElementsByClassName("list");
	var aOverlist = document.getElementsByClassName("overlist")
	//console.log(aList)
	//console.log(aOverlist)

		for(var i = 0 ; i < aOverlist.length; i++){
			//console.log(aOverlist[0])		
			aOverlist[i].onmouseover = function(){
				console.log(1)
				this.children[1].style.display = "block"
			}
			aOverlist[i].onmouseout = function(){
				//console.log(2)
				this.children[1].style.display = "none"
			}
		}


	var aTwonav = document.getElementsByClassName("across");
	console.log(aTwonav)

	for(var i = 0 ; i < aTwonav.length; i++){
		aTwonav[i].onmouseover = function(){

			this.className = "active";
		}
		aTwonav[i].onmouseout = function(){

			this.className = "";
		}

	}




	//轮播图的js
		
		var oBannertop = document.getElementById("banner_t");
		var aLi = oBannertop.children[0].children;
		var index = 0;// 当前显示那张图片;

		//循环递增;
	//console.log(index);
	//console.log(aLi.length)
		var aBtn = document.getElementsByClassName("btn");

		var timer = setInterval(function(){				
				aBtn[0].onclick()				
				},1000)


		for(var i = 0 ; i < aBtn.length; i++){
			aBtn[i].onclick = function(){
					if(index == aLi.length - 1){
						index = 0;
					}else{
						index ++;
					}
					//console.log(index);
					// 2.改变marginleft值;
					oBannertop.children[0].style.marginLeft = -index * 1130 + "px";
				
			}	
		}
	





var arr = [
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00ac44599e9c89a801201794ef822f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/001bf1599ea596a80120179431eeb6.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031dc7c599eab82a80121ad7be9e33a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0036ba599e959ea80121ad7b323dab.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/maxlon_pic/f2f0599d2f860000014891f8c16f.jpg",
				title:"「诗与二十四节气」—— 咕咚app情感化闪屏系列",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/000b7a599e8fb1a8012017940d626c.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0027e8599e6728a80121ad7b433a6e.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/0319b06599e56ffa8010dfa2463e08a.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/031ee0a599e519ba8012017944e4944.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			},
			{
				img:"http://img.zcool.cn/community/00329a599e4b7ea80121ad7b0ed68f.jpg@260w_195h_1c_1e_1o_100sh.jpg",
				title:"让作品又快又好的设计方法一一标签式设计",
				txt:"UI-闪屏/壁纸"
			}

	]


	var html = "";
	
	for(var i = 0 ; i < arr.length ; i++){
		
		html += '<dl><dt><img src="'+arr[i].img+'"/></dt>'+
				'<dd>'+
					'<p>'+arr[i].title+'</p>'+
					'<p>'+arr[i].txt+'</p>'+
					'<span>188</span>'+
					'<span>11</span>'+
					'<span>56</span>'+
					'<p>'+
						'<span>小时工</span>'+
					    '<span>3小时前</span>'+
					'</p>'+
				'</dd></dl>';
	}
	var oConlist = document.getElementById("conlist");
	oConlist.innerHTML = html;




//点击按钮回到顶部
var oBtn = document.getElementById("btn");
	oBtn.onclick = function(){
			if(document.body.scrollTop){
				//这是谷歌浏览器;
				document.body.scrollTop = 0;
			}else{
				//火狐浏览器;
				document.documentElement.scrollTop = 0;
			}
	}


//滚动条与box位置的关系
var oBox = document.getElementById('box');
	window.onscroll = function(){//滚动时触发
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;//获取划上去的距离
		if(scrollTop > 1500){
			oBox.style.position = "fixed";
			oBox.style.bottom = "50px";
			oBox.style.right = "5px";
			
		}
		if(scrollTop < 1500){
			oBox.style.position = "";
			oBox.style.bottom = "250px";
			oBox.style.right = "-55px";
			
		}
		if(scrollTop > 6040){
			oBox.style.position = "absolute";
			oBox.style.bottom = 0;
			oBox.style.right = "-35px";
		}
	
}