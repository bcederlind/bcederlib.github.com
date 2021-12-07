function alerthw() {
  alert("Hello,world");
  var z = document.getElementById("tfield").value;
  var z2 = z.replace(".","moo.");
  
	var j = z2.toUpperCase();
	document.getElementById("tfield").value = j;
}

function mooFunc() {
  alert("Hello,world");
  document.getElementById("tfield").style.fontSize = "24pt";
}

function radFunc() {
	var x = document.getElementById("r1").checked;
	var y = document.getElementById("r2").checked;

	if(x)
	{
		alert();
		document.getElementById("r1").checked = false;
		document.getElementById("tfield").style.fontWeight = "bold";		
		document.getElementById("tfield").style.color = "blue";		
		document.getElementById("tfield").style.textDecoration = "underline";		
		
	}
	if(y)
	{
		alert();
		document.getElementById("r2").checked = false;
		document.getElementById("tfield").style.fontWeight = "normal";		
		document.getElementById("tfield").style.color = "black";		
		document.getElementById("tfield").style.textDecoration = "none";		
		
	}
}

