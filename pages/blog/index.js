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

// import getBlogPosts function
import { getBlogPosts } from "../../lib/blog/GetBlogPosts";
import Head from "next/head";

// fetch requires getStaticProps
export async function getStaticProps() {
  const posts = await getBlogPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default function BlogIndex({ posts }) {
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
      </div>
    </MainLayout>
  );
}
