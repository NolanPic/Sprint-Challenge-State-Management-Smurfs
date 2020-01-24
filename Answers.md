1. What problem does the context API help solve?

`Prop drilling, mainly.`

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Store — The store holds an application's state. Rather than having state scattered throughout an application's components, the store becomes the 'single source' for state in an application.
Actions — An action describes a change that needs to be made to the application's state (held in the store) by way of an action type (description) and an action payload (data)
Reducers — A reducer takes an action as an input, and makes updates to the application's state in the store.`

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

`Application state is state that needs to be used throughout an application, in multiple components. Component state is state that is only needed by that component. A good time to use component state is for controlled inputs. A good time to use application state is for storing a logged-in user object.`

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`Redux Thunk allows us to intercept an action before it gets sent to the reducer. By using returning a  function rather than an object in an action creator, Thunk can intercept the action and allow the developer to run async JS.`

5. What is your favorite state management system you've learned and this sprint? Please explain why!

`Context is great in that it is much simpler to set up and makes more sense for smaller apps. However, I can see how Redux (especially with hooks) would be incredibly powerful on a larger app.`