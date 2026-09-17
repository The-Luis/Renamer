import { app, BrowserWindow } from 'electron';

function createWindow() {
    //janela
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true,
        fullscreen: false,
        alwaysOnTop: false,
        autoHideMenuBar: true
    });

    janela.loadFile('index.html');
}

app.whenReady().then(createWindow); //inicia a porra toda