import React from 'react';
import { IoTime } from "react-icons/io5";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
const Blog = () => {
    return (
        <>
            <div className='rounded-xl border-sky-200 border-2 p-4'>
                {/* <img className='rounded-xl' src="" alt="" > </img> */}
                <h3 className="text-2xl">Name</h3>
                <p className='border-b-2 my-2'>Description</p>
                <h3 className="text-2xl">Ingredients: 6</h3>
                <ul className='border-b-2 my-3'>
                    <li>500g </li>
                    <li>1 Onion</li>
                    <li>2 claves</li>
                </ul>

                <p className='flex gap-2 items-center'><IoTime /><span> 30 Minutes</span> <MdOutlineEnergySavingsLeaf />  <span> 600 Calories</span></p>


            </div >
        </>
    );
};

export default Blog;