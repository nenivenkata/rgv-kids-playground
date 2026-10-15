// Rename the example content below to make your own game.
// The add-game command substitutes animal-homes automatically.
window.KidsGames['animal-homes']={
  create(c,level){
    const word=level==='big'?'CAT':'DOG';
    return c.quiz('Which word matches this picture?',
      [c.text(word==='CAT'?'🐱':'🐶')],word,
      c.choices(word,['CAT','DOG','SUN']));
  }
};
