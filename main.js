import { Macevalac, Carobnjak } from "./heroj.js";
import { Mac, Koplje, Carolija } from "./oruzje.js";
import { Zmaj, Pauk } from "./cudoviste.js";
import { Borba } from "./borba.js";

let heroj = new Macevalac();
let heroj1 = new Macevalac();
let wpn1 = new Koplje("Javelin");
let wpn2 = new Mac("Excalibur");

let monster = new Pauk("Nogati");
let monster1 = new Zmaj("Ghidorah");

//metoda za uzimanje oruzja
// heroj.uzmiOruzje(wpn1);
//heroj.uzmiOruzje(wpn2);

//metoda za davanje oruzja drugom heroju
// heroj1.uzmiOruzje(heroj.dajOruzje(1));

//metoda za bacanje oruzja
// heroj.baciOruzje(1);

let fight1 = new Borba(heroj, monster);
//metoda za borbu
// fight1.Fight();
