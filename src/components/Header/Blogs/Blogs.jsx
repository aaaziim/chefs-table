import Blog from "../../Blog/Blog";

const Blogs = () => {
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

            <div className="md:flex">
                <div className="md:w-2/3">
                    {<Blog></Blog>}
                </div>
                <div className="w-1/3">
                    Cart
                </div>
            </div>
        </section>
    );
};

export default Blogs;