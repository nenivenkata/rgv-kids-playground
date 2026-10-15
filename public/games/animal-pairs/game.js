// This file owns the game rules. Shared UI lives in public/shared/app.js.
window.KidsGames['animal-pairs']={create(c,level){const big=level==='big';return {mode:'memory',prompt:'Who belongs together?',hint:'Turn over two cards to find a matching pair.',deck:c.memoryDeck(big?6:3)};}};
