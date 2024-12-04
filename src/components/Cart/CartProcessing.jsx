import React from 'react';

const CartProcessing = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-2 pb-2 border-b-2">Currently Cooking: 02</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100 text-center">
                        <td className="px-4 py-2 rounded-l-xl">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="px-4 py-2">Malcolm Lockyer</td>
                        <td className="px-4 py-2">1961</td>

                    </tr>
                    <tr>
                        <td></td>
                        <td className="px-4 py-2">
                            Total Time = <br />
                            45 Minutes
                        </td>
                        <td className="px-4 py-2">
                            Total Calories = <br />
                            1045 Calories
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default CartProcessing;