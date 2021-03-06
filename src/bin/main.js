import electron from 'electron';
import menuTemplates from './menu';

const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: 'ImgShack',
    // width: 337,
    // height: 700,
    // frame: false,
    // maximizable: false,
    // resizable: false,
  });

  Menu.setApplicationMenu(menuTemplates);
  // and load the index.html of the bin.
  mainWindow.loadURL(`file://${ __dirname }/../resource/index.html`);

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  mainWindow.on('‘ready-to-show', () => {
  });
  return mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
});

app.on('browser-window-created', function() {});
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the bin when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your bin's specific bin process
// code. You can also put them in separate files and require them here.
