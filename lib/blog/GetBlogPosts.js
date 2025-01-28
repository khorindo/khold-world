import fs from "fs";
import path from "path";
import matter from "gray-matter";

// sets cwd to /content/blog
const blogDirectory = path.join(process.cwd(), "content/blog");

export function getBlogPosts() {
  // uses fs to read directory
  const allPosts = fs.readdirSync(blogDirectory);

  // map through posts
  return allPosts.map((post) => {
    // join file path
    const filePath = path.join(blogDirectory, post);
    // use fs to read file contents
    const fileContents = fs.readFileSync(filePath, "utf8");
    // use gray-matter to read frontmatter metadata
    const { data, content } = matter(fileContents);

    return {
      slug: post.replace(/\.mdx$/, ""),
      ...data,
    };
  });
}
