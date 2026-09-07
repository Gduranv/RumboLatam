import type { DestinoData, PaisData } from "@/types";

import { destino as canaima } from "./destinos/canaima";
import { destino as capillasDeMarmol } from "./destinos/capillas-de-marmol";
import { destino as ciudadPerdida } from "./destinos/ciudad-perdida";
import { destino as coloniaTovar } from "./destinos/colonia-tovar";
import { destino as ejeCafetero } from "./destinos/eje-cafetero";
import { destino as hierveElAgua } from "./destinos/hierve-el-agua";
import { destino as islaBallestas } from "./destinos/isla-ballestas";
import { destino as islaLarga } from "./destinos/isla-larga";
import { destino as jardinBotanicoCuritiba } from "./destinos/jardin-botanico-curitiba";
import { destino as lencoisMaranhenses } from "./destinos/lencois-maranhenses";
import { destino as montana7Colores } from "./destinos/montana-7-colores";
import { destino as oasisHuacachina } from "./destinos/oasis-huacachina";
import { destino as pedraDoTelegrafo } from "./destinos/pedra-do-telegrafo";
import { destino as santuarioLasLajas } from "./destinos/santuario-las-lajas";
import { destino as valleNevado } from "./destinos/valle-nevado";
import { destino as volcanVillarrica } from "./destinos/volcan-villarrica";
import { pais as argentina } from "./paises/argentina";
import { pais as brasil } from "./paises/brasil";
import { pais as chile } from "./paises/chile";
import { pais as colombia } from "./paises/colombia";
import { pais as mexico } from "./paises/mexico";
import { pais as peru } from "./paises/peru";
import { pais as repdominicana } from "./paises/repdominicana";
import { pais as venezuela } from "./paises/venezuela";

/**
 * Registro único de países y destinos.
 * Alimentado por las carpetas por entidad: `src/data/paises/{id}/index.ts`
 * y `src/data/destinos/{id}/index.ts` (S-03, S-04, S-05).
 */
const paises: Record<string, PaisData> = {
  argentina,
  brasil,
  chile,
  colombia,
  mexico,
  peru,
  repdominicana,
  venezuela,
};

const destinos: Record<string, DestinoData> = {
  canaima,
  "capillas-de-marmol": capillasDeMarmol,
  "ciudad-perdida": ciudadPerdida,
  "colonia-tovar": coloniaTovar,
  "eje-cafetero": ejeCafetero,
  "hierve-el-agua": hierveElAgua,
  "isla-ballestas": islaBallestas,
  "isla-larga": islaLarga,
  "jardin-botanico-curitiba": jardinBotanicoCuritiba,
  "lencois-maranhenses": lencoisMaranhenses,
  "montana-7-colores": montana7Colores,
  "oasis-huacachina": oasisHuacachina,
  "pedra-do-telegrafo": pedraDoTelegrafo,
  "santuario-las-lajas": santuarioLasLajas,
  "valle-nevado": valleNevado,
  "volcan-villarrica": volcanVillarrica,
};

export function getPais(id: string): PaisData | undefined {
  return paises[id];
}

export function getDestino(id: string): DestinoData | undefined {
  return destinos[id];
}

export function isValidPais(id: string): boolean {
  return id in paises;
}

export function isValidDestino(id: string): boolean {
  return id in destinos;
}

export function listPaises(): PaisData[] {
  return Object.values(paises);
}

export function listDestinos(): DestinoData[] {
  return Object.values(destinos);
}

export type { PaisData, DestinoData } from "@/types";