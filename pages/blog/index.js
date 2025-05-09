// This page will display the existing blog posts
import MainLayout from "@/components/layout/main_layout";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BlogPagination from "@/components/blog/blog_pagination";

// import getBlogPosts function
import { getBlogPosts } from "../../lib/blog/GetBlogPosts";
import Head from "next/head";

// fetch requires getStaticProps
// export async function getStaticProps() {
//   const posts = await getBlogPosts();

//   if (!posts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { posts },
//   };
// }

export async function getServerSideProps(context) {
  // get page number from url query, defaults 1
  let page = context.query?.page || 1;

  // Validate that page is a number
  if (isNaN(page)) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  // further number validation
  page = Number(page);

  const posts = await getBlogPosts(page);
  if (!posts) {
    return {
      notFound: true,
    };
  }

  // rounds up to ensure that totalPages can accommodate all posts
  // e.g. if there are 10 posts and limit is 3, totalPages should be 4
  // 3 posts per page, 4th page has 1 post
  const totalPages = Math.ceil(
    posts.meta.pagination.total / posts.meta.pagination.limit
  );
  const currentPage = posts.meta.pagination.page;

  // Validate that page is within the valid range
  if (page < 1 || page > totalPages) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  // props are then sent to BlogIndex
  return {
    props: {
      posts: posts,
      currentPage,
      totalPages,
    },
  };
}

export default function BlogIndex({ posts, currentPage, totalPages }) {
  return (
    <MainLayout>
      <Head>
        <title>blog @ khold.world</title>
      </Head>
      <div>
        <ul className="pt-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="bg-zinc-50 border border-black p-2.5 my-1 mr-2 text-zinc-800  rounded-sm ">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <small>
                      {new Date(post.published_at).toLocaleDateString()}
                    </small>
                  </CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </MainLayout>
  );
}
