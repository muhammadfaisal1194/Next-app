import React, { useEffect, useState } from "react";

const Dashboard = ({ posts }: any) => {
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data));
  //   }, []);

  return (
    <>
      {posts.map((post: any) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </>
  );
};

Dashboard.layout = "admin";
export default Dashboard;

export async function getServerSideProps(context: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
