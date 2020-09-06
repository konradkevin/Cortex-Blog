const contactState = state => state.contact;
const status = state => contactState(state).status;

export default {
  status,
}
