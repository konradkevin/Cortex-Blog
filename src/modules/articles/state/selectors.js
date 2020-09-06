const articlesState = state => state.articles;
const status = state => articlesState(state).status;
const allArticles = state => articlesState(state).articles;

export default {
  status,
  allArticles,
}
