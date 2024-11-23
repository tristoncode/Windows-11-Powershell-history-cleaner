const fs = require("fs");

const windowsUsername = process.env.USERNAME;
// Change the current working directory
process.chdir(
  `C:\\Users\\${windowsUsername}\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\`
);
// Write to file in the current working directory
fs.writeFile("ConsoleHost_history.txt", "", (err) => {
  if (err) {
    console.error("Error reading file:", err);
  }
});

console.log(`                                                          
88888888ba,      ,ad8888ba,    888b      88  88888888888  
88      \`"8b    d8"'    \`"8b   8888b     88  88           
88        \`8b  d8'        \`8b  88 \`8b    88  88           
88         88  88          88  88  \`8b   88  88aaaaa      
88         88  88          88  88   \`8b  88  88"""""      
88         8P  Y8,        ,8P  88    \`8b 88  88           
88      .a8P    Y8a.    .a8P   88     \`8888  88           
88888888Y"'      \`"Y8888Y"'    88      \`888  88888888888`);

console.log("\nPowershell history cleared!\nPress any key to exit...");
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", () => {
  console.log("Exiting...");
  process.exit();
});

/// to create .exe file run: pkg .
