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
import gym_background_1 from "../../assets/backgroundimagesherosection/gymframe40.svg";
import gym_background_2 from "../../assets/backgroundimagesherosection/72b8fd170eb86b20bbfb832b3b2c9ea4.png";
import gym_background_3 from "../../assets/backgroundimagesherosection/377995e55ae59d2d604a33248b4db519.png";
import gym_background_4 from "../../assets/backgroundimagesherosection/377995e55ae59d2d604a33248b4db519.png";
import logo from "../../assets/logo.jpg";
import usermale from "../../assets/UserMale.png";
import { useEffect } from "react";
import clientimage from '../../assets/tridevpandey.png'
const bgimages = [gym_background_1, gym_background_2, gym_background_3, gym_background_4];
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bgimages.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <>


            <div className="relative w-screen h-screen overflow-hidden">
                {/* Background Images hero section*/}
                {bgimages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url(${img})`,
                        }}
                    ></div>
                ))}
                {/* tridev pandey image */}

                <div style={{
    width: "330px",
    height: "440px",
    position: "absolute",
    top: "305px",
    left: "893px",
    borderRadius: "25px",
    borderWidth: "6px",
    borderStyle: "solid",
    boxShadow: "0px 0px 50px 35px #00000040",
    backgroundImage: `url(${clientimage})`, // Set the background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",}} >
                
                </div>

                {/* Content (Text/Button) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white"
                >
                    <h1 className="text-4xl md:text-6xl font-bold" style={{
                        width: "641px",
                        height: "133px",
                        position: "absolute", // Needed for top & left positioning
                        top: "400px",
                        left: "94px",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 400,
                        fontSize: "100px",
                        lineHeight: "133.3px",
                        letterSpacing: "0%",
                    }} >Tridev Pandey</h1>
                    <p className="mt-2 text-lg"
                        style={{
                            width: "502px",
                            height: "97px",
                            position: "absolute", // Needed for positioning
                            top: "538px",
                            left: "117px",
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 400,
                            fontSize: "15px",
                            lineHeight: "17.58px",
                            letterSpacing: "0%",
                        }}
                    >Lorem ipsum dolor sit amet consectetur. Faucibus elit vitae ut luctus. Odio molestie consequat molestie sit turpis tristique aliquet. Elit quis ante nunc egestas in scelerisque ut risus. Augue vestibulum fringilla leo mi aliquet lectus rhoncus vulputate consectetur.</p>
                    <button className="mt-4 px-6 py-3 bg-[#B34A09] text-white rounded-md transition-transform hover:scale-105 active:scale-95" style={{
                        width: "111px",
                        height: "40px",
                        position: "absolute", // Needed for positioning
                        top: "635px",
                        left: "117px",
                        borderRadius: "5px",
                        padding: "8px",
                        gap: "10px", // Only works with flex/grid
                    }} >
                        Explore More
                    </button>
                </div>


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

                {/* optional part we can remove it*/}
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
