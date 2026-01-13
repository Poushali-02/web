import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from '../items/menu';

function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState('Chinese');
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: ''
  });

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    setCart(cart.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName, change) => {
    setCart(cart.map(item => {
      if (item.name === itemName) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Please add items to your cart before placing an order.');
      return;
    }
    
    // Create order summary
    const orderSummary = {
      customer: customerInfo,
      items: cart,
      total: calculateTotal(),
      timestamp: new Date().toISOString()
    };
    
    console.log('Order placed:', orderSummary);
    alert('Order placed successfully! We will contact you shortly.');
    
    // Reset form
    setCart([]);
    setCustomerInfo({ name: '', phone: '', address: '', instructions: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-yellow-500/20 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-amber-50">
            Little <span className="text-yellow-500">Darjeeling</span>
          </h1>
          <div className="text-amber-50 font-semibold">
            Cart: <span className="text-yellow-500">{cart.length}</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-50 mb-4">
                Order <span className="text-yellow-500">Online</span>
              </h2>
              <p className="text-slate-300">Select your favorite dishes and place your order</p>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-4 overflow-x-auto pb-4 border-b border-yellow-500/20">
              {Object.keys(menuData).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-slate-950'
                      : 'bg-slate-900/50 text-amber-50 hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              {menuData[selectedCategory]?.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  {section.subsection && (
                    <h3 className="text-yellow-500 font-semibold text-xl mb-4 border-b border-yellow-500/20 pb-2">
                      {section.subsection}
                    </h3>
                  )}
                  <div className="grid gap-4">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="bg-slate-900/50 p-4 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h4 className="text-amber-50 font-semibold text-lg mb-1">{item.name}</h4>
                            {item.description && (
                              <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                            )}
                            <p className="text-yellow-500 font-bold">₹{item.price}</p>
                          </div>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-yellow-500 text-slate-950 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 whitespace-nowrap"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart & Checkout Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Cart */}
              <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-500/20">
                <h3 className="text-yellow-500 font-semibold text-2xl mb-4 border-b border-yellow-500/20 pb-2">
                  Your Cart
                </h3>
                
                {cart.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-2 pb-4 border-b border-yellow-500/10">
                        <div className="flex-1">
                          <p className="text-amber-50 font-semibold">{item.name}</p>
                          <p className="text-yellow-500 text-sm">₹{item.price} × {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.name, -1)}
                            className="w-6 h-6 rounded bg-slate-800 text-amber-50 hover:bg-slate-700 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-amber-50 w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, 1)}
                            className="w-6 h-6 rounded bg-slate-800 text-amber-50 hover:bg-slate-700 flex items-center justify-center"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="ml-2 text-red-400 hover:text-red-300"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t border-yellow-500/20">
                      <div className="flex justify-between text-xl font-bold">
                        <span className="text-amber-50">Total:</span>
                        <span className="text-yellow-500">₹{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Customer Info Form */}
              {cart.length > 0 && (
                <form onSubmit={handleSubmitOrder} className="bg-slate-900/50 p-6 rounded-lg border border-yellow-500/20 space-y-4">
                  <h3 className="text-yellow-500 font-semibold text-xl mb-4">Delivery Details</h3>
                  
                  <div>
                    <label className="block text-amber-50 mb-2 text-sm">Name *</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 text-amber-50 rounded-lg border border-yellow-500/20 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-50 mb-2 text-sm">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 text-amber-50 rounded-lg border border-yellow-500/20 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-50 mb-2 text-sm">Delivery Address *</label>
                    <textarea
                      required
                      rows={3}
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 text-amber-50 rounded-lg border border-yellow-500/20 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-50 mb-2 text-sm">Special Instructions</label>
                    <textarea
                      rows={2}
                      value={customerInfo.instructions}
                      onChange={(e) => setCustomerInfo({...customerInfo, instructions: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-800 text-amber-50 rounded-lg border border-yellow-500/20 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-slate-950 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300"
                  >
                    Place Order
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
