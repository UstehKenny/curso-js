function viewBits(){
    document.getElementById('close-div-01').style.display = 'block';
    document.getElementsByClassName('bits-header')[0].style.display = 'flex';
    document.getElementsByClassName('bits-cheeremotes')[0].style.display = 'flex';
    document.getElementsByClassName('bits-footer')[0].style.display = 'flex';
}

function closeBits01(){
    document.getElementById('close-div-01').style.display = 'none';
    document.getElementsByClassName('bits-header')[0].style.display = 'none';
    document.getElementsByClassName('bits-cheeremotes')[0].style.display = 'none';
    document.getElementsByClassName('bits-footer')[0].style.display = 'none';
}

function bitsPrices(){
    closeBits01();
    document.getElementById('close-div-02').style.display = 'block';
    document.getElementsByClassName('buy-header')[0].style.display = 'flex';
    document.getElementsByClassName('bits-prices')[0].style.display = 'flex';
}

function closeBits02(){
    document.getElementById('close-div-02').style.display = 'none';
    document.getElementsByClassName('buy-header')[0].style.display = 'none';
    document.getElementsByClassName('bits-prices')[0].style.display = 'none';
    viewBits();
}




document.getElementById('bits-button').addEventListener("click", viewBits);
document.getElementById('close-01').addEventListener("click", closeBits01);
document.getElementById('buy').addEventListener("click", bitsPrices);
document.getElementById('close-02').addEventListener("click", closeBits02);

const buyButtons = document.querySelectorAll(".buy-button");
const totalSpan = document.getElementById("bits");
let totalBits = 0;
let total = 0;
let cantidad = 1;

buyButtons.forEach(button => {
    const cost = parseFloat(button.getAttribute("data-cost"));
    const bits = parseInt(button.getAttribute("data-bits"));
    button.addEventListener("click", () => {
        // cantidad = document.getElementById('quantity').value;
        total += cost*cantidad;
        totalBits += bits;
        totalSpan.textContent = totalBits;
    });
});
//.............
// const buyButtons = document.querySelectorAll(".buy-button");
// const totalCostSpan = document.getElementById("total-cost");
// const totalBitsSpan = document.getElementById("total");
// const confirmButton = document.querySelector(".bits-confirm");
// const quantityInput = document.getElementById("quantity");
// const bits = document.getElementById("bits");

// let totalBits = 0;
// let total = 0;

// buyButtons.forEach(button => {
    
//   const cost = parseFloat(button.getAttribute("data-cost"));
//   const bits = parseInt(button.getAttribute("data-bits"));
  
//   button.addEventListener("click", () => {
//     document.getElementsByClassName('bits-cost')[0].style.display = flex;
//     // const cantidad = parseInt(quantityInput.value);
//     // total += cost * cantidad;
//     // totalBits += bits * cantidad;
//     // totalCostSpan.textContent = total.toFixed(2);
//     // totalBitsSpan.textContent = totalBits;
//   });
// });

// confirmButton.addEventListener("click", () => {
//   bits.textContent = totalBits;
// });
