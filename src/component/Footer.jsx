import { Link } from "react-router-dom";
import { BiLogoDiscord } from "react-icons/bi";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <>
   <div className="p-4 flex flex-col items-center text-center">

       {/*Footer contact*/}
       <div className=" mt-5 text-center m-auto mb-5">
            <ul className="text-md flex gap-2 items-center justify-center">
                <Link to="https://www.instagram.com/"><li className="list md:mr-4 p-1 rounded-md bg-slate-200 border-2 border-transparent hover:border-gray-500"><RiInstagramFill /></li></Link>
                <Link to="https://discord.com/"><li className="list md:mr-4 p-1 rounded-md bg-slate-200 border-2 border-transparent hover:border-gray-500"><BiLogoDiscord /></li></Link>
                <a href="https://x.com/" target="blank"><li className="list md:mr-4 p-1 rounded-md bg-slate-200 border-2 border-transparent hover:border-gray-500"><FaSquareXTwitter /></li></a>
                <a href="https://www.youtube.com/watch?v=UpY3cqpYTJQ&t=1015s" target="blank"><li className="list md:mr-4 p-1 rounded-md bg-slate-200 border-2 border-transparent hover:border-gray-500"><FaYoutube /></li></a>
            </ul>
        </div> 

       {/* Brand Logo and name */}
       <div className="flex justify-center items-center ">
       <img className="w-5 h-5 mr-1 md:w-10 md:h-10" src="/public/logo.png"/>
       <h2 className="font-bold md:text-xl">ActiveEdge</h2>
       </div>

<div>



        {/*contact info*/}
       <div className=" mt-5 text-center">
        <h2 className="text-2xl font-thin">Contact us</h2>
            <ul className="text-md text-gray-600 flex flex-wrap justify-center">
            <Link to="mailto:support@activeedge.com">
            <li className="list font-thin md:mr-4">Email: support@equisports.com</li>
            </Link>
            
                <li className="list font-thin md:mr-4">Phone: +880-123-4567890 (9 AM - 6 PM, Mon-Fri)</li>
                <li className="list font-thin md:mr-4">Address: EquiSports HQ, Dhaka, Bangladesh</li>
            </ul>
        </div> 
        <div>

        {/*copyright info*/}
        <div className="mt-10 pt-2 border-t-2">
            <p>&copy; 2024 ActiveEdge. All Rights Reserved.</p>
        </div>
        </div>
</div>


       
   </div>
        </>
    );
};

export default Footer;