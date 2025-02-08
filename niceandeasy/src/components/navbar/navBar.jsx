// import React from "react";
// import gym_background from '../../assets/gymframe40.svg'
// import logo from '../../assets/logo.jpg'
// import usermale from '../../assets/UserMale.png'
// function NavBar() {

//     return (<>
//         <div className="w-screen h-screen bg-cover bg-center" style={{
//             backgroundImage: `url(${gym_background})`,
//             backdropFilter: "blur(155px)",
//         }}>
//             <div className="w-screen h-[100px] bg-cover bg-center backdrop-blur-md" style={{
//                 boxShadow: "-53.77px 53.77px 53.77px 0px #FFFFFF1A inset, 53.77px -53.77px 53.77px 0px #5656561A inset",
//                 backdropFilter: "blur(107.533px)",
//                 WebkitBackdropFilter: "blur(107.533px)", // Ensures cross-browser support
//                  }} >
//                 <div className=" rounded-full bg-cover bg-center" style={{
//                     backgroundImage: `url(${logo})`,
//                     width: "78px",
//                     height: "81px",
//                     position: "absolute", // Required for top & left positioning
//                     top: "9px",
//                     left: "66px",
//                 }}
//                 > </div>
//                 <div>
//                     <button className="bg-[#B34A09]" style={{
//                         width: "54px",
//                         height: "35px",
//                         position: "absolute",
//                         top: "32px",
//                         left: "593px",
//                         borderRadius: "5px",
//                         padding: "10px",
//                         gap: "10px",
//                         fontFamily: "'Inter', sans-serif",
//                         fontWeight: 400,
//                         fontSize: "12px",
//                         lineHeight: "14.52px",
//                         letterSpacing: "0px",
//                         color: "white",
//                     }} >Home</button>
//                     <button className=" bg-[#B34A09] " style={{
//                         width: "55px",
//                         height: "35px",
//                         position: "absolute", // Needed for top & left to work
//                         top: "32px",
//                         left: "687px",
//                         borderRadius: "5px",
//                         padding: "10px",
//                         gap: "10px", // Works only with flex/grid
//                         fontFamily: "'Inter', sans-serif",
//                         fontWeight: 400,
//                         fontSize: "12px",
//                         lineHeight: "14.52px",
//                         letterSpacing: "0px",
//                         color: "white",
//                     }} >About</button>
//                     <button className=" bg-[#B34A09] "
//                         style={{
//                             width: "67px",
//                             height: "35px",
//                             position: "absolute", // Required for top & left to work
//                             top: "32px",
//                             left: "782px",
//                             borderRadius: "5px",
//                             padding: "10px",
//                             gap: "10px", // Works only with flex/grid
//                             fontFamily: "'Inter', sans-serif",
//                             fontWeight: 400,
//                             fontSize: "12px",
//                             lineHeight: "14.52px",
//                             letterSpacing: "0px",
//                             color: "white",
//                         }} >Courses</button>
//                 </div>
//                 <div>
//                     <div>
//                         <button className=" bg-[#B34A09]" style={{
//                             width: "103px",
//                             height: "35px",
//                             position: "absolute", // Required for top & left to work
//                             top: "32px",
//                             left: "1254px",
//                             borderRadius: "5px",
//                             padding: "10px",
//                             gap: "10px",
//                             fontFamily: "Inter, sans-serif",
//                             fontWeight: 400,
//                             fontSize: "12px",
//                             lineHeight: "14.52px",
//                             letterSpacing: "0%",
//                             color: "white", // Works only with flex/grid
//                         }} >Login/Register</button>
//                         <div className="w-[36px] h-[35px] absolute top-[32px] left-[1370px]  " >
//                             <img src={usermale} alt="usermale" />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>

//     </>);
// }
// export default NavBar;

// above is my code and i have modified it in chatgpt to make it responsive choose one

import React, { useState } from "react";
import gym_background from "../../assets/gymframe40.svg";
import logo from "../../assets/logo.jpg";
import usermale from "../../assets/UserMale.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Background Section */}
      <div
        className="w-screen h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${gym_background})`,
          backdropFilter: "blur(155px)",
        }}
      >
        {/* NavBar */}
        <div
          className="w-full h-[100px] flex justify-between items-center px-8 md:px-16 lg:px-24"
          style={{
            boxShadow:
              "-53.77px 53.77px 53.77px 0px #FFFFFF1A inset, 53.77px -53.77px 53.77px 0px #5656561A inset",
            backdropFilter: "blur(107.533px)",
            WebkitBackdropFilter: "blur(107.533px)",
          }}
        >
          {/* Logo */}
          <div
            className="rounded-full bg-cover bg-center w-[78px] h-[81px]"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          ></div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {["Home", "About", "Courses"].map((item, index) => (
              <button
                key={index}
                className="bg-[#B34A09] text-white text-sm px-4 py-2 rounded-md transition-all transform hover:scale-105 active:scale-95"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Login & User Icon */}
          <div className="flex items-center gap-4">
            <button
              className="bg-[#B34A09] text-white text-sm px-5 py-2 rounded-md transition-all transform hover:scale-105 active:scale-95"
              onClick={() => setIsOpen(true)}
            >
              Login/Register
            </button>

            <img src={usermale} alt="User" className="w-[36px] h-[35px]" />
          </div>
        </div>

        {/* Overlay (Frame 26) */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-[300px] flex flex-col items-center">
              <h2 className="text-lg font-bold">Login / Register</h2>
              <p className="mt-2">Enter your credentials below.</p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md transition-all transform hover:scale-105 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
