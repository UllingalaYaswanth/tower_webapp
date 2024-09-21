
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './bg2.mp4';

export function SignIn() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'user1@gmail.com' || email === 'user2@gmail.com' || email === 'user3@gmail.com') {
            localStorage.setItem('userEmail',email)
            navigate('/dashboard/home'); // Navigate to the dashboard home page
        } else {
            alert('Email not recognized');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center bg-gray-100 flex-col">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
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
            <div className="w-1/2 relative overflow-hidden rounded-2xl bg-gray-100">
                <video
                    src={bg}
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-s-2xl bg-gray-100"
                    type="video/mp4"
                    style={{ playbackRate: 0.2 }} // Adjust the rate as needed
                />
            </div>
        </div>
    );
}

export default SignIn;
