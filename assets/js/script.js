
// Initialize Cart
const cart = [];

// Add to Cart Function
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const item = JSON.parse(this.getAttribute('data-item'));
    cart.push(item);
    alert(`${item.name} has been added to your cart!`);
    console.log('Current Cart:', cart); // Log cart in the console
  });
});



