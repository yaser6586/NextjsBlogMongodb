"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { API_URL } from "@/config/config";

function DeletePost({ postId }) {
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    redirect("/");
  }
  function handleDelete() {
    fetch(`${API_URL}/api/deletePosts/` + postId, {
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
