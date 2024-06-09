# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To run this chat application locally, clone the github repo locally, in terminal run:

npm install
npm run dev

The application should open up on http://localhost:5173/

Features built: 
- create one or more chats with users
- type, send and receive messages

Features left to implement:
- delete chats
- add timestamps to messages

Design decisions:

![chat-app](https://github.com/pchetia24/chat-app/assets/78832058/b8146003-78d0-40c2-99a7-fb7c0d9fad6d)

- used react and js
- used useState hook for maintaining app state

Futher TODOs and improvements:

- I would write cypress tests if time permitted
- I made the application responsive however I could 
have added @media css tags for multiple screen dimensions
- while enter on submit works for destop, laptop, it may be
a better user experience to have a send button for mobile and ipad.
- the scroll implementation on the chat component isn't working,
  even though I set overflow: auto. If time permitted I would have debugged it.
- would have made further improvements on css, html such as accessibility aria roles/ labels
- I would have also added a highlight on selecting the user to chat with to
  make it the selection visible.
