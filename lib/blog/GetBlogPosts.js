import path from "path";
import matter from "gray-matter";
import GhostContentAPI from "@tryghost/content-api";

// this function gets all the blog posts existing in Ghost.
// page = 1 to set default
export async function getBlogPosts(page = 1) {
  const { GHOST_API_KEY } = process.env;
  const api = new GhostContentAPI({
    // we'll be changing this to blog.khold.world? soon
    // this api key will be changed when me make a new ghost instance for prod
    url: "http://localhost:2368",
    key: GHOST_API_KEY,
    version: "v5.0",
  });

  try {
    const posts = await api.posts.browse({
      limit: 3,
      page: page,
      order: "published_at desc",
    });
    return posts;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// this function gets a single blog post by slug.
export async function getSinglePost(slug) {
  const { GHOST_API_KEY } = process.env;
  const api = new GhostContentAPI({
    // we'll be changing this to blog.khold.world? soon
    // this api key will be changed when me make a new ghost instance for prod
    url: "http://localhost:2368",
    key: GHOST_API_KEY,
    version: "v5.0",
  });
  return await api.posts.read({ slug: slug }).catch((err) => {
    console.error(err);
  });
}
