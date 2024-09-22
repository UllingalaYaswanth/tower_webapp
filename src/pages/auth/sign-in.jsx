
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bg from './bg7.mp4';
// import login from './bg.jpg'

// export function SignIn() {
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (email === 'user1@gmail.com' || email === 'user2@gmail.com' || email === 'user3@gmail.com') {
//             localStorage.setItem('userEmail',email)
//             navigate('/dashboard/home'); // Navigate to the dashboard home page
//         } else {
//             alert('Email not recognized');
//         }
//     };

//     return (
//         // <div className="flex h-screen">
//         //   <img src={login} className='absolute inset-0 object-cover w-full h-full' alt="Login" />
//         //     <div className="w-1/2 flex items-center justify-center bg-gray-100 flex-col relative">
//         //       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96 relative z-10">
//         //           <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
//         //           <div className="mb-4">
//         //               <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
//         //               <input
//         //                   type="email"
//         //                   id="email"
//         //                   value={email}
//         //                   onChange={(e) => setEmail(e.target.value)}
//         //                   className="w-full p-2 border border-gray-300 rounded"
//         //                   placeholder="you@example.com"
//         //                   required
//         //               />
//         //           </div>
//         //           <div className="mb-6">
//         //               <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
//         //               <input
//         //                   type="password"
//         //                   id="password"
//         //                   className="w-full p-2 border border-gray-300 rounded"
//         //                   placeholder="********"
//         //                   required
//         //               />
//         //           </div>
//         //           <button
//         //               type="submit"
//         //               className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
//         //           >
//         //               Sign In
//         //           </button>
//         //       </form>
//         //   </div>
//         //     <div className="w-1/2 relative overflow-hidden rounded-2xl bg-gray-100">
//         //         <video
//         //             src={bg}
//         //             autoPlay
//         //             loop
//         //             muted
//         //             className="absolute top-0 left-0 w-full h-full object-cover rounded-s-2xl bg-gray-100"
//         //             type="video/mp4"
//         //             style={{ playbackRate: 0.2 }} // Adjust the rate as needed
//         //         />
//         //     </div>
//         // </div>
//         <div className="flex h-screen">
//     {/* Background Image */}
//     {/* <img src={login} className='absolute inset-0 object-cover w-full h-full' alt="Login" /> */}
 
//     <video
//             src={bg}
//             autoPlay
//             loop
//             muted
//             className='absolute inset-0 object-cover w-full h-full'
//             // className="top-0 left-0 w-full h-full object-cover rounded-xl"
//             type="video/mp4"
//             style={{ playbackRate: 0.2 }} // Adjust the rate as needed
//         />
    
//     {/* Left Section with Form */}
//     <div className=" w-1/2 flex items-center justify-center flex-col relative z-10 ">
//     {/* <h1 className='text-7xl font-bold text-white mb-16 font-serif tracking-wide'>
//       DIGITAL TWIN
//     </h1> */}
//         {/* <h1 className="text-8xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400 mb-16 leading-snug transition-transform duration-300 hover:scale-110 ">
//           DIGITAL TWIN
//         </h1> */}
//         <h1 className="text-8xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400 mb-16 leading-snug transition-transform duration-300 hover:scale-110" style={{ fontFamily: 'Dancing Script' }}>
//   DIGITAL TWIN
// </h1>
// <blockquote className="text-xl italic text-gray-700 mt-8">
//   "A digital twin is a living digital model of a physical object or system."
// </blockquote>

//         <form onSubmit={handleSubmit} className="bg-gray-300 p-8 rounded-lg shadow-md w-96 bg-opacity-70">
//             <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
//             <div className="mb-4">
//                 <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded"
//                     placeholder="you@example.com"
//                     required
//                 />
//             </div>
//             <div className="mb-6">
//                 <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     placeholder="********"
//                     required
//                 />
//             </div>
//             <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
//             >
//                 Sign In
//             </button>
//         </form>
//     </div>
    
//     {/* Right Section with Video */}
//     {/* <div className="w-1/2 relative overflow-hidden rounded-l-2xl px-16 py-3 ml-5 w-[45%]"> 
//         <video
//             src={bg}
//             autoPlay
//             loop
//             muted
//             className="top-0 left-0 w-full h-full object-cover rounded-xl"
//             type="video/mp4"
//             style={{ playbackRate: 0.2 }} // Adjust the rate as needed
//         />
//     </div> */}
// </div>

//     );
// }

// export default SignIn;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './bg7.mp4';
import '../../../../frontend/src/index.css'; // or your CSS file name


export function SignIn() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com'].includes(email)) {
            localStorage.setItem('userEmail', email);
            navigate('/dashboard/home');
        } else {
            alert('Email not recognized');
        }
    };

    return (
        <div className="flex h-screen">
            <video
                src={bg}
                autoPlay
                loop
                muted
                className='absolute inset-0 object-cover w-full h-full'
                type="video/mp4"
                style={{ playbackRate: 0.2 }}
            />
            <div className="w-1/2 flex items-center justify-center flex-col relative z-10">
                <h1 className="text-8xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400 leading-snug transition-transform duration-300 hover:scale-110" style={{ fontFamily: 'aleo' }}>
                    DIGITAL TWIN
                </h1>
                <blockquote className="text-xl italic text-gray-700 mt-3 mb-16">
                    "A digital twin is a living digital model of a physical object or system."
                </blockquote>
                <form onSubmit={handleSubmit} className="bg-gray-300 p-8 rounded-lg shadow-md w-96 bg-opacity-70">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="********"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
