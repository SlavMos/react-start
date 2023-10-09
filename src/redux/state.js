import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 10 },
      { id: 2, message: "My firs post", likesCount: 12 },
    ],
    newPostText: "Add post",
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Ed" },
      { id: 2, name: "Ash" },
      { id: 3, name: "Shot" },
      { id: 4, name: "Ars" },
      { id: 5, name: "Katya" },
    ],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Do you like me?" },
      { id: 4, message: "How much are you paying?" },
      { id: 5, message: "Che esor chem kyna dus qal" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};
export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export default state;
