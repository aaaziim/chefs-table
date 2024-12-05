import Banner from "../../assets/Images/bgbanner.jpg"
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <div className="md:flex justify-between items-center gap-4 text-center h-20">


                <div>
                    <h1 className="text-3xl uppercase">Chefs Table</h1>
                </div>
                <ul className="md:flex justify-between gap-4">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
                <div>
                    <div className="relative flex items-center">
                        <CiSearch className="absolute left-3 text-gray-500" />
                        <input
                            className="rounded-2xl px-10 py-2 bg-gray-200 w-full"
                            type="text"
                            placeholder="Search"
                            id=""
                        />
                        <p className="px-3 text-2xl"> <FaUser /></p>

                    </div>

                </div>

            </div >
            <section
                style={{ backgroundImage: `url(${Banner})` }}
                className="bg-cover bg-center h-screen text-center flex justify-center items-center rounded-2xl"
            >
                <div>
                    <h1 className="text-6xl ">
                        Discover an exceptional cooking <br></br>class tailored for you!
                    </h1>
                    <p className="my-4">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+
                        coding
                        <br></br>
                        problems
                        to become an exceptionally well world-class Programmer.
                    </p>

                    <button className="px-5 py-3  mx-2 bg-[#0BE58A]  rounded-xl text-black font-bold">Explore Now</button>
                    <button className="px-5 py-3 bg-gray-100 rounded-xl text-[#0BE58A] font-bold ">Our
                        Feedback</button>
                </div>
            </section>
        </>
    );
};

export default Header;