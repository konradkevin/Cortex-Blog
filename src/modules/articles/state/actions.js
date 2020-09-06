const LOAD_ARTICLES = 'articles/LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'articles/LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_FAIL = 'articles/LOAD_ARTICLES_FAIL';

const Types = {
  LOAD_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAIL,
};

function loadArticles() {
  return {
    type: LOAD_ARTICLES,
  }
}

export default {
  Types,
  loadArticles,
}
