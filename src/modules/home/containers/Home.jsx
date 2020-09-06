import React, {useEffect} from "react";

import {ArticleComponent} from "../../articles";

// Styles
import "./Home.css";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Statuses} from "../../articles/state/reducers";
import {ArticlesSelectors, ArticlesActions} from "../../articles";

//const { database, storage } = { ...backend };

function Home(props) {
  const { articles, loadArticles } = props;

  useEffect(() => {
    loadArticles()
  }, []);

  return (
    <div className="col-12 pb-4  ">
      <h3 className="card-title rounded">Recents Posts</h3>

      <div className="m-0 p-0 mt-2 col-12 article-container ">
        {articles.map(ArticleComponent)}
      </div>
    </div>
  );
}

export const ArticleShape = {
  id: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string.isRequired),
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
  picture: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  created: PropTypes.string.isRequired,
  edits: PropTypes.arrayOf(PropTypes.string.isRequired),
  language: PropTypes.string.isRequired,
  last_edit: PropTypes.string.isRequired,
  primary_image: PropTypes.string.isRequired,
  publied: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.object.isRequired,
};

Home.propTypes = {
  status: PropTypes.oneOf(Object.values(Statuses)),
  articles: PropTypes.arrayOf(PropTypes.shape(ArticleShape)),
  loadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: ArticlesSelectors.status(state),
  articles: ArticlesSelectors.allArticles(state),
});

const mapDispatchToProps = dispatch => ({
  loadArticles: () => dispatch(ArticlesActions.loadArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
