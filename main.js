const { app, BrowserWindow } = require('electron');

function createWindow() {

    const ventana = new BrowserWindow({
        width: 1200,
        height: 800
    });

    ventana.loadFile('frontend/index.html');
}

app.whenReady().then(() => {
    createWindow();
});