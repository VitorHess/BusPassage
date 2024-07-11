let elementTotalPurchaseValue = document.getElementById('total-purchase-value');
let selectedSeats = [];
const passageValue = 140; 

function selectSeat(seat){
  const selectedSeat = seat;
  if(selectedSeat.classList.contains("occupied")){
    return;
  }
  if(selectedSeat.classList.contains("selected")){
    selectedSeat.classList.remove("selected");
    selectedSeats = selectedSeats.filter(id => id !== selectedSeat.id);
    console.log(seat.id + " was deselected. All selected seats are: ", selectedSeats);
    totalPurchaseValue = selectedSeats.length * passageValue;
    updateViewPurchasePrice()
    return;
  } else {
    selectedSeat.classList.add("selected");
    selectedSeats.push(seat.id);
    totalPurchaseValue = selectedSeats.length * passageValue;
   console.log(seat.id, " was selected, and all selected seats are ", selectedSeats);
   updateViewPurchasePrice()
  }
}

function updateViewPurchasePrice(){
  elementTotalPurchaseValue.innerText = `US$ ${totalPurchaseValue}`;
}

function finishPurchase(){
  if(selectedSeats.length === 0){
    return;
  } else {
    for (const id of selectedSeats){
      const purchasedSeat = document.getElementById(id);
      purchasedSeat.classList.remove("selected", "hover:scale-125", "font-bold");
      purchasedSeat.classList.add("occupied", "cursor-default");
    }
  }
  selectedSeats = [];
  totalPurchaseValue = 0;
  updateViewPurchasePrice()
}