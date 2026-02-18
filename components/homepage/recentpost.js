import Link from "next/link";

export default function RecentPost({ post }) {
  if (!post) return <p>No posts yet.</p>;

  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-l font-semibold hover:underline">{post.title}</h2>
      </Link>

      <p className="text-sm text-gray-600">
        Published on {new Date(post.published_at).toLocaleDateString()}
      </p>
    </div>
  );
}
