import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const StudyMaterialList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const articles = [
    {
      id: 1,
      title: "How to boost your savings?",
      slug: "how_to_boost_your_savings",
      category: "Savings",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magnam ad soluta labore id numquam illo error!",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magnam ad soluta labore id numquam illo error! Velit cum dolorum rerum fugiat excepturi voluptate, non explicabo, alias accusantium sapiente possimus placeat. Exercitationem perspiciatis vitae in consequatur quisquam dignissimos facere porro neque non ipsam sapiente dolores alias, culpa at nobis vero enim a maiores deleniti quasi similique mollitia harum fuga? Incidunt porro, sint repellendus recusandae impedit adipisci temporibus in asperiores deserunt beatae aliquid minima dolore provident odio et illum maiores quia! Iusto officia reprehenderit laudantium, consequuntur eligendi placeat laborum doloremque voluptates quia voluptate adipisci iure rerum dolores modi cupiditate quasi veniam!",
      date_posted: "2023-08-12",
      image: "/images/photo (57).jpg",
      author: {
        name: "Invest Ug",
        avatar: "/images/avatar.png",
      },
    },
    {
      id: 2,
      title: "How to boost your savings?",
      slug: "how_to_boost_your_savings",
      category: "Savings",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magnam ad soluta labore id numquam illo error!",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magnam ad soluta labore id numquam illo error! Velit cum dolorum rerum fugiat excepturi voluptate, non explicabo, alias accusantium sapiente possimus placeat. Exercitationem perspiciatis vitae in consequatur quisquam dignissimos facere porro neque non ipsam sapiente dolores alias, culpa at nobis vero enim a maiores deleniti quasi similique mollitia harum fuga? Incidunt porro, sint repellendus recusandae impedit adipisci temporibus in asperiores deserunt beatae aliquid minima dolore provident odio et illum maiores quia! Iusto officia reprehenderit laudantium, consequuntur eligendi placeat laborum doloremque voluptates quia voluptate adipisci iure rerum dolores modi cupiditate quasi veniam!",
      date_posted: "2023-08-12",
      image: "/images/photo (57).jpg",
      author: {
        name: "Invest Ug",
        avatar: "/images/avatar.png",
      },
    },
    {
      id: 3,
      title: "How to boost your savings?",
      slug: "how_to_boost_your_savings",
      category: "Savings",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magnam ad soluta labore id numquam illo error!",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis magnam ad soluta labore id numquam illo error! Velit cum dolorum rerum fugiat excepturi voluptate, non explicabo, alias accusantium sapiente possimus placeat. Exercitationem perspiciatis vitae in consequatur quisquam dignissimos facere porro neque non ipsam sapiente dolores alias, culpa at nobis vero enim a maiores deleniti quasi similique mollitia harum fuga? Incidunt porro, sint repellendus recusandae impedit adipisci temporibus in asperiores deserunt beatae aliquid minima dolore provident odio et illum maiores quia! Iusto officia reprehenderit laudantium, consequuntur eligendi placeat laborum doloremque voluptates quia voluptate adipisci iure rerum dolores modi cupiditate quasi veniam!",
      date_posted: "2023-08-12",
      image: "/images/photo (57).jpg",
      author: {
        name: "Invest Ug",
        avatar: "/images/avatar.png",
      },
    },
  ];
  return (
    <div>
      <div className="flex-center-between flex-col sm:flex-row pb-2 border-b">
        <div className="flex-1 w-full sm:w-fit">
          <button className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2">
            <FiPlusCircle />
            <span>New Article</span>
          </button>
        </div>
        <div className="flex-1 w-full sm:w-fit">
          <div className="mt-2 relative">
            <BiSearchAlt className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              value={searchTerm}
              name="searchTerm"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 border-gray-300"
              placeholder="Search for articles"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div className="border rounded-lg overflow-hidden group">
            <div className="overflow-hidden group">
              <Link to={`articles/${article.slug}`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover h-[250px] w-full group-hover:scale-125 transition-a"
                />
              </Link>
            </div>
            <div className="p-3">
              <div className="flex-center-between">
                <p className="text-sm text-primary"># {article.category}</p>
                <p className="text-sm text-muted">2hrs ago</p>
              </div>
              <div className="mt-3">
                <Link
                  to={`articles/${article.slug}`}
                  className="group-hover:text-primary text-xl font-semibold"
                >
                  {article.title}
                </Link>
                <p className="text-muted mt-3">{article.description}</p>
              </div>
              <div className="mt-4 flex-align-center gap-x-3">
                <div>
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <h1>{article.author.name} </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterialList;
