// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');

// Various appliation configuration constants.
const APP_CONFIG = {
    SERVER_PORT: 9001
};

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const GLOBALS = {
    app: app,
    server: require('./server.js').Server,
    mainWindow: null
};

// Creates the application window.
const createWindow = () => {
  // Create the browser window.
  let window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        webSecurity: false
      }
    });

  // Open the DevTools.
  window.webContents.openDevTools()

  // Emitted when the window is closed.
  window.on('closed',() => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    GLOBALS.mainWindow = null;
  });

  // Return a reference to the window we just created
  return window;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
GLOBALS.app.on('ready', () => {
    GLOBALS.server.listen(APP_CONFIG.SERVER_PORT, () => {
        console.log(`Example app listening on port ${APP_CONFIG.SERVER_PORT}!`);
        GLOBALS.mainWindow = createWindow();
        GLOBALS.mainWindow.loadFile('src/index.html');
        //GLOBALS.mainWindow.loadURL('http://localhost:9001/');
    });
});

// Quit when all windows are closed.
GLOBALS.app.on('window-all-closed',() => {
  GLOBALS.app.quit();
});