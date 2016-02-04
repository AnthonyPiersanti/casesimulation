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

var chroma2 = new Array();
chroma2["co"] = 14.77;
chroma2["cl"] = 2.37;
chroma2["r"] = 0.55;
chroma2["m"] = 0.19;
chroma2["co_s"] = 70.10;
chroma2["cl_s"] = 9.79;
chroma2["r_s"] = 2.72;
chroma2["m_s"] = 1.26;
chroma2["k"] = 150;
chroma2["k_s"] = 250;
  

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
	document.getElementById("spent_val").innerHTML = 0;
	skinval = 0;
	document.getElementById("value_val").innerHTML = 0;
	profit = 0;
	document.getElementById("profit_val").innerHTML = 0;
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
	
	casesOpened+=1;
	document.getElementById("opened_val").innerHTML = casesOpened;
	
	spent+=2.50;
	document.getElementById("spent_val").innerHTML = "$"+spent+" USD";
	
	var openedVal = 0;
	
	var prob = Math.floor(Math.random() * 10001) + 1;
	
	//knife
	if (prob >=1 && prob <=21){
		var s = isStatTrak();
		if (s == 1){
			knife_stat+=1;
			skinval+= chroma2["k_s"];
			document.getElementById("knife_stat_val").innerHTML = knife_stat;
			
		}else{
			knife+=1;
			skinval+= chroma2["k"];
			document.getElementById("knife_val").innerHTML = knife;
			
		}
		
		
	//covert	
	}else if (prob >=22 && prob <=79){
		var s = isStatTrak();
		if (s == 1){
			covert_stat+=1;
			skinval+= chroma2["co_s"];
			document.getElementById("covert_stat_val").innerHTML = covert_stat;
		}else{
			covert+=1;
			skinval+= chroma2["co"];
			document.getElementById("covert_val").innerHTML = covert;
			
		}
		
	//classified	
	}else if (prob >=80 && prob <=395){
		var s = isStatTrak();
		if (s == 1){
			classified_stat+=1;
			skinval+= chroma2["cl_s"];
			document.getElementById("classified_stat_val").innerHTML = classified_stat;
		}else{
			classified+=1;
			skinval+= chroma2["cl"];
			document.getElementById("classified_val").innerHTML = classified;
			
		}
		
	//restricted
	}else if (prob >=396 && prob <=2021){
		var s = isStatTrak();
		if (s == 1){
			restricted_stat+=1;
			skinval+= chroma2["r_s"];
			document.getElementById("restricted_stat_val").innerHTML = restricted_stat;
		}else{
			restricted+=1;
			skinval+= chroma2["r"];
			document.getElementById("restricted_val").innerHTML = restricted;
			
		}
	
	//mil-spec
	}else{
		var s = isStatTrak();
		if (s == 1){
			milspec_stat+=1;
			skinval+= chroma2["m_s"];
			document.getElementById("milspec_stat_val").innerHTML = milspec_stat;
		}else{
			milspec+=1;
			skinval+= chroma2["m"];
			document.getElementById("milspec_val").innerHTML = milspec;
			
		}
	}
	
	
	document.getElementById("value_val").innerHTML = "$"+skinval.toFixed(2)+" USD";
	profit = skinval - spent;
	document.getElementById("profit_val").innerHTML = "$"+profit.toFixed(2)+" USD";
	
			
	


}

function isStatTrak(){
	
	var n = Math.floor(Math.random() * 100) + 1;
	
	if (n >=1 && n <=10){
		return 1;
	}else{
		return 0;
	}
}
