const all_btn=document.getElementsByClassName('add-btn');

for(const btn of all_btn){
  btn.addEventListener('click',function(event){
    const seat_name=btn.innerText;
    const price=550;
    const economy='Economoy';
    event.target.setAttribute("disabled", false);
   



const selected_seat=document.getElementById('select_seat');
const div=document.createElement('div')
div.classList.add("selected-players");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
p1.innerText = seat_name;
p2.innerText = economy;
p3.innerText = price;
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
selected_seat.appendChild(div)
countPlus();
totalCost();
grandTotal()
  })

  
  
}


// update seat count
function countPlus(){
  const count=document.getElementById('seatCount').innerText;
  const countParseInt=parseInt(count);
  document.getElementById('seatCount').innerText=countParseInt + 1;
}

// total cost
function totalCost(){
  const totalPrice=document.getElementById('total_cost').innerText;
  const total=parseInt(totalPrice);
  document.getElementById('total_cost').innerText=total+parseInt(550);

}


// grand_total

function grandTotal(){
  const grantotalPrice=document.getElementById('grand_total').innerText;
  const discountButton=document.getElementById('copuponApply');
  const grandtotal=parseInt(grantotalPrice);
  document.getElementById('grand_total').innerText= grandtotal+parseInt(550);
}
function applyDiscount() {
  const discountCode = document.getElementById("discount-code").value;

  // Apply discount based on code
  let discount = 0;
  if (discountCode === "NEW15") {
      discount = 0.15;
  } else if (discountCode === "Couple 20") {
      discount = 0.20;
  } else {
      console.log("Invalid discount code");
      return;
  }
const totalPrice =document.getElementById('total_cost').innerText;
  // Calculate discounted price
  const discountedPrice = totalPrice * (1 - discount);

  // Update total price
  const totalPriceElement = document.getElementById("grand_total");
  totalPriceElement.textContent = discountedPrice.toFixed(2);
}


function submitForm() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  my_modal_5.showModal()
  // Here you can perform actions with the form data, like sending it to a server or processing it further
 console.log({
  name,number,email
 });
}





