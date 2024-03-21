import { CICALISTA } from "./adat.js";
import { kepekDivbeHelyezese } from "./fuggvenyek.js";
import { kivalasztott } from "./fuggvenyek.js";
import { veletlenMegmutat } from "./fuggvenyek.js";

const TARTALOM = document.querySelectorAll(".tartalom")[0];
TARTALOM.innerHTML += kepekDivbeHelyezese(CICALISTA);

const DIVEK = document.querySelectorAll(".kepek");
kivalasztott(DIVEK);


veletlenMegmutat();