// Title

# 🏀 Golden State Warriors Dashboard

## Tech Stack

- React
- Next.js
- Typescript
- Tailwind CSS

The reason that I used the tech stack above is those are technologies and frameworks that I wanna practice and get exposed more.

## Focus Design

For my primary focus, it will be more on the developer side rather than the user side. Due to the limited of time, I don't want to spend a lot of time in researching or trying to build an impressive and feature-rich UI. Instead, I'll lean toward creating the reusable and scalable codebase that will make future extensions or integration more quicker and easier.

## Api design

I created multiple custom hook and helper functions, aiming to reduce the redundancy because the implemention logic for all functions that fetch real data is pretty similar. So my goal is to have as much as reusable functions as possible, resulting in less code and less chance of having error in the component files that display real data.

## Resuable hooks

For any features that are used across multiple components and require lot of code to implement such as element detection or api calls, I always tried to put them in custom hooks to limit the amount of code I need to write, making it easy to update anything.

## Global Tailwind and Inline Tailwind

For the style, I chose the hybrid method, which combined both global and inline tailwind to style the application. Basically, my logic is that I only make a tailwind global if it is used by numerous components, such as size, background, and margin, in order to achieve consistency and make migrating to a new design easier. I only use inline tailwind when I know it will be utilized in a single component. The use of inline in this situation will make it easy to play around with or experience new styles for the specific component without having to go to the global file and then browse a bunch of unrelated styles to find the one I need.

## Utils

For the every files in the utils folder, the primary purpose is just to group everything that is used across the app such as functions, typescript interfaces, styles into one place.

## Context

For the context of the applicaiton, it will only store a single variable, which is the current active tab (profile, schedule, roster). The reason I used context is to make it accessible in multiple components so I can render and display the appropriate UI.
