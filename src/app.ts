import {app, BrowserWindow, ipcMain} from 'electron';

let win: Electron.BrowserWindow;

app.on('ready', e => {
    win = new BrowserWindow({
        show: false
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.on('ready-to-show', e => {
        win.show();
    });
    win.on('close', e => { app.quit(); });
});