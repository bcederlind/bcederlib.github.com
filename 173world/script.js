var data;
const cname = new Array(); // Country Name
const cavgdebtbal = new Array();  // Average Country Debt Balance
const cavgrsvtotalpct = new Array(); // Average Country Debt Reserve Percent USD
const svgpaths = document.getElementsByTagName("path");
function init() {
	
	
	d3.csv("worldbankcountrydebt.csv").then(function (data) {
	
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
	document.getElementById("aArgentina").addEventListener('click', function() {
		doStuff("Argentina")});
		
	document.getElementById("aAustrialia").addEventListener('click', function() {
		doStuff("Austrialia")});	
		
	document.getElementById("aCanada").addEventListener('click', function() {
		doStuff("Canada")});			
}
window.onload = init;

function doStuff(x) {
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
	
	//embed vegalite dot plot comparing tested value against other countries
	
	
}
