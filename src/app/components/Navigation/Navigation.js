"use client"

import React, { useState } from 'react';
import IconButton from '../buttons.js/iconButton';

export default function Navigation() {
    return (
        <>
            < div className="flex gap-5" >
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Home</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>About</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Product</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Testimonials</h1>
                <h1 className='text-xl subpixel-antialiased text-[rgb(186,129,75)]'>Contact</h1>
            </div>
        </ >
    );
}
