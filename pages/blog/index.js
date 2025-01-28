// This page will display the existing blog posts
// next imports
import Link from "next/link";

// import getBlogPosts function
import { getBlogPosts } from "../../lib/blog/GetBlogPosts";

// fetch requires getStaticProps
export async function getStaticProps() {
  const posts = getBlogPosts();
  return {
    props: { posts },
  };
}

export default function BlogIndex({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <small>{new Date(post.date).toLocaleDateString()}</small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
