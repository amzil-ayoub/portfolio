$(document).ready(function(){
	$("#btn_pr").on('click',function(){
		$(".shane_tm_portfolio").css("height","auto");
		$(this).fadeOut(700);
	});

	$(".ifr p i").on("click",function(){
		 $(".ifr").slideToggle();
	});

	$(".ifrProject").on("click",function(){
		switch($(this).attr("data-id")) {
			case "gddse":
		    	$("#ifrTrg").html('<iframe src="https://amzil-ayoub.github.io/github-search/" frameborder="0">');
		    	$(".ifr p span").html("<a target='_blanc' href='https://amzil-ayoub.github.io/github-search/'>Or click here!</a>");
			    $(".ifr").slideToggle();
		    break;
		  	case "ase":
		    	$("#ifrTrg").html('<iframe src="https://amzil-ayoub.github.io/anime-search/" frameborder="0">');
		    	$(".ifr p span").html("<a target='blanc' href='https://amzil-ayoub.github.io/anime-search/'>Or click here!</a>");
			    $(".ifr").slideToggle();
		    break;
		    case "gag":
		    	$("#ifrTrg").html('<iframe src="https://amzil-ayoub.github.io/github-avatar/" frameborder="0">');
		    	$(".ifr p span").html("<a target='_blanc' href='https://amzil-ayoub.github.io/github-avatar/'>Or click here!</a>");
			    $(".ifr").slideToggle();
		    break;
		  	case "cm1":
		    	$("#ifrTrg").html('<iframe src="https://amzil-ayoub.github.io/chart-maker/" frameborder="0">');
		    	$(".ifr p span").html("<a target='_blanc' href='https://amzil-ayoub.github.io/chart-maker/'>Or click here!</a>");
			    $(".ifr").slideToggle();
		    break;
		    case "cm2":
		    	$("#ifrTrg").html('<iframe src="https://amzil-ayoub.github.io/chart-maker-v2.0/" frameborder="0">');
		    	$(".ifr p span").html("<a target='_blanc' href='https://amzil-ayoub.github.io/chart-maker-v2.0/'>Or click here!</a>");
			    $(".ifr").slideToggle();
		    break;
		}		
	});
});

