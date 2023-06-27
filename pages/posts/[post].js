import Head from "next/head";

export default function Post(props) {
  const { post } = props;

  return (
    <>
      <Head>
        <title>Post {post.id}</title>
        <meta name="description" content="bla bla" />
      </Head>
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.post}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((d) => {
    return {
      params: { post: `${d.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
