# JavaScript Number Tools

A collection of number tools inspired by Rails number helpers.

# Number.times() Method

Similar to Rail's `3.times` helper method.

```javascript
(3).times(function () {
  // do stuff 3 times
});
```

## Running the Tests

To run the tests, first you'll need Node.js installed, then install jasmine-node:

```bash
npm install jasmine-node -g
```

Then in the root of the folder, run:

```bash
jasmine-node spec/ --watch ./ --autotest
```
