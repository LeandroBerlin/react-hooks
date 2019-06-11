# Playing with Hooks

This repository contains some examples how to use React hooks and
how the same logic would be implemented in React class components or function component with hooks

Introduction slides: [ReactHooks.pdf](ReactHooks.pdf)

## The examples:
- A counter using a [class component with state](src/Ccomponents/ounterClass.js)  
- A counter using [the useState hook](src/components/CounterHooks.js)  

- A counter using [lifecycle methods](src/components/CounterClassWithLifecycle.js)
- A counter using [the useEffect hook](src/components/CounterWithEffect.js)

- A product list using a [class component with states](src/components/ProductListClass.js)  
- A product list [class component using hooks](src/components/ProductListHook.js) 


# What Are Hooks, Exactly?
"To understand Hooks, we need to take a step back and think about code reuse.  

Today, there are a lot of ways to reuse logic in React apps. We can write simple functions and call them to calculate something. We can also write components (which themselves could be functions or classes). Components are more powerful, but they have to render some UI. This makes them inconvenient for sharing non-visual logic. This is how we end up with complex patterns like render props and higher-order components. **Wouldn’t React be simpler if there was just one common way to reuse code instead of so many?**

Functions seem to be a perfect mechanism for code reuse. Moving logic between functions takes the least amount of effort. However, functions can’t have local React state inside them. You can’t extract behavior like “watch window size and update the state” or “animate a value over time” from a class component without restructuring your code or introducing an abstraction like Observables. Both approaches hurt the simplicity that we like about React.

Hooks solve exactly that problem. Hooks let you use React features (like state) from a function — by doing a single function call. React provides a few built-in Hooks exposing the “building blocks” of React: state, lifecycle, and context.

Since Hooks are regular JavaScript functions, you can combine built-in Hooks provided by React into your own “custom Hooks”. This lets you turn complex problems into one-liners and share them across your application or with the React community."

**Dan Abramov**  
[read the full article](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
