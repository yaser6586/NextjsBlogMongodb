import Post from "@/app/component/Post";
import { API_URL } from "@/config/config";

export async function getPost() {
  const res = await fetch(`${API_URL}/api/posts`, {
    cache: "no-store",
  });
  const PostData = res.json();

  return PostData;
}

export default async function Home() {
  //for access to json json file we should use async await
  const posts = await getPost();
  return (
    <>
      <div>
        {posts.map((post) => (
          <Post posts={post} />
        ))}
      </div>
    </>
  );
}
