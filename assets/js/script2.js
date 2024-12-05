// Assuming the cart is stored in the `cart` array from earlier
const cart = [
    { id: 'item-1', name: 'Garlic & Herb Focaccia', price: 12.0 },
    { id: 'item-2', name: 'Duo of Dips', price: 14.0 },
  ]; // Example cart data
  
  // Populate Cart Items in Checkout Page
  function populateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let total = 0;
  
    cartItemsContainer.innerHTML = ''; // Clear any existing items
  
    cart.forEach((item, index) => {
      total += item.price;
  
      const listItem = document.createElement('li');
      listItem.className =
        'list-group-item d-flex justify-content-between align-items-center';
      listItem.innerHTML = `
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
      `;
  
      cartItemsContainer.appendChild(listItem);
    });
  
    // Update total
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  }
  
  // Call the populateCart function on page load
  document.addEventListener('DOMContentLoaded', populateCart);
  
  // Handle Form Submission
  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
  
    alert(`Thank you for your order, ${name}!`);
    console.log({ name, email, address, cart });
  });
  