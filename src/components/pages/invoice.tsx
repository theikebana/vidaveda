import React from 'react';

const InvoicePage = () => {
  const data = {
    customer: {
      name: "William Henry",
      email: "williamhenry@gmail.com",
      mobile: "8989898989",
      address: "Arkansas City, KS 67005"
    },
    order: {
      product: "Turmeric Complex",
      id: "G4646464",
      date: "02 Jan 2026",
      quantity: 1,
      size: "1 FL OZ",
      subtotal: 300.00,
      taxes: 15.00,
      total: 315.00,
      card: "XXXXXXXX7896"
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 p-4 md:p-8">
      {/* Container */}
      <div className="max-w-4xl mx-auto border border-gray-100 shadow-sm rounded-lg overflow-hidden">
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center py-12">
           <div className="mb-2">
              {/* Placeholder for SVG Logo */}
              <div className="w-16 h-16 border-2 border-green-900 rounded-full flex items-center justify-center">
                <span className="text-green-900 text-xs text-center font-serif">LOGO</span>
              </div>
           </div>
           <h1 className="text-4xl font-serif text-[#1a3321] font-medium">VedaVida</h1>
        </div>

        {/* Info Section */}
        <div className="px-8 mb-10">
          <h2 className="text-lg font-bold mb-2">Invoice To:</h2>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Name –</span> {data.customer.name}</p>
            <p><span className="font-medium">Email ID –</span> {data.customer.email}</p>
            <p><span className="font-medium">Mobile No. –</span> {data.customer.mobile}</p>
          </div>
          
          <div className="mt-8">
            <p className="text-sm">
              <span className="font-bold">Delivery Address:</span> {data.customer.address}
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="px-8 overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="text-slate-500 text-sm border-b border-gray-200">
                <th className="py-3 px-4 font-normal">Product</th>
                <th className="py-3 px-4 font-normal">Order ID</th>
                <th className="py-3 px-4 font-normal">Order On</th>
                <th className="py-3 px-4 font-normal">Quantity</th>
                <th className="py-3 px-4 font-normal">Size</th>
                <th className="py-3 px-4 font-normal text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm border-b border-gray-100">
                <td className="py-4 px-4">{data.order.product}</td>
                <td className="py-4 px-4">{data.order.id}</td>
                <td className="py-4 px-4">{data.order.date}</td>
                <td className="py-4 px-4">{data.order.quantity}</td>
                <td className="py-4 px-4">{data.order.size}</td>
                <td className="py-4 px-4 text-right font-medium">{data.order.subtotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="px-8 mt-6 flex justify-end">
          <div className="w-full max-w-xs bg-slate-50 p-6 rounded-lg">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Amount:</span>
                <span>{data.order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>{data.order.taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t border-gray-200 pt-3">
                <span>Total Amount :</span>
                <span>{data.order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Status */}
        <div className="px-8 mt-4 flex flex-col items-end">
            <p className="text-xs text-slate-500 mb-1">Card – {data.order.card}</p>
            <span className="text-green-500 font-medium">Paid</span>
        </div>

        {/* Footer */}
        <footer className="mt-20 pb-8 text-center">
          <p className="text-sm text-slate-600 mb-8">For any questions please contact us at</p>
          <div className="bg-[#1a3321] text-[#d4af37] py-6 px-4">
            <h3 className="font-bold mb-2">VedaVida</h3>
            <p className="text-xs opacity-90">
              Arkansas City, KS 67005 | help@VedaVida | +64 123 1234 123
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InvoicePage;