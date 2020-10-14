# drawshield
A simple utilization of the DrawShield.net API.

## Installation
```sh
npm install --save drawshield
```


## Example
```js
const { drawShield, fetchTerm } = require("drawshield");

// Create a few blazons
drawShield("azure, a fess argent", { dir: "./new-shields", filename: "my-shield" });
drawShield("gules, a five pointed star gold");
drawShield("quarterly I. and IV. gules a castle or II. and III. argent a lion rampant purpure");

// Asynchronously return the image data from a blazon
(async function() {
  let result = await drawShield("per cross gules and argent", { save: false });
  console.log(result);
  // SVG Info
})();

// Asynchronously return the data from a term lookup
(async function() {
  let result = await fetchTerm("pall", { source: "parker", match: "exact" });
  console.log(result);
  /* { 
   *    content: "Pall, (fr. pairle, which is also occasionally used by English heralds):",
   *    URL: "https://drawshield.net/reference/parker/p/pall.html",
   *    trueURL: "https://drawshield.net/define/pall&source=parker&match=exact"
   *    term: "pall",
   *    source: "parker",
   *    match: "exact"
   * } 
  */
})();
```


## Documentation

### `drawShield(blazon, options)`
Creates a blazon using DrawShield.net and saves it to a PNG file.

#### Params

- **String** `blazon`: The input using DrawShield.net's blazon format
- **Object** `options`: An object containing the following fields:
  - `dir` (String): Specifies the directory in which the image will be saved, if needed
  - `filename` (String): Specifies the filename - if left blank, uses the blazon input
  - `save` (Boolean): If the file shouldn't be saved

#### Return

- **Object**: The SVG image data in XML format

### `fetchTerm(term, options)`
Returns the data from a heraldic term lookup.

#### Params

- **String** `term`: Heraldic term input
- **Object** `options`: An object containing the following fields:
  - `source` (String): Specifies the heraldic dictionary to lookup from (parker, elvin)
  - `match` (String): Specifies the term matching type (exact, fuzzy)

#### Return

- **Object**: The term data object


## License

MIT © 2020 Kyle Prince
