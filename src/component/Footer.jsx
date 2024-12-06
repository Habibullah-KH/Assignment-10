import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
   <div className="p-4 flex flex-col items-center text-center">
       {/* Brand Logo and name */}
       <div className="flex justify-center items-center ">
       <img className="w-5 h-5 mr-1 md:w-10 md:h-10" src="/public/logoClr.png"/>
       <h2 className="font-bold md:text-xl">ActiveEdge</h2>
       </div>

<div>

       {/*Footer contact*/}
       <div className=" mt-5 text-center">
        <h2 className="text-2xl font-thin">Let&#39;s Connect</h2>
            <ul className="text-md md:flex items-center justify-center">
                <Link to="https://www.linkedin.com/"><li className="list md:mr-4">Linkedin</li></Link>
                <Link to="mailto:support@activeedge.com"><li className="list md:mr-4">Mail</li></Link>
                <a href="https://x.com/" target="blank"><li className="list md:mr-4">Twitter</li></a>
                <a href="https://www.youtube.com/watch?v=UpY3cqpYTJQ&t=1015s" target="blank"><li className="list md:mr-4">Youtube</li></a>
            </ul>
        </div> 


        {/*contact info*/}
       <div className=" mt-5 text-center">
        <h2 className="text-2xl font-thin">Contact us</h2>
            <ul className="text-md ">
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