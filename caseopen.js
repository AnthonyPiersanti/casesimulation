var spent = 0;
var skinval = 0;
var profit = 0;

var casesOpened = 0;

var milspec = 0;
var restricted = 0;
var classified = 0;
var covert = 0;
var knife = 0;

var milspec_stat = 0;
var restricted_stat = 0;
var classified_stat = 0;
var covert_stat = 0;
var knife_stat = 0;

var running = 0;
var caseArray = chroma2;
var caseArrayST = chroma2_st;

var casePrice = case_prices;

var speed = 0;

var speed = 100;

var cval = "none";

function case_number(num){
			$("#drop_text").html("Opening " + num + " cases per second." + " <span class=\"caret\"></span>");
			
			switch (num){
				case 1:
					speed = 1000;
					break;
					
				case 5:
					speed = 200;
					break;
					
				case 10:
					speed = 100;
					break;
					
				case 50:
					speed = 20;
					break;
					
				case 100:
					speed = 10;
					break;
					
				case 500:
					speed = 2;
					break;
				
				
				
			}

	}
  

function startPause(){

	
	if (running == 0){
		if(cval == "none"){
			$("#no_case").show();
			window.setTimeout(function() { $("#no_case").hide(); }, 3500);
		}else{
			running = 1;
			increment();
			document.getElementById("start").innerHTML = "Pause";
			if(speed == 0){
				$("#drop_text").html("Opening " + 10 + " cases per second." + " <span class=\"caret\"></span>");
				speed = 10;

			}
		}
	}else{
		running = 0;
		document.getElementById("start").innerHTML = "Resume";
	}


}

function reset(){
	running = 0;
	spent = 0;
	document.getElementById("spent_val").innerHTML = "$"+0+" USD";
	skinval = 0;
	document.getElementById("value_val").innerHTML = "$"+0+" USD";
	profit = 0;
	document.getElementById("profit_val").innerHTML = "$"+0+" USD";
	casesOpened = 0;
	document.getElementById("opened_val").innerHTML = 0;
	milspec = 0;
	document.getElementById("milspec_val").innerHTML = 0;
	restricted = 0;
	document.getElementById("restricted_val").innerHTML = 0;
	classified = 0;
	document.getElementById("classified_val").innerHTML = 0;
	covert = 0;
	document.getElementById("covert_val").innerHTML = 0;
	knife = 0;
	document.getElementById("knife_val").innerHTML = 0;
	milspec_stat = 0;
	document.getElementById("milspec_stat_val").innerHTML = 0;
	restricted_stat = 0;
	document.getElementById("restricted_stat_val").innerHTML = 0;
	classified_stat = 0;
	document.getElementById("classified_stat_val").innerHTML = 0;
	covert_stat = 0;
	document.getElementById("covert_stat_val").innerHTML = 0;
	knife_stat = 0;
	document.getElementById("knife_stat_val").innerHTML = 0;

	$("#drop_text").html("Speed " + "<span class=\"caret\"></span></button>");

	
	$("#milspec_mw_val").text(0);
	$("#milspec_fac_new_val").text(0);
	$("#milspec_ft_val").text(0);
	$("#milspec_bs_val").text(0);
	$("#milspec_ww_val").text(0);

	$("#milspec_mw_val_st").text(0);
	$("#milspec_fac_new_val").text(0);
	$("#milspec_ft_val_st").text(0);
	$("#milspec_bs_val_st").text(0);
	$("#milspec_ww_val_st").text(0);

	$("#knife_mw_val").text(0);
	$("#knife_fac_new_val").text(0);
	$("#knife_ft_val").text(0);
	$("#knife_bs_val").text(0);
	$("#knife_ww_val").text(0);

	$("#knife_mw_val_st").text(0);
	$("#knife_fac_new_val").text(0);
	$("#knife_ft_val_st").text(0);
	$("#knife_bs_val_st").text(0);
	$("#knife_ww_val_st").text(0);

	$("#covert_mw_val").text(0);
	$("#covert_fac_new_val").text(0);
	$("#covert_ft_val").text(0);
	$("#covert_bs_val").text(0);
	$("#covert_ww_val").text(0);

	$("#covert_mw_val_st").text(0);
	$("#covert_fac_new_val").text(0);
	$("#covert_ft_val_st").text(0);
	$("#covert_bs_val_st").text(0);
	$("#covert_ww_val_st").text(0);

	$("#classified_mw_val").text(0);
	$("#classified_fac_new_val").text(0);
	$("#classified_ft_val").text(0);
	$("#classified_bs_val").text(0);
	$("#classified_ww_val").text(0);

	$("#classified_mw_val_st").text(0);
	$("#classified_fac_new_val").text(0);
	$("#classified_ft_val_st").text(0);
	$("#classified_bs_val_st").text(0);
	$("#classified_ww_val_st").text(0);

	$("#restricted_mw_val").text(0);
	$("#restricted_fac_new_val").text(0);
	$("#restricted_ft_val").text(0);
	$("#restricted_bs_val").text(0);
	$("#restricted_ww_val").text(0);

	$("#restricted_mw_val_st").text(0);
	$("#restricted_fac_new_val").text(0);
	$("#restricted_ft_val_st").text(0);
	$("#restricted_bs_val_st").text(0);
	$("#restricted_ww_val_st").text(0);

	document.getElementById("start").innerHTML = "Start";


}

function increment(){
	
	if (running == 1){

		setTimeout(function(){
				openCase();
				increment();
			}, speed)
		
	}
}

function openCase(){

	if(running == 1 && cval != "none"){
	
		casesOpened+=1;
		document.getElementById("opened_val").innerHTML = casesOpened;
		
		spent+=2.50;
		
		spent += casePrice[cval];

		document.getElementById("spent_val").innerHTML = "$"+spent.toFixed(2)+" USD";
		
		var openedVal = 0;
		
		var prob = Math.floor(Math.random() * 10001) + 1;
		
		//knife
		if (prob >=1 && prob <=21){
			var s = isStatTrak();
			if (s == 6){
				knife_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["knife"][wear];
				document.getElementById("knife_stat_val").innerHTML = knife_stat;
				if(wear == "fn"){
					$("#knife_fac_new_val_st").text(parseInt($("#knife_fac_new_val_st").text()) + 1);
				}else if(wear == "mw"){
					$("#knife_mw_val_st").text(parseInt($("#knife_mw_val_st").text()) + 1);
				}else if(wear == "ft"){
					$("#knife_ft_val_st").text(parseInt($("#knife_ft_val_st").text()) + 1);
				}else if(wear == "ww"){
					$("#knife_ww_val_st").text(parseInt($("#knife_ww_val_st").text()) + 1);
				}else{
					$("#knife_bs_val_st").text(parseInt($("#knife_bs_val_st").text()) + 1);
				}
				
			}else{
				knife+=1;
				var wear = getWear();
				skinval+= caseArray["knife"][wear];
				document.getElementById("knife_val").innerHTML = knife;

				if(wear == "fn"){
					$("#knife_fac_new_val").text(parseInt($("#knife_fac_new_val").text()) + 1);
				}else if(wear == "mw"){
					$("#knife_mw_val").text(parseInt($("#knife_mw_val").text()) + 1);
				}else if(wear == "ft"){
					$("#knife_ft_val").text(parseInt($("#knife_ft_val").text()) + 1);
				}else if(wear == "ww"){
					$("#knife_ww_val").text(parseInt($("#knife_ww_val").text()) + 1);
				}else{
					$("#knife_bs_val").text(parseInt($("#knife_bs_val").text()) + 1);

				}
				
			}
			
			
		//covert	
		}else if (prob >=22 && prob <=79){
			var s = isStatTrak();
			if (s == 1){
				covert_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["covert"][wear];
				document.getElementById("covert_stat_val").innerHTML = covert_stat;
				if(wear == "fn"){
					$("#covert_fac_new_val_st").text(parseInt($("#covert_fac_new_val_st").text()) + 1);
				}else if(wear == "mw"){
					$("#covert_mw_val_st").text(parseInt($("#covert_mw_val_st").text()) + 1);
				}else if(wear == "ft"){
					$("#covert_ft_val_st").text(parseInt($("#covert_ft_val_st").text()) + 1);
				}else if(wear == "ww"){
					$("#covert_ww_val_st").text(parseInt($("#covert_ww_val_st").text()) + 1);
				}else{
					$("#covert_bs_val_st").text(parseInt($("#covert_bs_val_st").text()) + 1);

				}
			}else{
				covert+=1;
				var wear = getWear();
				skinval+= caseArray["covert"][wear];
				document.getElementById("covert_val").innerHTML = covert;
				if(wear == "fn"){
					$("#covert_fac_new_val").text(parseInt($("#covert_fac_new_val").text()) + 1);
				}else if(wear == "mw"){
					$("#covert_mw_val").text(parseInt($("#covert_mw_val").text()) + 1);
				}else if(wear == "ft"){
					$("#covert_ft_val").text(parseInt($("#covert_ft_val").text()) + 1);
				}else if(wear == "ww"){
					$("#covert_ww_val").text(parseInt($("#covert_ww_val").text()) + 1);
				}else{
					$("#covert_bs_val").text(parseInt($("#covert_bs_val").text()) + 1);

				}
				
			}
			
		//classified	
		}else if (prob >=80 && prob <=395){
			var s = isStatTrak();
			if (s == 1){
				classified_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["classified"][wear];
				document.getElementById("classified_stat_val").innerHTML = classified_stat;
				if(wear == "fn"){
					$("#classified_fac_new_val_st").text(parseInt($("#classified_fac_new_val_st").text()) + 1);
				}else if(wear == "mw"){
					$("#classified_mw_val_st").text(parseInt($("#classified_mw_val_st").text()) + 1);
				}else if(wear == "ft"){
					$("#classified_ft_val_st").text(parseInt($("#classified_ft_val_st").text()) + 1);
				}else if(wear == "ww"){
					$("#classified_ww_val_st").text(parseInt($("#classified_ww_val_st").text()) + 1);
				}else{
					$("#classified_bs_val_st").text(parseInt($("#classified_bs_val_st").text()) + 1);
				}
			}else{
				classified+=1;
				var wear = getWear();
				skinval+= caseArray["classified"][wear];
				document.getElementById("classified_val").innerHTML = classified;
				if(wear == "fn"){
					$("#classified_fac_new_val").text(parseInt($("#classified_fac_new_val").text()) + 1);
				}else if(wear == "mw"){
					$("#classified_mw_val").text(parseInt($("#classified_mw_val").text()) + 1);
				}else if(wear == "ft"){
					$("#classified_ft_val").text(parseInt($("#classified_ft_val").text()) + 1);
				}else if(wear == "ww"){
					$("#classified_ww_val").text(parseInt($("#classified_ww_val").text()) + 1);
				}else{
					$("#classified_bs_val").text(parseInt($("#classified_bs_val").text()) + 1);

				}
				
			}
			
		//restricted
		}else if (prob >=396 && prob <=2021){
			var s = isStatTrak();
			if (s == 1){
				restricted_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["restricted"][wear]
				document.getElementById("restricted_stat_val").innerHTML = restricted_stat;
				if(wear == "fn"){
					$("#restricted_fac_new_val_st").text(parseInt($("#restricted_fac_new_val_st").text()) + 1);
				}else if(wear == "mw"){
					$("#restricted_mw_val_st").text(parseInt($("#restricted_mw_val_st").text()) + 1);
				}else if(wear == "ft"){
					$("#restricted_ft_val_st").text(parseInt($("#restricted_ft_val_st").text()) + 1);
				}else if(wear == "ww"){
					$("#restricted_ww_val_st").text(parseInt($("#restricted_ww_val_st").text()) + 1);
				}else{
					$("#restricted_bs_val_st").text(parseInt($("#restricted_bs_val_st").text()) + 1);
				}	
			}else{
				restricted+=1;
				var wear = getWear();
				skinval+= caseArray["restricted"][wear];
				document.getElementById("restricted_val").innerHTML = restricted;
					if(wear == "fn"){
					$("#restricted_fac_new_val").text(parseInt($("#restricted_fac_new_val").text()) + 1);
				}else if(wear == "mw"){
					$("#restricted_mw_val").text(parseInt($("#restricted_mw_val").text()) + 1);
				}else if(wear == "ft"){
					$("#restricted_ft_val").text(parseInt($("#restricted_ft_val").text()) + 1);
				}else if(wear == "ww"){
					$("#restricted_ww_val").text(parseInt($("#restricted_ww_val").text()) + 1);
				}else{
					$("#restricted_bs_val").text(parseInt($("#restricted_bs_val").text()) + 1);
				}
			}
		
		//mil-spec
		}else{
			var s = isStatTrak();
			if (s == 1){
				milspec_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["milspec"][wear];
				document.getElementById("milspec_stat_val").innerHTML = milspec_stat;
				if(wear == "fn"){
					$("#milspec_fac_new_val_st").text(parseInt($("#milspec_fac_new_val_st").text()) + 1);
				}else if(wear == "mw"){
					$("#milspec_mw_val_st").text(parseInt($("#milspec_mw_val_st").text()) + 1);
				}else if(wear == "ft"){
					$("#milspec_ft_val_st").text(parseInt($("#milspec_ft_val_st").text()) + 1);
				}else if(wear == "ww"){
					$("#milspec_ww_val_st").text(parseInt($("#milspec_ww_val_st").text()) + 1);
				}else{
					$("#milspec_bs_val_st").text(parseInt($("#milspec_bs_val_st").text()) + 1);

				}
			}else{
				milspec+=1;
				var wear = getWear();
				skinval+= caseArray["milspec"][wear];
				document.getElementById("milspec_val").innerHTML = milspec;
				if(wear == "fn"){
					$("#milspec_fac_new_val").text(parseInt($("#milspec_fac_new_val").text()) + 1);
				}else if(wear == "mw"){
					$("#milspec_mw_val").text(parseInt($("#milspec_mw_val").text()) + 1);
				}else if(wear == "ft"){
					$("#milspec_ft_val").text(parseInt($("#milspec_ft_val").text()) + 1);
				}else if(wear == "ww"){
					$("#milspec_ww_val").text(parseInt($("#milspec_ww_val").text()) + 1);
				}else{
					$("#milspec_bs_val").text(parseInt($("#milspec_bs_val").text()) + 1);
				}	
			}
		}
		
		
		document.getElementById("value_val").innerHTML = "$"+skinval.toFixed(2)+" USD";
		profit = skinval - spent;
		document.getElementById("profit_val").innerHTML = "$"+profit.toFixed(2)+" USD";
		
		}
	


}

function isStatTrak(){
	
	var n = Math.floor(Math.random() * 100) + 1;
	
	if (n >=1 && n <=10){
		return 1;
	}else{
		return 0;
	}
}

function getCaseArray(case_num){

	//Hacky. Oh well. 
	switch(case_num){
		case 1:
			caseArray = huntsman;
			caseArrayST = huntsman_st;
			cval = "huntsman";
			$("#drop_text_cases").html("Huntsman Case $" + casePrice["huntsman"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 2:
			caseArray = chroma2;
			caseArrayST = chroma2_st;
			cval = "chroma2";
			$("#drop_text_cases").html("Chroma 2 Case $" + casePrice["chroma2"] + " USD <span class=\"caret\"></span></button>");

			break;
		case 3:
			caseArray = csgo1;
			caseArrayST = csgo1_st;
			cval = "csgo1";
			$("#drop_text_cases").html("CS:GO Weapons Case 1 $" + casePrice["csgo1"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 4:
			caseArray = shadow;
			caseArrayST = shadow_st;
			cval = "shadow";
			$("#drop_text_cases").html("Shadow Case $" + casePrice["shadow"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 5:
			caseArray = winter;
			caseArrayST = winter_st;
			cval = "winter";
			$("#drop_text_cases").html("Winter Offensive Case $" + casePrice["winter"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 6:
			caseArray = phoenix;
			caseArrayST = phoenix_st;
			cval = "phoenix";
			$("#drop_text_cases").html("Phoenix Case $" + casePrice["phoenix"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 7:
			caseArray = breakout;
			caseArrayST = breakout_st;
			cval = "breakout";
			$("#drop_text_cases").html("Operation Breakout Case $" + casePrice["breakout"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 8:
			caseArray = bravo;
			caseArrayST = bravo_st;
			cval = "bravo";
			$("#drop_text_cases").html("Operation Bravo Case $" + casePrice["bravo"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 9:
			caseArray = chroma;
			caseArrayST = chroma_st;
			cval = "chroma";
			$("#drop_text_cases").html("Chroma Case $" + casePrice["chroma"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 10:
			caseArray = falchion;
			caseArrayST = falchion_st;
			cval = "falchion";
			$("#drop_text_cases").html("Falchion Case $" + casePrice["falchion"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 11:
			caseArray = vanguard;
			caseArrayST = vanguard_st;
			cval = "vanguard";
			$("#drop_text_cases").html("Operation Vanguard Case $" + casePrice["vanguard"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 12:
			caseArray = eSports2013winter;
			caseArrayST = eSports2013winter_st;
			cval = "eSports2013winter";
			$("#drop_text_cases").html("eSports 2013 Winter Case $" + casePrice["eSports2013winter"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 13:
			caseArray = revolver;
			caseArrayST = revolver_st;
			cval = "revolver";
			$("#drop_text_cases").html("Revolver Case $" + casePrice["revolver"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 14:
			caseArray = wildfire;
			caseArrayST = wildfire_st;
			cval = "wildfire";
			$("#drop_text_cases").html("Wildfire Case $" + casePrice["wildfire"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 15:
			caseArray = eSports2014summer;
			caseArrayST = eSports2014summer_st;
			cval = "eSports2014summer";
			$("#drop_text_cases").html("eSports 2014 Summer Case $" + casePrice["eSports2014summer"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 16:
			caseArray = eSports2013;
			caseArrayST = eSports2013_st;
			cval = "eSports2013";
			$("#drop_text_cases").html("eSports 2013 Case $" + casePrice["eSports2013"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 17:
			caseArray = csgo2;
			caseArrayST = csgo2_st;
			cval = "csgo2";
			$("#drop_text_cases").html("CS:GO Weapons Case 2 $" + casePrice["csgo2"] + " USD <span class=\"caret\"></span></button>");
			break;
		case 18:
			caseArray = csgo3;
			caseArrayST = csgo3_st;
			cval = "csgo3";
			$("#drop_text_cases").html("CS:GO Weapons Case 3 $" + casePrice["csgo3"] + " USD <span class=\"caret\"></span></button>");
			break;
	}
	
}

function addPrices(){

	$("#huntsman_case").append(" $" + casePrice["huntsman"] + " USD");
	$("#chroma2_case").append(" $" + casePrice["chroma2"] + " USD");
	$("#csgo1_case").append(" $" + casePrice["csgo1"] + " USD");
	$("#csgo2_case").append(" $" + casePrice["csgo2"] + " USD");
	$("#csgo3_case").append(" $" + casePrice["csgo3"] + " USD");
	$("#winter_case").append(" $" + casePrice["winter"] + " USD");
	$("#shadow_case").append(" $" + casePrice["shadow"] + " USD");
	$("#phoenix_case").append(" $" + casePrice["phoenix"] + " USD");
	$("#breakout_case").append(" $" + casePrice["breakout"] + " USD");
	$("#bravo_case").append(" $" + casePrice["bravo"] + " USD");
	$("#chroma_case").append(" $" + casePrice["chroma"] + " USD");
	$("#falchion_case").append(" $" + casePrice["falchion"] + " USD");
	$("#vanguard_case").append(" $" + casePrice["vanguard"] + " USD");
	$("#eSports2013winter_case").append(" $" + casePrice["eSports2013winter"] + " USD");
	$("#revolver_case").append(" $" + casePrice["revolver"] + " USD");
	$("#eSports2013_case").append(" $" + casePrice["eSports2013"] + " USD");
	$("#wildfire_case").append(" $" + casePrice["wildfire"] + " USD");
	$("#eSports2014summer_case").append(" $" + casePrice["eSports2014summer"] + " USD");
}

function getWear(){
	var n = Math.random();
	if (n <= 0.07){
		return "fn";
	}
	if (n > 0.07 && n <= 0.15){
		return "mw";
	}
	if (n > 0.15 && n <= 0.37){
		return "ft";
	}
	if (n > 0.37 && n <= 0.44){
		return "ww";
	}
	if (n > 0.44){
		return "bs";
	}
	
	
}
