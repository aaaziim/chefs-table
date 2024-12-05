import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import CartProcessing from "../Cart/CartProcessing";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [carts, setCarts] = useState([]);
    const [processingCarts, setProcessingCarts] = useState([]);

    const [time, setTime] = useState(0)
    const [calories, setCalories] = useState(0)
    const notify = () => toast("This is already in cart");

    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    let totalCalories = 0;
    let totalTime = 0;
    const handleWantToCook = (item) => {
        const newCart = [...carts];
        if (newCart.includes(item)) {
            notify()
        } else {
            newCart.push(item);
            setCarts(newCart)
        }

    }
    const handleRemoveFromWantToCook = (item) => {
        const newCart = carts.filter(cart => cart.recipe_id !== item.recipe_id)

        setCarts(newCart)


    }

    const handleProcessing = (item) => {
        const newProcessingCart = [...processingCarts];

        if (newProcessingCart.includes(item)) {
            toast("This is already in process");
        } else {
            newProcessingCart.push(item);
            setProcessingCarts(newProcessingCart);
            handleRemoveFromWantToCook(item)
            // Calculate totals based on the updated cart
            let totalCalories = 0;
            let totalTime = 0;

            newProcessingCart.forEach(recipe => {
                totalCalories += parseInt(recipe.calories); // Extract numeric value
                totalTime += parseInt(recipe.preparing_time); // Extract numeric value
            });

            setCalories(totalCalories);
            setTime(totalTime);
        }
    };
    return (
        <section className="my-6">
            <h1 className="text-3xl text-center">
                Our Recipes
            </h1>
            <p className="text-center my-4">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and
                solve 500+
                coding
                <br></br>
                problems
                to become an exceptionally well world-class Programmer.
            </p>

            <div className="lg:flex gap-4">
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {
                        blogs.map((blog) => <Blog
                            key={blog.recipe_id}
                            blog={blog}
                            handleWantToCook={handleWantToCook}
                        ></Blog>)

                    }
                </div>
                <div className="lg:w-1/3 rounded-xl border-gray-100 
                border-2 p-6 min-h-full">



                    <div>
                        <h1 className="text-2xl font-bold text-center my-2 pb-2 border-b-2">Want to Cook: {carts.length}</h1>
                        <ToastContainer ></ToastContainer>
                        <table className="w-full border-collapse my-8">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    carts.map((cart, idx) => <Cart key={cart.recipe_id} cart={cart}
                                        handleProcessing={handleProcessing}
                                        idx={idx}></Cart>)
                                }

                            </tbody>
                        </table>
                        <div>
                            <h1 className="text-2xl font-bold text-center my-2 pb-2 border-b-2">Currently Cooking: {processingCarts.length}</h1>
                            <table className="w-full border-collapse text-center">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        processingCarts.map((processingCart, idx) => <CartProcessing key={processingCart.recipe_id} processingCart={processingCart}
                                            idx={idx}></CartProcessing>)
                                    }


                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="px-4 py-2">
                                            Total Time = <br />
                                            {time} Minutes
                                        </td>
                                        <td className="px-4 py-2">
                                            Total Calories = <br />
                                            {calories} Calories
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>












                </div>
            </div>
        </section>
    );
};

export default Blogs;