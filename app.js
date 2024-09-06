var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello from Vue.js!',
    rooms: [
      {
        name: "經濟雙人房",
        eng: "Economy Double Room",
        price: 7000
      },
      {
        name: "海景三人房",
        eng: "Sea View Triple Room",
        price: 7800
      }
    ]
  }
});