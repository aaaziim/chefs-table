import React from 'react';
import { IoTime } from "react-icons/io5";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
const Blog = ({ blog }) => {
    const { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories } = blog;
    return (
        <>
            <div className='rounded-xl border-gray-100 border-2 p-6'>
                <div>
                    <img className='rounded-xl h-96 w-full' src={recipe_image} alt="" />
                </div>
                <h3 className="text-2xl font-semibold my-2">{recipe_name}</h3>
                <p className='border-b-2 my-2 pb-2'>{short_description}</p>
                <h3 className="text-2xl">Ingredients: 6</h3>
                <ul className='border-b-2 my-3 list-disc list-inside pb-2'>
                    {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
                </ul>

                <p className='flex gap-2 items-center'><IoTime /><span> {preparing_time} Minutes</span> <MdOutlineEnergySavingsLeaf />  <span> {calories} Calories</span></p>

                <button className='px-3 py-2 bg-[#0BE58A] rounded-lg my-4'>Want To Cook</button>


            </div >
        </>
    );
};

export default Blog;