import { supabase } from "@/utils/supabase";
import BlogItemList from "./BlogItemList";

export default async function LatestBlogList() {
  const { data: blogList, error } = await supabase
    .from("post_metadata")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);
  return (
    <section className="flex flex-col justify-center w-full gap-4">
      {blogList &&
        blogList.map((blog) => <BlogItemList key={blog.id} {...blog} />)}
    </section>
  );
}
