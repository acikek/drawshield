const fs = require("fs");
const svgToImg = require("svg-to-img");
const axios = require("axios");

/**
 * Generates a blazoned shield and saves it to a PNG file.
 * 
 * @param {String} blazon 
 * @param {Object} [options]
 * @param {String} [options.dir="./blazons"]
 * @param {String} [options.filename]
 * @param {Boolean} [options.save]
 * @returns {Buffer} Image buffer
 */

async function drawShield(blazon, { dir = "./blazons", filename, save }) {
  let svg = await axios.get(`https://drawshield.net/include/drawshield.php?size=500&blazon=${encodeURIComponent(blazon)}`);
  svg = svg.data.replace(`id="test1"`, `id="test1" visibility="hidden"`).replace(`id="release-id"`, `id="release-id" visibility="hidden"`);
  let image = await svgToImg.from(svg).toPng();

  if (save != false) {
    fs.writeFileSync(`${dir}/${filename || blazon.replace(/ /g, "-").replace(/,/g, "")}.png`, image);
  }

  return image;
}

/**
 * Returns the data from a DrawShield.net term.
 * 
 * @param {String} term 
 * @param {Object} [options]
 * @param {String} [options.source]
 * @param {String} [options.match]
 * @returns {Object} Data object
 */

async function fetchTerm(term, { source, match }) {
  let src = source ? `&source=${source.toLowerCase()}` :  "";
  let m = match ? `&match=${match.toLowerCase()}` : "";

  let result = await axios.get(`https://drawshield.net/api/define/${term}${src}${m}`);
  if (result.data.error) throw new Error(result.data.error);

  return {
    content: result.data.content,
    URL: result.data.URL,
    trueURL: `https://drawshield.net/api/define/${term}${src}${m}`,
    term: term.toLowerCase(),
    source: source ? source.toLowerCase() : null,
    match: source ? match.toLowerCase() : null
  };
}

module.exports = { drawShield, fetchTerm }; 