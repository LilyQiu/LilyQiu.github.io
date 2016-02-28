window.onload=function(){
	
	//导航
	function daohang(){
		var oNav=document.getElementById('nav');
		var aLi=oNav.getElementsByTagName('li');
		
		for(var i=0;i<aLi.length;i++){
			
			aLi[i].onmouseover=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
				}
				this.className='active';	
			};	
		}
		
	}
	daohang();
	
	//新闻
	function xinwen(){
		var oNav=document.getElementById('xw');
		var aA=oNav.getElementsByTagName('a');
		
		var oL=document.getElementById('xw-list');
		var aUl=oL.getElementsByTagName('ul');
		
		for(var i=0;i<aA.length;i++){
			aA[i].index=i;
			aA[i].onclick=function(){
				for(var j=0;j<aA.length;j++){
					aA[j].className='';	
					aUl[j].style.display='none';
				}
				this.className='active';	
				aUl[this.index].style.display='block';
			};
		}
		
		function tantiao(obj){
			var oList=document.getElementById(obj);
			var aA1=oList.getElementsByTagName("a");
			var iLiHeight=aA1[0].offsetHeight;
			for(var i=0;i<aA1.length;i++)
			{
				var sHtml=aA1[i].innerHTML;
				aA1[i].innerHTML="";
				for(var j=0;j<sHtml.length;j++)
				{
					aA1[i].innerHTML+="<span>"+sHtml[j]+"</span>"
				}
				var aSpan=aA1[i].children;
				for(var j=0;j<aSpan.length;j++)
				{
					aSpan[j].style.left=aSpan[j].offsetLeft+"px";
					aSpan[j].style.top=aSpan[j].offsetTop+"px";
					aSpan[j].startTop=aSpan[j].offsetTop;
				}
				for(var j=0;j<aSpan.length;j++)
				{
					aSpan[j].style.position="absolute";
					(function(aSpan,nub2){ 
						var iStart=0;
						var iSpanHeight=aSpan[0].offsetHeight;
						aSpan[nub2].onmouseover=function(ev)
						{
							iStart=ev.clientY;
						};
						aSpan[nub2].onmousemove=function(ev)
						{
							var iDis=ev.clientY-iStart;
							var iNub=iDis>0?1:-1;
							if(this.startTop+iDis>=0 && this.startTop+iDis< (iLiHeight-iSpanHeight))
							{
								for(var j=0;j<aSpan.length;j++)
								{
									if(Math.abs(iDis)>Math.abs(nub2-j))
									{
									aSpan[j].style.top=aSpan[j].startTop+(Math.abs(iDis)-Math.abs(nub2-j))*iNub+"px";
									}
									else
									{
										aSpan[j].style.top=aSpan[j].startTop+"px";
									}
								}
							}
						};
						aSpan[nub2].onmouseout=function(ev)
						{
							for(var j=0;j<aSpan.length;j++)
							{
								starMove(aSpan[j],{top:aSpan[j].startTop},500,"elasticOut");
							}
						};	
					})(aSpan,j);
				}		
			}
		}
		tantiao('list');
		tantiao('list1');
		tantiao('list2');
		
		
	}
	xinwen();
	
	
	
	//轮播
	function lunbo(){
		var oDiv = document.getElementById('div1');
		var oUl = oDiv.getElementsByTagName('ul')[0];
			
		var aLi = oUl.getElementsByTagName('li');
		var aImg = oUl.getElementsByTagName('img');
		
		var oBtn = document.getElementById('btn');
		var aA = oBtn.getElementsByTagName('a');
		
		var oP=document.getElementById('p');
		var aP=['1坑梓2000份返乡礼包送来深建设者','2坑梓2000份返乡礼包送来深建设者','3坑梓2000份返乡礼包送来深建设者','4坑梓2000份返乡礼包送来深建设者','5坑梓2000份返乡礼包送来深建设者'];
		
		var imgWidth = 646;
		var iNow = 0;
		var timer=null;
		
		oUl.style.width = aImg.length * imgWidth + 'px';
		
		for(i=0;i<aLi.length;i++)
		{
			aA[i].index=i;
			aA[i].onclick=function (){
				iNow=this.index;
				tab ()
			}
			
		}
		
		function tab (){
			for(i=0;i<aLi.length;i++){
					aA[i].className='';
					startMove(aImg[i] ,{opacity: 0})
			}
				aA[iNow].className='active';
				oP.innerHTML=aP[iNow];
				startMove(aImg[iNow], { opacity: 100});
		}
		
		timer=setInterval(function (){
			iNow++
			if(iNow>=aLi.length)
			{
				iNow=0;
			}
			tab();
		},3000);
		for(i=0;i<aLi.length;i++)
		{
			aA[i].onmouseover=function (){
			clearInterval(timer)
		}
		aA[i].onmouseout=function (){
			timer=setInterval(function (){
				iNow++
				if(iNow>=aLi.length)
				{
					iNow=0;
				}
				tab();
			},3000);
				
			}
		}
	}
	lunbo();	
	
	
	
	//服务区
	function fuwu(){
		var oNav=document.getElementById('fuwu-nav');
		var aLi=oNav.getElementsByTagName('li');
		
		var oSec=document.getElementById('section2');
		var aDiv=oSec.getElementsByTagName('div');
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].	onclick=function(){
				for(var j=0;j<aDiv.length;j++){
					aLi[j].className='';	
					aDiv[j].style.display='none';
				}
				this.className='active';	
				aDiv[this.index].style.display='block';
			};
		}
		
	}
	fuwu();
	
	$(function(){
		$(".fuwu1 li").mouseenter(function(){
			n=$(this).index();
			$(".fuwu1 li .b-active").eq(n).slideDown(100);
		})
		$(".fuwu1 li").mouseleave(function(){
			n=$(this).index();
			$(".fuwu1 li .b-active").eq(n).slideUp(0);
		})
		$(".fuwu2 li").mouseenter(function(){
			n=$(this).index();
			$(".fuwu2 li .b-active").eq(n).slideDown(100);
		})
		$(".fuwu2 li").mouseleave(function(){
			n=$(this).index();
			$(".fuwu2 li .b-active").eq(n).slideUp(0);
		})
		$(".fuwu3 li").mouseenter(function(){
			n=$(this).index();
			$(".fuwu3 li .b-active").eq(n).slideDown(26);
		})
		$(".fuwu3 li").mouseleave(function(){
			n=$(this).index();
			$(".fuwu3 li .b-active").eq(n).slideUp(0);
		})
		$(".fuwu4 li").mouseenter(function(){
			n=$(this).index();
			$(".fuwu4 li .b-active").eq(n).slideDown(26);
		})
		$(".fuwu4 li").mouseleave(function(){
			n=$(this).index();
			$(".fuwu4 li .b-active").eq(n).slideUp(0);
		})
	})
	
	
	
	//互动区
	function hudong(){
		var oNav=document.getElementById('s3-nav');
		var aLi=oNav.getElementsByTagName('li');
		
		var oSec=document.getElementById('s3-list');
		var aUl=oSec.getElementsByTagName('ul');
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].	onclick=function(){
				for(var j=0;j<aUl.length;j++){
					aLi[j].className='';	
					aUl[j].style.display='none';
				}
				this.className='active';	
				aUl[this.index].style.display='block';
			};
		}
	}
	hudong();
};

	