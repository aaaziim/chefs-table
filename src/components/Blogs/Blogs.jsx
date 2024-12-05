import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import CartProcessing from "../Cart/CartProcessing";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [carts, setCarts] = useState([]);
    const notify = () => toast("This is already in cart");

    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleWantToCook = (item) => {
        const newCart = [...carts];
        if (newCart.includes(item)) {
            notify()
        } else {
            newCart.push(item);
            setCarts(newCart)
        }



    }
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

                                {
                                    carts.map((cart, idx) => <Cart key={cart.recipe_id} cart={cart}
                                        idx={idx}></Cart>)
                                }

                            </tbody>
                        </table>

                        <CartProcessing></CartProcessing>
                    </div>












                </div>
            </div>
        </section>
    );
};

export default Blogs;