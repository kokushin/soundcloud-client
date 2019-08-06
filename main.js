const {
  app,
  BrowserView,
  BrowserWindow
} = require('electron')

app.on('ready', () => {
  let width = 1020
  let height = 620
  let win = new BrowserWindow({
    width: width,
    height: height
  })
  win.on('closed', () => {
    win = null
  })

  let view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.setBrowserView(view)
  view.setBounds({
    x: 0,
    y: -22,
    width: width,
    height: height
  })
  view.webContents.loadURL('https://soundcloud.com/')
  view.setAutoResize({
    width: true,
    height: true
  })
})