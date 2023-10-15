import React from "react";
import { API_URL } from "@/config/config";
import EditPost from "@/app/component/EditPost";

export async function getPost(id) {
  const res = await fetch(`${API_URL}/api/posts/` + id, {
    cache: "no-store",
  });
  const post = res.json();
  return post;
}
async function Edit({ params }) {
  const posts = await getPost(params.id);
  // we only want object that is in array so we choose first item of array
  const pt = posts[0];

  return <EditPost posts={pt} params={params} />;
}

export default Edit;
