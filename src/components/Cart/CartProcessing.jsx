import React from 'react';

const CartProcessing = ({ processingCart, idx }) => {
    const { recipe_name, preparing_time, calories

    } = processingCart;

    return (
        <tr className="bg-gray-100 text-center">

            <td className="px-4 py-2 ">{idx + 1}</td>
            <td className="px-4 py-2 ">{recipe_name}</td>
            <td className="px-4 py-2">{preparing_time}</td>
            <td className="px-4 py-2">{calories}</td>

        </tr>
    );
};

export default CartProcessing;