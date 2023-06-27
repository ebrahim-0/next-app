import Head from "next/head";
import { useRouter } from "next/router";

export default function Post(props) {
  // const router = useRouter();
  // const { id } = router.query;

  const { post } = props;

  // console.log(post);

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

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `http://localhost:3000/api/posts/${context.params.post}`
//   );
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/posts");
//   const data = await res.json();

//   const paths = data.map((d) => {
//     return {
//       params: { post: `${d.id}` },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context.params.post}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
