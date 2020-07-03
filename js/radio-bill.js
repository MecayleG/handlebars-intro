// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const buttonBill = ButtonBill();
const billItemTypeRadio  = document.querySelector(".billItemTypeRadio");
const radioBillBtn = document.querySelector(".radioBillAddBtn");
const callTotal2 = document.querySelector(".callTotalTwo");
const smsTotal2 = document.querySelector(".smsTotalTwo");
const total2 = document.querySelector(".totalTwo");

function radioBill(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
var buttonType = checkedRadioBtn.value;
	buttonBill.theButtonBill(buttonType);
	    var overallTotals = { 
                 calltotal: buttonBill.getCallButton(),
                 smstotal: buttonBill.getSmsButton(),
                  alltotal: buttonBill.totalForAll(),
                  colors: buttonBill.theColorChange(),

    };
    userData2.innerHTML = Template(overallTotals);
  
  
}

radioBillBtn.addEventListener('click', radioBill);