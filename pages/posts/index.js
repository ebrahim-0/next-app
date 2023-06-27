import Head from "next/head";
import Link from "next/link";

function Products(props) {
  const { posts } = props;
  console.log(props);
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="bla bla" />
      </Head>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{ padding: "8px" }}>
            <Link href={`/posts/${post.id}`}>{post.body}</Link>
          </div>
        );
      })}
    </>
  );
}

export default Products;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
