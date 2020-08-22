import React from "react";

import Article from "../component_sub/Article";

import backend from "../firebase";
// Styles
// import { Button } from 'react-bootstrap';
import "../css/home.css";
import { useCollection } from "react-firebase-hooks/firestore";
//const { database, storage } = { ...backend };

function Home() {
  const [value, loading, error] = useCollection(
    backend.database.collection("articles"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  return (
    <div className="col-12 pb-4  ">
      <h3 className="card-title rounded">Recents Posts</h3>

      <div className="m-0 p-0 mt-2 col-12 article-container ">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            {value.docs.map((doc, i) => (
              <Article
                datas={doc.data()}
                id={doc.id}
                direction={i % 2 == 0 ? "left" : "right"}
              />
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

export default Home;
