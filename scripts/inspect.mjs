import fs from 'fs/promises';
import path from 'path';
import { log } from './utils.mjs';

/**
 * 🆕 NOVÁ FUNKCE: Analýza konkrétního souboru example/element.js
 */
async function analyzeElementFile() {
    // Cesta k souboru: aktuální složka + example + element.js
    const targetFile = path.join(process.cwd(), 'example', 'element.js');

    log.header("ANALÝZA SOUBORU");
    log.info(`Cíl: ${targetFile}`);

    try {
        // 1. Načíst obsah souboru jako text
        const content = await fs.readFile(targetFile, 'utf-8');
        const lines = content.split('\n');
        const GRAY = "\x1b[90m"; // Lokální barva pro číslování
        const RESET = "\x1b[0m";

        console.log(""); 
        lines.forEach((line, index) => {
            // Zarovnání čísel na 3 místa (např: "  1 |", " 12 |")
            const lineNum = String(index + 1).padStart(3, ' ');

            // Tady používáme přímo console.log, abychom neměli prefix [LOG] na každém řádku kódu
            console.log(`${GRAY}${lineNum} |${RESET} ${line}`);
        });

        console.log(""); // Prázdný řádek na konec

    } catch (err) {
        if (err.code === 'ENOENT') {
            log.error(`Soubor neexistuje! Zkontrolujte, zda máte složku 'example' a soubor 'element.js'.`);
        } else {
            log.error(`Chyba při čtení souboru: ${err.message}`);
        }
    }
}

// --- SPUŠTĚNÍ ---
(async () => {
    // Teď spouštíme jen konkrétní analýzu souboru
    await analyzeElementFile();

    log.header("HOTOVO");
})();