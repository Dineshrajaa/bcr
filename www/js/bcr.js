$(document).ready(function(){

	document.addEventListener('deviceready',function(){
		$("#scanbtn").click(startScan);
			
		function startScan(){
			cordova.plugins.barcodeScanner.scan(onScan,onErrors);
		}
		function onScan(results){
			var op="Content: "+results.text+"<br />"+
			"Format: "+results.format;
			$("#outputdiv").html(op);
		}
		function onErrors(error){
			alert("Scanning Failed: "+error);
			var fop="Content: Not Found<br />
					 Format: Unable to detect"
					 $("#outputdiv").html(fop);
		}
	});
});