# funda-test

The request was blocked by Cors. I used a chrome dependency to avoid this.
It took me about 10 hours. If I had a ready-made design, I would have spent less time.

# What i would like to add

# 1. I would make a separate folder for components that are used in many places in the project.
For example, I would move the modal window to this folder. The component would be located globally, would be called via vuex, and the content could be transmitted via a slot. I would do the same with such components as tables, selects, buttons and other components.

# 2. Move the navigation from the information block to a separate component.
It should be a separate block and also be used in other components. I would also add an active element when clicking on a navigation element, or when scrolling if you reach a certain block

# 3. Move a block of information to a separate component.
There are many of them, they are all similar. If a certain block would be different from the others, I would use a slot. Otherwise, if they were all different from each other, I would not create a separate component.

# 4. Google maps
If I were a user, I would like to see its location. I was working with Google Maps, but it would take me a long time to add them now.

# 5. Nuxt.js
Such sites must work with the SSR in order for users to see our ads.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
