// JavaScript Document

$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////
	function slide(element,startPoint,endPoint,direction){
		var ease;
		if(direction == 'left'){
			if(Math.floor(startPoint) > endPoint){
				ease = endPoint + (startPoint-endPoint)/2; 
				var b=document.getElementById(element);
				b.style.left = ease + 'px';
				startPoint = ease;
				var t=setTimeout(function(){slide(element,startPoint,endPoint,direction)}, 50);
			}else{
				clearTimeout(n);
				var c=document.getElementById(element);
				c.style.left = endPoint + 'px';
				$('#body-text').fadeIn(1000);
				$('#header-text').fadeIn(1500);
			}
		}
		else{
			if(endPoint > Math.ceil(startPoint)){
				ease = endPoint - (endPoint-startPoint)/2;
				var b=document.getElementById(element);
				b.style.left = ease + 'px';
				startPoint = ease;
				var n=setTimeout(function(){slide(element,startPoint,endPoint,direction)}, 50);
			}else{
				clearTimeout(n);
				var c=document.getElementById(element);
				c.style.left = endPoint + 'px';
				$('#body-text').fadeIn(1000);
				$('#header-text').fadeIn(1500);
			}
		}
	}
	//INIT ////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	// jobsNum should be 1 less than the total number of jobs 
	// So if you have 15 images jobsNum would be 14
	var jobsNum = 7;
	var count = 0;
	var imageWidth = 493;
	//slide the first image and load the text
	$("#header-text").load('ajax/jobs2.html #headline'+0);
	$("#body-text").load('ajax/jobs2.html #body'+0);
	slide("image-"+count,493,0,'left');
	//Mouse Actions////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	$("#left-arrow").css({ opacity: 0.5 });
	$("#right-arrow").css({ opacity: 0.5 });
	//
	$("#left-arrow").mouseout(function () {
		$(this).css({ opacity: 0.5 });
	});
	$("#right-arrow").mouseout(function () {
		$(this).css({ opacity: 0.5 });
	});
	$("#left-arrow").mouseover(function () {
		$(this).css('cursor', 'pointer');
		$(this).css({ opacity: 1 });
	});
	$("#right-arrow").mouseover(function () {
		$(this).css('cursor', 'pointer');
		$(this).css({ opacity: 1 });
	});
	// ARROW CLICKS ///////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	$("#left-arrow").click(function(){
		$('#body-text').hide();
		$('#header-text').hide();
		if(count == jobsNum){
			count = 0;
			slide("image-shadow",imageWidth,0,'left');
			slide("image-shadow2",0,-imageWidth,'left');
			slide("image-"+jobsNum,0,-imageWidth,'left');
			slide("image-"+count,imageWidth,0,'left');
			$("#header-text").load('ajax/jobs2.html #headline'+count);
			$("#body-text").load('ajax/jobs2.html #body'+count);
		}else{
			slide("image-shadow",imageWidth,0,'left');
			slide("image-shadow2",0,-imageWidth,'left');
			slide("image-"+count,0,-imageWidth,'left');
			slide("image-"+(count+1),imageWidth,0,'left');
			$("#header-text").load('ajax/jobs2.html #headline'+(count+1));
			$("#body-text").load('ajax/jobs2.html #body'+(count+1));
			count++;
		}
	});
	$("#right-arrow").click(function(){
		$('#body-text').hide();
		$('#header-text').hide();
		if(count == 0){
			count = jobsNum;
			slide("image-shadow",-imageWidth,0,'right');
			slide("image-shadow2",0,imageWidth,'right');
			slide("image-"+0,0,imageWidth,'right');
			slide("image-"+jobsNum,-imageWidth,0,'right');
			$("#header-text").load('ajax/jobs2.html #headline'+jobsNum);
			$("#body-text").load('ajax/jobs2.html #body'+jobsNum);
		}else{
			slide("image-shadow",-imageWidth,0,'right');
			slide("image-shadow2",0,imageWidth,'right');
			slide("image-"+count,0,imageWidth,'right');
			slide("image-"+(count-1),-imageWidth,0,'right');
			$("#header-text").load('ajax/jobs2.html #headline'+(count-1));
			$("#body-text").load('ajax/jobs2.html #body'+(count-1));
			count--;
		}
	});
});