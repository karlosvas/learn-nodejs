// .js por defecto utiliza CommonJS.
// .mjs Tambien puedes utilizar es Modules.
// .cjs Para utilizar CommonJS.

// Este ejemplo es CommonJS Require Module
const {sum} = require('./sum.mjs')
console.log(sum(1,2))
import {sum} from `./sum.msj`