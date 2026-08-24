import LatestBlogList from "@/components/blog/BlogList";
import { Suspense } from "react";
import BlogStats from "@/components/blog/BlogStats";

export default async function Blog() {
  return (
    <section
      className="min-h-dvh flex flex-col justify-center scroll-mt-15 w-full m-4"
      id="blog"
    >
      <header className="flex flex-col m-2 p-8 justify-center self-start border-l-2 border-l-primary-container">
        <h1 className="font-display font-bold text-7xl text-left scroll-pt-60 uppercase">
          project_chronicles
        </h1>
        <h1 className="font-display font-bold text-7xl text-left uppercase text-primary">
          {"//"} blog
        </h1>
        <div className="flex justify-between items-center my-2 bg-surface-container-low">
          <Suspense fallback={<div>Loading stats...</div>}>
            <BlogStats />
          </Suspense>
        </div>
      </header>
      <section className="flex justify-between m-4 ">
        <div>labels</div>
        <label
          htmlFor="search"
          className="flex items-center p-1 border-b-primary-container border-b-2"
        >
          <span className="sr-only">Search</span>
          <span className="text-lg mr-2 select-none font-mono text-primary-container">
            &gt;
          </span>
          <input
            type="text"
            className="border-none outline-none font-mono text-lg w-full placeholder-primary-container"
            placeholder="Enter query"
            id="search"
          />
        </label>
      </section>
      <section className="flex flex-col justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <LatestBlogList />
        </Suspense>
      </section>
    </section>
  );
}
