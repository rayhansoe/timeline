import React from "react";
import Link from "next/link";

export default function SideLeft() {
  return (
    <div className="flex flex-col gap-3 md:text-2xl text-xl border-r ml-5">
      <Link href="/home" className="menu-item">
        <span>{/* <FaXTwitter /> */}</span>
      </Link>
      <Link href="/home" className="menu-item">
        <span>{/* <GoHome className="menu-icon" /> */}</span>
        <span className="hidden sm:block">Home</span>
      </Link>
      <Link href="/explore" className="menu-item">
        <span>{/* <IoIosSearch className="menu-icon" /> */}</span>
        <span className="hidden sm:block">Explore</span>
      </Link>
      <Link href="/notifications" className="menu-item">
        <span>{/* <RiNotification2Line className="menu-icon" /> */}</span>
        <span className="hidden sm:block">Notifications</span>
      </Link>
      <Link href="/messages" className="menu-item">
        <span>{/* <HiOutlineMail className="menu-icon" /> */}</span>
        <span className="hidden sm:block">Messages</span>
      </Link>
      <Link href="/lists" className="menu-item">
        <span>{/* <RiFileListLine className="menu-icon" /> */}</span>
        <span className="hidden sm:block">Lists</span>
      </Link>
      <Link href="/premium" className="menu-item">
        <span>{/* <FaXTwitter className="menu-icon" /> */}</span>
        <span className="hidden sm:block">Premium</span>
      </Link>
      <Link href="/profile" className="menu-item">
        <span>{/* <IoPersonOutline className="menu-icon" /> */}</span>
        <span className="hidden sm:block">Profile</span>
      </Link>
      <Link href="/more" className="menu-item">
        <span>{/* <CiCircleMore className="menu-icon" /> */}</span>
        <span className="hidden sm:block">More</span>
      </Link>
      <button className="menu-item bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-5">
        <span>
          {/* <FaFeatherAlt /> */}
          <span className="hidden sm:block ">Tweet</span>
        </span>
      </button>
      <div className="p-3 text-[0.9rem]">
        <h3 className="text-bold">username</h3>
        <p>username</p>
      </div>
      <button className="btn btn-circle">Logout</button>
    </div>
  );
}
