import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

import api from "../services/api";

export default function Feed() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {

    try {

      const res = await api.get("/posts");

      setPosts(res.data);

    }
    catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchPosts();

  }, []);

  return (

    <MainLayout>

      <CreatePost fetchPosts={fetchPosts} />

      {

        posts.length === 0 ?

          (

            <div
              style={{
                textAlign: "center",
                color: "#94A3B8",
                marginTop: "100px"
              }}
            >

              No posts yet 🚀

            </div>

          )

          :

          (

            posts.map((post) => (

              <PostCard
                key={post._id}
                post={post}
                fetchPosts={fetchPosts}
              />

            ))

          )

      }

    </MainLayout>

  );

}