import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
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
                        blogs.map(blog => <Blog key={blog.recipe_id} blog={blog}></Blog>)

                    }
                </div>
                <div className="lg:w-1/3 rounded-xl border-gray-100 border-2 p-6 min-h-full">
                    <Cart></Cart>
                </div>
            </div>
        </section>
    );
};

export default Blogs;