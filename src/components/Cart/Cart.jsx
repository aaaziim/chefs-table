import React from 'react';
import CartProcessing from './CartProcessing';

const Cart = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-2 pb-2 border-b-2">Want to Cook: 01</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100 text-center">
                        <td className="px-4 py-2 rounded-l-xl">1</td>
                        <td className="px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="px-4 py-2">Malcolm Lockyer</td>
                        <td className="px-4 py-2">1961</td>
                        <td className="px-4 py-2 rounded-r-xl">
                            <button className="px-3 py-2 bg-[#0BE58A] rounded-lg my-4">Preparing</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <CartProcessing></CartProcessing>
        </div>
    );
};

export default Cart;