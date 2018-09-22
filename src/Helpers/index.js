function formattCentsToDollars(cents){
	var dollars = cents / 100;
	var formattedDollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"})

	return formattedDollars
}


function checkIfDateIsInThePast(date){
   var selectedDate = new Date(date);
   var now = new Date();
   if (selectedDate < now) {
   	  return true
   } 
   return false
}


export {formattCentsToDollars, checkIfDateIsInThePast}