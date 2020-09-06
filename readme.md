# drawshield
A simple utilization of the DrawShield.net API. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

## Installation
```sh
npm install --save drawshield
```


## Example
```js
const DS = require("drawshield");

// Create a new Client instance
const client = new DS.Client({
  dir: "./shields",
  save: true
});

// Create a few blazons
client.drawShield("azure, a fess argent", "./new-shields", "my-shield");
client.drawShield("gules, a five pointed star gold");
client.drawShield("quarterly I. and IV. gules a castle or II. and III. argent a lion rampant purpure");

// Asynchronously return the image data from a blazon
(async function() {
  let result = await client.drawShield("per cross gules and argent");
  console.log(result);
  // SVG Info
})();

// Asynchronously return the data from a term lookup
(async function() {
  let result = await client.fetchTerm("pall", "parker", "exact");
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

### `Client(options)`
The DrawShield Client instance.

#### Params

- **Object** `options`: An object containing the following fields:
 - `dir` (String): The directory in which images are saved
 - `save` (Boolean): Determines whether or not images are saved

### `Client.drawShield(blazon, dir, filename)`
Creates a blazon using DrawShield.net and saves it to a PNG file.

#### Params

- **String** `blazon`: The input using DrawShield.net's blazon format
- **String** `dir`: Specifies the directory in which the image will be saved, if needed
- **String** `filename`: Specifies the filename - if left blank, uses the blazon input

#### Return

- **Object**: The SVG image data in XML format

### `Client.fetchTerm(term, source, match)`
Returns the data from a heraldic term lookup.

#### Params

- **String** `term`: Heraldic term input
- **String** `source`: Specifies the heraldic dictionary to lookup from (parker, elvin)
- **String** `match`: Specifies the term matching type (exact, fuzzy)

#### Return

- **Object**: The term data object


## License

MIT © 2020 Kyle Prince
