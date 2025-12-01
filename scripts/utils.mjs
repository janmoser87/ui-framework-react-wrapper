// --- 🎨 ANSI COLORS SETUP (Zero Dependency) ---
const style = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    fg: {
        red: "\x1b[31m", green: "\x1b[32m", yellow: "\x1b[33m",
        blue: "\x1b[34m", cyan: "\x1b[36m", white: "\x1b[37m", gray: "\x1b[90m",
    },
    bg: {
        red: "\x1b[41m", green: "\x1b[42m", blue: "\x1b[44m", cyan: "\x1b[46m",
    }
}

// Pomocná funkce pro čas (volitelné, pro profi pocit)
const time = () => `${style.fg.gray}${new Date().toLocaleTimeString()}${style.reset}`;

export const log = {
    // ❌ CHYBA - Červená
    error: (msg) => {
        console.log(`${time()} ${style.fg.red}${style.bright}[ ERROR ]${style.reset} ${msg}`);
    },

    // ✅ ÚSPĚCH - Zelená
    success: (msg) => {
        console.log(`${time()} ${style.fg.green}${style.bright}[SUCCESS]${style.reset} ${msg}`);
    },

    // ⚠️ VAROVÁNÍ - Žlutá
    warn: (msg) => {
        console.log(`${time()} ${style.fg.yellow}${style.bright}[ WARN  ]${style.reset} ${msg}`);
    },

    // ℹ️ INFO - Tyrkysová
    info: (msg) => {
        console.log(`${time()} ${style.fg.cyan}${style.bright}[ INFO  ]${style.reset} ${msg}`);
    },

    // 📝 LOG - Šedá/Bílá
    log: (msg) => {
        console.log(`${time()} ${style.fg.gray}${style.bright}[  LOG  ]${style.reset} ${msg}`);
    },

    // 📊 TABULKA - Nativní
    table: (data) => console.table(data),

    // 🏷️ HLAVIČKA - Moderní "Badge" styl
    header: (msg) => {
        console.log(`\n${style.bg.blue}${style.fg.white}${style.bright}  ${msg.toUpperCase()}  ${style.reset}\n`);
    },
}