import path from "path";
import matter from "gray-matter";
import GhostContentAPI from "@tryghost/content-api";

// this function gets all the blog posts existing in Ghost.
export async function getBlogPosts() {
  const api = new GhostContentAPI({
    url: "http://localhost:2368",
    key: "80438a52cde20808ff1bbffde1",
    version: "v5.0",
  });

  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

// this function gets a single blog post by slug.
export async function getSinglePost(slug) {
  const api = new GhostContentAPI({
    url: "http://localhost:2368",
    key: "80438a52cde20808ff1bbffde1",
    version: "v5.0",
  });
  return await api.posts.read({ slug: slug }).catch((err) => {
    console.error(err);
  });
}
