let fwefwefwefwefwe = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("error");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default fwefwefwefwefwe;
