import React from "react";

export default function SideRight() {
  return (
    <div className="border-l">
      <div className="sm:flex sm:flex-col h-full  gap-3 p-4 hidden">
        <div className="search_area">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="card w-27 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-neutral-content">
              Subscribe to Premium
            </h2>
            <p>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-neutral-content">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="card w-27 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Trending in balakutak</h2>
            <ol>
              <li>1. Mas Rayhan mastah</li>
              <li>2. Mas Izam mastah</li>
              <li>3. Teh Diah mastah</li>
              <li>4. Teh Rahma mastah</li>
              <li>5. Teh Gaby mastah</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
