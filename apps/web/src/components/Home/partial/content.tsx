"use client";
import React from "react";
import { useRef, useState } from "react";

export default function Content() {
  const [text, setText] = useState<string>("");
  const textRef = useRef<HTMLTextAreaElement>(null);
  // const { username, name } = useSelector((state) => state.user.value);
  const isTextTooLong = text.length >= 60;

  const handleChange = () => {
    if (textRef.current) {
      setText(textRef.current.value);
    }
  };

  return (
    <div>
      <nav className="flex justify-around navbar-nav border-b p-2">
        <a>For you</a>
        <a>Following</a>
      </nav>
      <section className="tweet-box border-b">
        <div className="p-2 flex ">
          <div className="avatar">
            <div className=" h-auto rounded-full mt-1">logo</div>
          </div>
          <textarea
            className="textarea w-full h-[4rem] ml-2 p-1 mb-1"
            placeholder="What is happening?!"
            ref={textRef}
            onChange={handleChange}
          ></textarea>
          {/* <div>insert panjang text</div> */}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-end mt-2 mr-2"
          disabled={isTextTooLong}
        >
          Post
        </button>
      </section>
      <section
        id="content_tweet"
        className="mt-[4rem] border-t flex flex-col-reverse"
      ></section>
    </div>
  );
}
