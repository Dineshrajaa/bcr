$(document).ready(function(){

	document.addEventListener('deviceready',function(){
		$("#scanbtn").click(startScan);
			
		function startScan(){
			cordova.plugins.barcodeScanner.scan(onScan,onErrors);
		}
		function onScan(results){
			navigator.notification.alert(results.text,alertClosed,results.format,'ok');			
		}
		function onErrors(error){
			alert("Scanning Failed: "+error);		
					 		}
		function alertClosed(){			
			alert("Thanks for using BCR");
		}
	});
});