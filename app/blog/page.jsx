"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { API_URL } from "@/config/config";

function BlogPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);
  async function handleClick() {
    if (body.length !== 0 && title.length !== 0) {
      fetch(`${API_URL}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ title, body }),
      });
      setSubmitted(true);
    }
  }
  if (submitted) {
    redirect("/");
  }
  return (
    <div className="flex justify-center align-middle ">
      <div className="flex-col">
        <div className="text-center my-10">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered input-accent w-full max-w-xs  "
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="text-center my-10">
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center my-10">
          <button className="btn btn-success   " onClick={handleClick}>
            send post
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
