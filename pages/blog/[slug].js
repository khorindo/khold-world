import { useParams } from "next/navigation";
import { getSinglePost, getBlogPosts } from "@/lib/blog/GetBlogPosts";
import MainLayout from "@/components/layout/main_layout";
import Head from "next/head";
import Image from "next/image";

// // PostPage page component
// const PostPage = (props) => {
//   // Render post title and content in the page from props
//   return (
//     <div>
//       <h1>{props.post.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const posts = await getBlogPosts();

//   // Get the paths we want to create based on posts
//   const paths = posts.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   // { fallback: false } means posts not found should 404.
//   return { paths, fallback: false };
// }

// // Pass the page slug over to the "getSinglePost" function
// // In turn passing it to the posts.read() to query the Ghost Content API
// export async function getStaticProps(context) {
//   const post = await getSinglePost(context.params.slug);

//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { post },
//   };
// }

export async function getServerSideProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default function BlogPost({ post }) {
  return (
    <MainLayout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="bg-zinc-50 border border-black p-2.5 my-3 mr-2 text-zinc-800 rounded-sm">
        <header className="mb-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time className="text-sm text-zinc-600">
            {new Date(post.published_at).toLocaleDateString()}
          </time>
          <div className="">
            {post.feature_image && (
              <Image
                src={post.feature_image}
                alt={post.title}
                width={900}
                height={500}
                className="rounded-sm mt-2"
              />
            )}
          </div>
        </header>
        <div
          className="prose prose-zinc max-w-none  
          prose-img:rounded-sm 
          prose-img:mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </MainLayout>
  );
}
