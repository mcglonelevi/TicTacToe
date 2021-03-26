# Levi's Tic Tac Toe Submission

## Architecture

I have to follow TDD for this project which requires defining the architecture up front. I like to test as I code, so this is a bit different for me. I strongly believe that business logic needs to be isolated in models. To satisfy tracking of state and history, I'll be writing a hook that exposes a few methods that will be used by the view. We'll track the moves as an array of cooardinates in state. Determining the winner and converting those coordinates to a nice array to be used by the view will be handled by a board class.

I'll test the hook with hooks testing library and I'll use vanilla jest tests for the board model. I typically prefer React Testing Library for my component tests, but I am down to learn Enzyme. :shrug: :)
