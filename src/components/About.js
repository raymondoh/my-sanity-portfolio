import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import bridge from "../bridge.jpg";

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await sanityClient.fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`);
      setAuthor(response[0]);
    } catch (error) {
      console.log(error);
    }
  };
  if (!author) return <div>Loading...</div>;
  return (
    <main className="relative">
      <img src={bridge} alt="Bridge" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          {/*<img src="" alt=""/>*/}
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there! I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectid="pgw5or5y"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
