const {app, BrowserWindow} = require('electron');
const config = require('./config.js');

function createWindow(){
   // cria uma janela
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      titleBarStyle: "hidden",
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: true
      }
    })
    // carega a URL em config.js
    win.loadURL(config.url)
  }

  app.whenReady().then(createWindow)
  
  app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
      createWindow()
    }
  })