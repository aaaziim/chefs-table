import React from 'react';
import CartProcessing from './CartProcessing';

const Cart = ({ cart, idx }) => {
    const { recipe_name, preparing_time, calories

    } = cart
    console.log(cart)
    return (
        <tr className="bg-gray-100 text-center ">
            <td className="px-4 py-2 rounded-l-xl my-4">{idx + 1}</td>
            <td className="px-4 py-2">{recipe_name}</td>
            <td className="px-4 py-2">{preparing_time}</td>
            <td className="px-4 py-2">{calories}</td>
            <td className="px-4 py-2 rounded-r-xl">
                <button className="px-3 py-2 bg-[#0BE58A] rounded-lg my-4">Preparing</button>
            </td>
        </tr>
    );
};

export default Cart;