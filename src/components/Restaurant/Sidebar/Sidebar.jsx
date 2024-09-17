import React from 'react';
import Pizza from '../../../assets/img/pizza.png';

export default function Sidebar() {
  return (
    <div
      style={{ maxHeight: '600px' }}
      className="font-sans font-semibold w-80 overflow-y-scroll bg-gray-200"
    >
      <ul className="flex flex-col gap-5 py-8" id="restaurant_sidebar">
        {[...Array(70)].map((_, index) => (
          <li key={index} className="flex items-center text-start">
            <img src={Pizza} alt="Pizza" className="w-10 h-10 mr-3" />
            <p>Pizza</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
