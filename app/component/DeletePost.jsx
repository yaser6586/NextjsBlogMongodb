"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";

function DeletePost({ postId }) {
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    redirect("/");
  }
  function handleDelete() {
    fetch("http://localhost:3000/api/deletePosts/" + postId, {
      method: "DELETE",
    });

    setDeleted(true);
  }
  return (
    <button className="btn btn-error " onClick={handleDelete}>
      delete
    </button>
  );
}

export default DeletePost;
