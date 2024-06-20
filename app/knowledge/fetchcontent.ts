import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const joinContentDir = (category: any) => {
  const contentDir = path.join(process.cwd(), "content/knowledge/" + category);
  return contentDir;
};

export async function getBlogBySlug(category: string, slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(joinContentDir(category), fileName);
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
  const books = fs.readdirSync(joinContentDir("books"));
  const entrepreneurship = fs.readdirSync(joinContentDir("entrepreneurship"));
  const miscellaneous = fs.readdirSync(joinContentDir("miscellaneous"));
  const people = fs.readdirSync(joinContentDir("people"));
  const philosophy = fs.readdirSync(joinContentDir("philosophy"));
  const bookBlogs = await Promise.all(
    books.map((fileName) => getBlogBySlug("books", path.parse(fileName).name))
  );
  const entrepreneurshipBlogs = await Promise.all(
    entrepreneurship.map((fileName) =>
      getBlogBySlug("entrepreneurship", path.parse(fileName).name)
    )
  );
  const miscellaneousBlogs = await Promise.all(
    miscellaneous.map((fileName) =>
      getBlogBySlug("miscellaneous", path.parse(fileName).name)
    )
  );
  const peopleBlogs = await Promise.all(
    people.map((fileName) => getBlogBySlug("people", path.parse(fileName).name))
  );
  const philosophyBlogs = await Promise.all(
    philosophy.map((fileName) =>
      getBlogBySlug("philosophy", path.parse(fileName).name)
    )
  );
  const blogs = [
    ...bookBlogs,
    ...entrepreneurshipBlogs,
    ...miscellaneousBlogs,
    ...peopleBlogs,
    ...philosophyBlogs,
  ];
  return blogs;
}
export const getBySlug = async (slug: string) => {
  const allBlogs = await getAllBlogs();
  const blog = allBlogs.find((blog) => blog.slug === slug);
  return blog;
};
// export function getAllBlogSlugs() {
//   const files = fs.readdirSync(contentDir);
//   const slugs = files.map((fileName) => fileName.replace(".mdx", ""));
//   return slugs;
// }
