const aboutState = state => state.about;
const status = state => aboutState(state).status
const allAuthors = state => aboutState(state).authors;

export default {
  status,
  allAuthors,
}
