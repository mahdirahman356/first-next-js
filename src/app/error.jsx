"use client"
import React from 'react';

const Error = () => {
    return (
        <section className="flex items-center p-16 bg-black h-screen dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                        <span className="sr-only">Error</span>Error
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Error;