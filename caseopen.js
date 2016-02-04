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
var caseArray = huntsman;
var caseArrayST = huntsman_st;
  

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
				
			}else{
				knife+=1;
				var wear = getWear();
				skinval+= caseArray["knife"][wear];
				document.getElementById("knife_val").innerHTML = knife;
				
			}
			
			
		//covert	
		}else if (prob >=22 && prob <=79){
			var s = isStatTrak();
			if (s == 1){
				covert_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["covert"][wear];
				document.getElementById("covert_stat_val").innerHTML = covert_stat;
			}else{
				covert+=1;
				var wear = getWear();
				skinval+= caseArray["covert"][wear];
				document.getElementById("covert_val").innerHTML = covert;
				
			}
			
		//classified	
		}else if (prob >=80 && prob <=395){
			var s = isStatTrak();
			if (s == 1){
				classified_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["classified"][wear];
				document.getElementById("classified_stat_val").innerHTML = classified_stat;
			}else{
				classified+=1;
				var wear = getWear();
				skinval+= caseArray["classified"][wear];
				document.getElementById("classified_val").innerHTML = classified;
				
			}
			
		//restricted
		}else if (prob >=396 && prob <=2021){
			var s = isStatTrak();
			if (s == 1){
				restricted_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["restricted"][wear]
				document.getElementById("restricted_stat_val").innerHTML = restricted_stat;
			}else{
				restricted+=1;
				var wear = getWear();
				skinval+= caseArray["restricted"][wear];
				document.getElementById("restricted_val").innerHTML = restricted;
				
			}
		
		//mil-spec
		}else{
			var s = isStatTrak();
			if (s == 1){
				milspec_stat+=1;
				var wear = getWear();
				skinval+= caseArrayST["milspec"][wear];
				document.getElementById("milspec_stat_val").innerHTML = milspec_stat;
			}else{
				milspec+=1;
				var wear = getWear();
				skinval+= caseArray["milspec"][wear];
				document.getElementById("milspec_val").innerHTML = milspec;
				
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
	
}

function getWear(){
	var n = Math.floor(Math.random() * 5) + 1;
	if (n==1){
		return "fn";
	}
	if (n==2){
		return "mw";
	}
	if (n==3){
		return "ft";
	}
	if (n==4){
		return "ww";
	}
	if (n==5){
		return "bs";
	}
	
	
}
