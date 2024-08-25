// document.addEventListener('DOMContentLoaded', function () {
//     const productData = {
//       baskets: { price: 100, quantity: 0,},
//       socks: { price: 20, quantity: 0,},
//       bag: { price: 50, quantity: 0,},
//     };
  
//     // Helper function to update the total price
//     function updateTotalPrice() {
//       const totalElement = document.querySelector('.total');
//       const totalPrice = Object.values(productData).reduce(
//         (acc, product) => acc + product.price * product.quantity,
//         0
//       );
//       totalElement.textContent = `${totalPrice} $`;
//     }
  
//     // Event listener for plus/minus icons
//     document.querySelectorAll('.add_qty, .rmv_qty').forEach((button) => {
//       button.addEventListener('click', function () {
//         const productKey = this.getAttribute('data-product');
//         if (this.classList.contains('add_qty')) {
//           productData[productKey].quantity++;
//         } else if (this.classList.contains('rmv_qty') && productData[productKey].quantity > 0) {
//           productData[productKey].quantity--;
//         }
//         document.querySelector(`.quantity_${productKey}`).textContent = productData[productKey].quantity;
//         updateTotalPrice();
//       });
//     });
  
//     // Event listener for deleting items
//     document.querySelectorAll('.fa-trash-alt').forEach((trashIcon, index) => {
//       trashIcon.addEventListener('click', function () {
//         const card = trashIcon.closest('.card-body');
//         const productKey = Object.keys(productData)[index];
//         delete productData[productKey];
//         card.remove();
//         updateTotalPrice();
//       });
//     });
  
//     // Event listener for liking items (heart icon color change)
//     document.querySelectorAll('.fa-heart').forEach((heartIcon) => {
//       heartIcon.addEventListener('click', function () {
//         if (heartIcon.style.color === 'red') {
//           heartIcon.style.color = 'black';
//         } else {
//           heartIcon.style.color = 'red';
//         }
//       });
//     });
//   });

document.addEventListener('DOMContentLoaded', function () {
    const productData = {
      baskets: { price: 100, quantity: 0 },
      socks: { price: 20, quantity: 0 },
      bag: { price: 50, quantity: 0 }
    };
  
    // Helper function to update the total price
    function updateTotalPrice() {
      const totalElement = document.querySelector('.total');
      const totalPrice = Object.values(productData).reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      totalElement.textContent = `${totalPrice} $`;
    }
  
    // Event listener for plus/minus icons
    document.querySelectorAll('.add_qty, .rmv_qty').forEach((button) => {
      button.addEventListener('click', function () {
        const productKey = this.getAttribute('data-product');
        if (this.classList.contains('add_qty')) {
          productData[productKey].quantity++;
        } else if (this.classList.contains('rmv_qty') && productData[productKey].quantity > 0) {
          productData[productKey].quantity--;
        }
        document.querySelector(`.quantity_${productKey}`).textContent = productData[productKey].quantity;
        updateTotalPrice();
      });
    });
  
    // Event listener for deleting items
    document.querySelectorAll('.fa-trash-alt').forEach((trashIcon, index) => {
      trashIcon.addEventListener('click', function () {
        const card = trashIcon.closest('.card-body');
        const productKey = Object.keys(productData)[index];
        // Set the quantity to 0 instead of deleting the product
        productData[productKey].quantity = 0;
        card.remove();
        updateTotalPrice();
      });
    });
  
    // Event listener for liking items (heart icon color change)
    document.querySelectorAll('.fa-heart').forEach((heartIcon) => {
      heartIcon.addEventListener('click', function () {
        if (heartIcon.style.color === 'red') {
          heartIcon.style.color = 'black';
        } else {
          heartIcon.style.color = 'red';
        }
      });
    });
  });