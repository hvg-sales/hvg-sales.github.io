function modifyCalculator(){
	var calculatorShowThead = false;
	var calculatorShowTbody = false;
	var calculatorsToModify = [0];
	
	var calculatorTables = document.querySelectorAll('.hvg-calculator .hvg-block table');
	calculatorTables.forEach(function(calculator,i){
	
		if(calculatorShowTbody === false){
			var tbodyToHide = calculatorTables[i].querySelector('tbody');
			if(tbodyToHide){
				tbodyToHide.style.display = "none";
				calculatorTables[i].style.marginTop = "30px";
			}
		}	
		
		if(calculatorShowThead === false){
			var theadToHide = calculatorTables[i].querySelector('thead');	
			if(theadToHide){
				theadToHide.style.display = "none";
				calculatorTables[i].style.marginTop = "30px";

			}
			
		}			
		
		replaceLabelText( calculatorTables[i].querySelector('tfoot'),[0,1]);
	});
}

document.addEventListener("DOMContentLoaded", function(event) {
	if(screen.width <=  451) {
		modifyCalculator();
	}
	window.onresize = function() {
		console.log(screen.width);
		if(screen.width <= 451) {
			modifyCalculator();
		}
	};
});