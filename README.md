# Web-view

## Um simples visualizador web que fica sobreposto à outras janelas
esse projeto foi feito em Electronjs
___
### Configurando o projeto

Você pode começar criando alguns arquivos, nesse caso eu criei os seguindes

![arquivos](https://user-images.githubusercontent.com/50425715/82763884-36c05c00-9de1-11ea-89ea-53241bd6db46.PNG)

#### Configurando o package.json
Para criar seu `package.json`, basta abrir o console e digitar o seguinte

```js
npm init -y
```

#### Instalando o Electron
Agora que você tem seus arquivos você pode instalar o **Eletron**

```js
npm install electron
```
Você deve adicionar um `start: "electron ."` a seu `package.json`. Após isso seu package deve ficar assim
```json
{
  "name": "web-view",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "electron": "^9.0.0"
  }
}
```

### Iniciando o projeto

Em `index.js` você começara chamando o módulo que você instalou e o `config.js`
```js
const {app, BrowserWindow} = require('electron');
const config = require("./config.js");
```

Agora iremos criar uma função, para criar a janela
```js
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
```

Seu arquivo `config.js` deve estar assim:
```js
module.exports = {
    url:  "URL"
}
```

Você adicionará também o seguinte:
```js
app.whenReady().then(createWindow);
```
Para quando o `app` estiver pronto, ele criar a janela

### Configurações adicionais para MacOS

```js
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
```

Você pode encontrar o código resultante [aqui](https://github.com/DevRadhy/Web-view/blob/master/index.js)
___
### Resultado

Para iniciar seu projeto, basta por o seguinte comando no `cmd`
```js
npm start
```

Seu resultado deve ficar como esse

![image](https://user-images.githubusercontent.com/50425715/82765335-46916d80-9dec-11ea-867e-080c32a507bf.png)
