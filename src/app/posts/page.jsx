import Link from "next/link";
import { posts } from "../components/Posts";

export const metadata = {
  title: "Post",
  description: "Post Page",
};

const postPage = async() => {
    const post = await posts()
    return (
        <main className="">
        <div className="grid grid-cols-3 gap-8 w-[85%] mx-auto my-20">
              {
                post.map((post, index) => <div className="border p-7 rounded-xl" key={index}>
                  <p className="text-xl font-bold mb-2">{post.title}</p>
                  <p className="text-gray-400 mb-3">{post.body}</p>
                  <button className="btn"><Link href={`/posts/${post.id}`}>See Details</Link></button>
                </div>) 
              }
            </div>
    </main>
    );
};

export default postPage;