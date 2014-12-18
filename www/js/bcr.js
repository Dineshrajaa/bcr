$(document).ready(function(){

	document.addEventListener('deviceready',function(){
		$("#scanbtn").tap(startScan);//Calls startScan method when scan button tapped
			
		function startScan(){
			cordova.plugins.barcodeScanner.scan(onScan,onErrors);//Opens  the Camera to scan the CODE and display the 
		}
		function onScan(results){
			navigator.notification.alert(results.text,alertClosed,results.format,'ok');//Displays an Custom alertbox			
		}
		function onErrors(error){
			toastAlert("Scanning Failed: "+error);		
					 		}//Called when the Barcode scanner is not properly Functioning
		function alertClosed(){			
			toastAlert("Thanks for using BCR");
		}
		//Used to create Toast Alerts
		function toastAlert(data){
			window.plugins.toast.showLongCenter(data);
		}
	});
});