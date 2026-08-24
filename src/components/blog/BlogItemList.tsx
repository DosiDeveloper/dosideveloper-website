interface BlogItem {
  description: string;
  devarea: string;
  skills: string;
  created_at: string;
  updated_at: string;
  name: string;
}

export default function BlogItemList({
  description,
  devarea,
  skills,
  created_at,
  updated_at,
  name,
}: BlogItem) {
  return (
    <article className="flex flex-col justify-center items-center w-full bg-surface">
      <header className="bg-surface-container-low w-full px-8">
        <p>fecha</p>
      </header>
      <div>
        <h1 className="text-2xl uppercase">{name}</h1>
      </div>
      <div>{description}</div>
      <footer>
        <p>
          {devarea && (
            <>
              <strong>Dev Area: </strong>
              {devarea}
            </>
          )}
        </p>
        <p>
          {skills && (
            <>
              <strong>Skills: </strong>
              {skills}
            </>
          )}
        </p>
        <p>
          {created_at && (
            <>
              <strong>Created At: </strong>
              {created_at}
            </>
          )}
        </p>
        <p>
          {updated_at && (
            <>
              <strong>Updated At: </strong>
              {updated_at}
            </>
          )}
        </p>
      </footer>
    </article>
  );
}
