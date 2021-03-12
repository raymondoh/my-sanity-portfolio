import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sanityClient from "../client";

const Post = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    //fetchData();
    fetchTheData();
  }, []);

  const fetchData = async () => {
    await sanityClient
      .fetch(
        `*[_type == 'post']{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPostData(data))
      .then((data) => console.log(data))

      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTheData = async () => {
    try {
      const response = await sanityClient.fetch(`*[_type == 'post']{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`);
      setPostData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">All Blogs</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          welcome
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => {
              console.log(post.title);

              return (
                <article key={post.slug.current}>
                  <Link to={"/post/" + post.slug.current}>
                    <span
                      className="block h-64 relative rounded shadow lesding-snug bg-white border-l-8 border-green-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Post;
