import Post from "@/app/component/Post";

import { getPost } from "@/lib/fetchData";



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
