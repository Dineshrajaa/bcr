$(document).ready(function(){

	document.addEventListener('deviceready',function(){
		$("#scanbtn").click(startScan);
			
		function startScan(){
			cordova.plugins.barcodeScanner.scan(onScan,onErrors);
		}
		function onScan(results){
			var op="Content: "+results.text+"<br />"+
			"Format: "+results.format+"<br />"
			$("#outputdiv").html(op);
		}
		function onErrors(error){
			alert("Scanning Failed: "+error);
		}
	});
});