/*###############VEGAIMAGESCRIPT#########
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart that directly encodes color names in the data.",
  "width": 500,
  "height": 300,
  "padding": 5,
  "data": {
    "values": [
      {
        "name": "Argentina",
        "tdebtusd":-3997018054.51692,
        "color": "blue"
      },
      {
        "name": "Australia",
        "tdebtusd":8033400362.83176,
        "color": "green"
      },
      {
        "name": "Canada",
        "tdebtusd":-35688200343.4011,
        "color": "blue"
      },      
      {
        "name": "Germany",
        "tdebtusd":289603130720.076,
        "color": "blue"
      },      
      {
        "name": "Italy",
        "tdebtusd":13135100000,
        "color": "blue"
      },      
      {
        "name": "Japan",
        "tdebtusd":176811231596.871,
        "color": "blue"
      },      
      {
        "name": "Mexico",
        "tdebtusd":-4238330801.00005,
        "color": "blue"
      },      
      {
        "name": "Sweden",
        "tdebtusd":27162464174.519,
        "color": "blue"
      },      
      {
        "name": "Uganda",
        "tdebtusd":-2332588662.39041,
        "color": "blue"
      },      

      {
        "name": "Ukraine",
        "tdebtusd":-4124000000,
        "color": "blue"
      }  
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "name",
      "title": "COUNTRY NAMES",
      "type": "nominal"
    },
    "y": {
      "field": "tdebtusd",
      "title" : "Total Debt USD (2019)",
      "type": "quantitative"
    },
    "color": {
      "field": "color",
      "type": "nominal",
      "scale": null
    }
  }
}

################################/*###############VEGAIMAGESCRIPT#########

2

{

3

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

4

  "description": "A bar chart that directly encodes color names in the data.",

5

  "width": 500,

6

  "height": 300,

7

  "padding": 5,

8

  "data": {

9

    "values": [

10

      {

11

        "name": "Argentina",

12

        "tdebtusd":-3997018054.51692,###*/
var data;
const cname = new Array(); // Country Name
const cavgdebtbal = new Array();  // Average Country Debt Balance
const cavgrsvtotalpct = new Array(); // Average Country Debt Reserve Percent USD
const svgpaths = document.getElementsByTagName("path");
function init() {
	
	
	d3.csv("https://bcederlind.github.io/bcederlib.github.com/173world/worldbankcountrydebt.csv").then(function (data) {
	
		data.forEach(function(d) {
			cname.push(d.CountryName);
			cavgdebtbal.push(d.avgvalcuractbalusd);
			cavgrsvtotalpct.push(d.avgvalrsvtotalpercentusd);
			d.avgvalcuractbalusd = +d.avgvalcuractbalus;
			d.avgvalrsvtotalpercentusd = +d.avgvalrsvtotalpercentusd;
			//console.log(d.avgvalcuractbalusd);
		});
		//console.log(data[0]);
	});

	/*for(var i = 0; i < svgpaths.length; i++) {
		var tmp = svgpaths[i].className.baseVal;
		svgpaths[i].addEventListener('click', function(tmp) {
			doStuff(document.getElementByClassName();
		});
	}*/
	
	// Supposed to be an embedded vega here but no time maybe in future
	document.getElementById("aArgentina").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_argentina.png";
		doStuff("Argentina","img/vega_argentina.png")});
		
	document.getElementById("aAustralia").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_australia.png";
		doStuff("Australia","img/vega_australia.png")});	
		
	document.getElementById("aCanada").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Canada","img/vega_canada.png")});			
	document.getElementById("aGermany").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Germany","img/vega_germany.png")});			
	document.getElementById("aItaly").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Italy","img/vega_italy.png")});			
	document.getElementById("aJapan").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Japan","img/vega_japan.png")});			
	document.getElementById("aMexico").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Mexico","img/vega_mexico.png")});			
	document.getElementById("aSweden").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Sweden","img/vega_sweden.png")});			
	document.getElementById("aUganda").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Uganda","img/vega_uganda.png")});			
	document.getElementById("aUkraine").addEventListener('click', function() {
		//document.getElementById("countryimage").src="img/vega_canada.png";
		doStuff("Ukraine","img/vega_ukraine.png")});			



	document.getElementById("countryimage").addEventListener('click', function() {
		hidegraph()});

}
window.onload = init;

function doStuff(x,y) {
	//console.log(x.className);
	var str = x;	
	var idx;
	for( l = 0; l<cname.length; l++) {
		if(cname[l] == x)
		{
			idx = l;
		}
		
	}
	let tmp = str.concat(" INDEX AT ").concat(idx)
		.concat(" AVG DEBT TOTAL USD ").concat(cavgdebtbal[idx])
		.concat(" AVG DEBT RESERV TOTAL PCT USD ").concat(cavgrsvtotalpct[idx]);
				
	str.concat(idx);
	str.concat(" ");
	document.getElementById("overlay").innerHTML = tmp;
 
	if(x == "Australia")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_australia.png";		
	}

	if(x == "Argentina")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_argentina.png";		
	}
	
	if(x == "Canada")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_canada.png";		
	}

	if(x == "Germany")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_germany.png";		
	}
	
	if(x == "Italy")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_italy.png";		
	}
	if(x == "Japan")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_japan.png";		
	}
	if(x == "Mexico")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_mexico.png";		
	}
	if(x == "Sweden")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_sweden.png";		
	}
	if(x == "Uganda")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_uganda.png";		
	}
	if(x == "Ukraine")
	{
		document.getElementById("countryimage").display = "block";
		document.getElementById("countryimage").src = "img/vega_ukraine.png";		
	}


	//embed vegalite dot plot comparing tested value against other countries
	
	
}

function hidegraph() {
	document.getElementById("countryimage").src = "";
}
