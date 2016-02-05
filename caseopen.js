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
  

function startPause(){

	if (running == 0){
		running =1;
		increment();
		document.getElementById("start").innerHTML = "Pause";
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
	

	document.getElementById("start").innerHTML = "Start";


}

function increment(){
	
	if (running == 1){
	
		setTimeout(function(){
			openCase();
			increment();
		


		},100)
	
	}


}

function openCase(){

	if(running == 1){
	
		casesOpened+=1;
		document.getElementById("opened_val").innerHTML = casesOpened;
		
		spent+=2.50;
		cval =$('input[name="cases"]:checked').val();
		if(cval == "huntsman"){
			spent += casePrice["huntsman"];
		}else if(cval == "chroma2"){
			spent += casePrice["chroma2"];
		}else if(cval == "csgo1"){
			spent += casePrice["csgo1"];
		}else if(cval == "shadow"){
			spent += casePrice["shadow"];
		}else if(cval == "winter"){
			spent += casePrice["winter"];
		}
		document.getElementById("spent_val").innerHTML = "$"+spent.toFixed(2)+" USD";
		
		var openedVal = 0;
		
		var prob = Math.floor(Math.random() * 10001) + 1;
		
		//knife
		if (prob >=1 && prob <=21){
			var s = isStatTrak();
			if (s == 1){
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

function getCaseArray(){
	cval =$('input[name="cases"]:checked').val();
	
	if (cval=="huntsman"){
		caseArray = huntsman;
		caseArrayST = huntsman_st;
		
	}
	
	if (cval=="chroma2"){
		caseArray = chroma2;
		caseArrayST = chroma2_st;
	}
	
	if (cval=="csgo1"){
		caseArray = csgo1;
		caseArrayST = csgo1_st;
	}

	if (cval=="shadow"){
		caseArray = shadow;
		caseArrayST = shadow_st;
	}

	if (cval=="winter"){
		caseArray = winter;
		caseArrayST = winter_st;
	}
	
}

function addPrices(){
	var chroma2_label = $("#chroma2").next();
	chroma2_label.append(" $" + casePrice["chroma2"] + " USD");

	var huntsman_label = $("#huntsman").next();
	huntsman_label.append(" $" + casePrice["huntsman"] + " USD");

	var csgo1_label = $("#csgo1").next();
	csgo1_label.append(" $" + casePrice["csgo1"] + " USD");

	var shadow_label = $("#shadow").next();
	shadow_label.append(" $" + casePrice["shadow"] + " USD");

	var winter_label = $("#winter").next();
	winter_label.append(" $" + casePrice["winter"] + " USD");
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
