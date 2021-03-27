# Levi's Tic Tac Toe Submission

## How to Run the Project

This project is just based off of create react app. The usual commands apply:

Pull down the dependencies with `yarn install`

Start the project with `yarn start`

Test the project with `yarn test`

## Overall Architecture

I isolated the validation and business logic using a model in src/models/Board.js.  The Board provides some generic functionality for building the board from a series of moves, some basic error checking, determining a winner/tie, etc.

When I design custom hooks, I think about the hook interface in terms of the data and the way that data can change. I wrote a hook called useTicTacToe to track the moves in state and expose the stuff we care about to the view. It exposes the board, back/reset functionality, a move function, as well as a few helper properties for determining the game state (playing, tied, who won) and whose turn it is.

The main premise of the interaction between the hook and model is that we can just store a basic array of coordinates. By convention, we assume the X player goes first, so we can calculate the player that made the turn based on even and odd numbered coordinates. It made the back and reset functionality just a few short lines.

## Component Architecture

I purposefully kept the components small and light. They're all pretty small functional components.

## Style and Styling Choices

I am not a designer, but I tried to make the app look aesthetically okay. I added some really basic responsive styling. I tested the app on my phone and desktop, and I think it should work on most browsers and mobile devices. I just used CSS to keep things simple. Styled components seemed overkill for such a simple app, but I'd probably reach for those if I was building something much larger -- the advantages of those libraries scale in larger apps.

## Testing Philosophy

I don't use enzyme at work or in personal projects. I more-or-less subscribe to the Kent Dodds philosophy of testing and use React Testing Library. That said, I enjoyed learning a new testing tool, and I left a comment on a test or two to explain some reasoning why I tested the components in the way that I did. In general, I don't like shallow rendering, so I treated most of my component "unit" tests as integration tests in that I don't shallow render. Kent Dodds has some great blog posts about testing that I generally agree with:

https://kentcdodds.com/blog/why-i-never-use-shallow-rendering
https://kentcdodds.com/blog/testing-implementation-details

For the hook tests, I chose to use React Hooks Testing Library. It also happens to be inspired by Kent Dodds, and I really like the library for what it does. I just used vanilla Jest for testing the model.
