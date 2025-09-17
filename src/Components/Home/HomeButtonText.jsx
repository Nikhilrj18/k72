import { Link } from "react-router-dom";


const HomeButtonText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 ">
      <div className="hover:scale-105 duration-300 ease-in-out hover:text-green-500 hover:border-green-500 border-2 p-2 rounded-full">
        <Link
          className="text-[6vw]  uppercase  lg:px-10 leading-[7vw] "
          to="/Projects"
        >
          Projects
        </Link>
      </div>
      <div className="hover:scale-105 duration-300 ease-in-out hover:text-green-500 hover:border-green-500 border-2 p-2 rounded-full" >
      
        <Link
          className="text-[6.5vw]  uppercase  lg:px-10 leading-[7vw]"
          to="/Agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeButtonText;
