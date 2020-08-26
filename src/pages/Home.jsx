import React from "react";

import Article from "../component_sub/Article";

import backend from "../firebase";
// Styles
// import { Button } from 'react-bootstrap';
import "../css/home.css";
import { useCollection } from "react-firebase-hooks/firestore";
//const { database, storage } = { ...backend };

function Home() {
  const [visibleArticles, setVisibleArticle] = React.useState([]);

  React.useEffect(() => {
    backend.database
      .collection("articles")
      .where("publied", "==", true)
      .get()
      .then((articles) => {
        articles.forEach((article) => {
          setVisibleArticle([{ data: article.data(), id: article.id }]);
        });
      });
  }, []);
  console.log(visibleArticles);
  return (
    <div className="col-12 pb-4  ">
      <h3 className="card-title rounded">Recents Posts</h3>

      <div className="m-0 p-0 mt-2 col-12 article-container ">
        {visibleArticles.map((doc, i) => {
          return <Article data={doc.data} id={doc.id} direction={i % 2 == 0 ? "left" : "right"} />;
        })}
      </div>
    </div>
  );
}

export default Home;
