import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "content/blogs");

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    publishedAt: string;
    summary: string;
    imageUrl?: string;
    tag: string;
    isDraft?: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getAllBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map((fileName) => getBlogBySlug(path.parse(fileName).name))
  ).then((blogs) =>
    blogs.sort((a, b) =>
      a.frontmatter.publishedAt > b.frontmatter.publishedAt ? -1 : 1
    )
  );
  return blogs;
}

export function getAllBlogSlugs() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((fileName) => fileName.replace(".mdx", ""));
  return slugs;
}
