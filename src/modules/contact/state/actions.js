const SEND_MESSAGE = 'contact/SEND_MESSAGE';
const SEND_MESSAGE_SUCCESS = 'contact/SEND_MESSAGE_SUCCESS';
const SEND_MESSAGE_FAIL = 'contact/SEND_MESSAGE_FAILURE';

const Types = {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
};

function sendMessage(name, email, category, message) {
  return {
    type: SEND_MESSAGE,
    data: {
      name,
      email,
      category,
      message,
    }
  }
}

export default {
  Types,
  sendMessage,
}
