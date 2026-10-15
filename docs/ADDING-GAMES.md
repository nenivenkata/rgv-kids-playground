# Add, edit, or remove a game

## Create a game folder and menu entry

From the project folder:

```cmd
npm run add-game -- animal-homes "Animal Homes" "Everyday learning"
```

Use a unique lowercase ID with hyphens. The command refuses existing IDs and folders. It copies templates/game/game.js into public/games/animal-homes/game.js and appends a public/games.json entry. Edit the title, icon, description, or category in that JSON file whenever needed. Keep valid JSON (no trailing comma).

## Write the rules

Open the generated game.js in your editor. Replace its example with:

```javascript
window.KidsGames['animal-homes'] = {
  create(c, level) {
    return c.quiz(
      'Which animal lives in a nest?',
      [c.text('🪺', 'A nest')],
      'bird',
      c.shuffle([
        { id: 'bird', ...c.text('🐦', 'bird') },
        { id: 'fish', ...c.text('🐟', 'fish') },
        { id: 'dog', ...c.text('🐶', 'dog') }
      ]),
      'Find the bird’s home.'
    );
  }
};
```

`create` is called for each of five rounds. Randomize content inside it for variety. `level` is `little` or `big`. The shared UI owns feedback, retries, narration, navigation, and rewards.

For a quiz, `answer` must exactly match one option value or one option's `id`, including its JavaScript type. Options must have unique IDs. Supply at least two options. Return an array of scene descriptors, or an empty array. `c.text(value, label)` creates accessible text or emoji; give pictures useful spoken labels. `c.swatch(color)` creates a color sample. Keep asset files in your game folder and reference them with paths relative to the page, such as games/animal-homes/bird.svg.

## Shared helpers

- c.pick(array), c.shuffle(array), c.int(min, max).
- c.choices(answer, possibleValues): creates up to three unique choices with the answer included. Supply enough alternatives.
- c.numbers(answer, max): chooses from 0 through max.
- c.quiz(prompt, scene, answer, options, hint).
- c.animals, c.fruit, c.colors, c.shapes, c.words: starter content.

Existing custom modes are memory, puzzle, and sequence. Their rendering lives in public/shared/app.js. A completely new interaction such as drawing or drag-and-drop requires adding a renderer there; creating a folder alone does not implement a new interaction type.

## Test and save

Run npm test. Start the app with npm start if it is not running. Refresh the browser; choose the new game, try correct and incorrect answers, finish, restart, and go home. Test both levels and keyboard controls. Save changes using git add ., git commit, and git push.

To remove a game from the menu, delete its entire object from public/games.json. You may then delete its folder. Do not edit other game folders. Keep children’s names, photos, passwords, and access keys out of the repository.
