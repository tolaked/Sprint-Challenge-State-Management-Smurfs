1. What problem does the context API help solve?

Context API solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions are payloads of information that send data from your application to your store. They are the only source of information for the store

-Reducers specify how the application's state changes in response to actions sent to the store

-store is the object that consolidates the actions and reducers

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local.
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   The Redux store, which is basically an object with some methods, works as a unified place to hold your application’s entire state tree
