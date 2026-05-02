# context api

we can pass the data directly to any component by avoiding props drilling

1. create a context
```
const createContext() = createContext()
```
2. provider
```
<createContext().Provider value={state or updatestate of function which i want to pass }>
{children}
</userContext.Provider>
```
3. Use context

use the data in the component by applying usecontext() Hook

4. Wrap the component inside the provider




# interview questions 
1. react and its feature virtual dom (recosolation and difing algorthum)
2. single page application and why react spa?
3. jsx and babel**
4. one way data binding
5. explain state and props 
6. difference b/w state and props 
7. life cycle methods only that 3 methods state not code 
8. how to manage state in react by using usestate hook(example like dark and light theme type) 
9. how useeffect hook replace life cycle method 
10. how to fetch api in use effect
11. *****create two counter button when you click on the first button the pop up appear every time 
when you click on te second buuton the pop up will not appear only the counter will increase *****
12. how to perform routing in react . create four pages and perform routing(only app.jsx path elements and link)
13. *** explain form handling in react , synthatic event , prevent default ,display the data ******
14. what are the disadventages of props driling and how to overcome it in react 
15. *****explain context api and how to pass data by using context api ******

