function setPageId(e,a){if(a=a||1,1==a)switch(e){case"1":pageId=temp1Id;break;case"2":pageId=temp2Id;break;case"3":pageId=temp3Id;break;default:window.alert("Page-Box-toggle1 出錯囉！")}else if(2==a)switch(e){case"1":temp1Id=pageId,console.log("1:"+temp1Id);break;case"2":temp2Id=pageId,console.log("2:"+temp2Id);break;case"3":temp3Id=page3Id,console.log("3:"+temp3Id);break;default:window.alert("Page-Box-toggle2 出錯囉！")}}var pageMode="0",tempId="0",pageId="none",temp1Id="page1-bar5",temp2Id="page2-bar5",temp3Id="page3-bar5",tempSelectId="select-none";$(".bar-page").click(function(){$("#"+this.id).toggleClass("bar-close"),$("#"+this.id).toggleClass("bar-open"),this.id==pageId?pageId="none":($("#"+pageId).toggleClass("bar-close"),$("#"+pageId).toggleClass("bar-open"),pageId=this.id),setPageId(pageMode,2)}),$(".page-box").click(function(){pageMode=this.id.split("-")[2],setPageId(pageMode),pageMode==tempId||($("#select-"+tempId).removeClass("h-page-choose"),$("#select-"+tempId).removeClass("display-none"),$("#page-"+tempId).toggleClass("display-none"),$(".page").removeClass("display-none"),$("#select-"+pageMode).addClass("h-page-choose"),$("#page-"+pageMode).toggleClass("display-none")),$("body").animate({scrollTop:$(".page").offset().top-80},400),tempId=pageMode}),$(".h-page-title").click(function(){pageMode=this.id.split("-")[1],tempSelectId="select-"+tempId,setPageId(pageMode),tempSelectId==this.id||($("#"+tempSelectId).toggleClass("h-page-choose"),$("#"+this.id).toggleClass("h-page-choose"),$("#page-"+tempId).toggleClass("display-none"),$("#page-"+pageMode).toggleClass("display-none"),tempId=pageMode),$("body").animate({scrollTop:$(".page").offset().top-80},400)});