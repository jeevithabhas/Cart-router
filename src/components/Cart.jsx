const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = total * 0.10; 
  const finalTotal = total - discount;

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl underline font-bold mb-4 sm:mb-6 mt-4 font-serif text-center">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl sm:text-2xl text-orange-400 text-center"> Your cart is empty.😔</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center border-b p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain mb-2 sm:mb-0 sm:mr-4"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl text-orange-500 italic font-sans font-semibold">{item.title}</h2>
                  <p className="text-lg sm:text-xl text-red-800 font-sans">Price per Product: ₹ {(item.price * 82).toFixed(0)} </p>
                  <p>Total for this Product: ₹ {(item.price * item.quantity * 82).toFixed(0)} </p>
                </div>
              </div>
              <div className="flex flex-row sm:flex-row items-center justify-center sm:justify-end gap-4">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="px-4 font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-gray-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold border-b-2 mb-4 p-2 sm:p-4">Price Details:</h2>
            <div className="flex justify-between mt-1">
              <span className="text-lg sm:text-xl font-normal">Subtotal MRP:</span>
              <span className="text-lg sm:text-xl font-semibold">₹ {(total * 82).toFixed(0)} </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-lg sm:text-xl font-normal">Discount on MRP (10%):</span>
              <span className="text-lg sm:text-xl font-semibold text-green-400">-₹ {(discount * 82).toFixed(0)} </span>
            </div>
            <div className="flex justify-between mt-4 border-t-2 p-1">
              <span className="text-lg sm:text-xl font-semibold">Total Amount:</span>
              <span className="text-lg sm:text-xl font-semibold hover:text-green-500">₹ {(finalTotal * 82).toFixed(0)} </span>
            </div>
          </div>

          <div className="mt-6 flex justify-center sm:justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
