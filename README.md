<h1 align="center">
  🎁 Romantic Surprise Template
</h1>

<p align="center">
  Uma página web interativa, animada e totalmente personalizável para presentear quem você ama. <br>
  Perfeita para aniversários, dia dos namorados ou datas especiais.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-Love-ff4d6d?style=for-the-badge&logo=heart" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
</p>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#config">Como Configurar</a> •
  <a href="#instalar">Instalação</a> •
  <a href="#deploy">Deploy</a>
</p>

---
<div id="funcionalidades"></div>
## ✨ Funcionalidades

* ❤️ **Configuração via JSON:** Todo o conteúdo (textos, fotos, datas) é editável em um único arquivo.
* 🎵 **Player de Música:** Autoplay inteligente com botão de volume e controle.
* ⏳ **Contador de Tempo:** Calcula automaticamente há quanto tempo vocês estão juntos.
* 📸 **Carrossel Infinito:** Uma faixa de memórias que se move suavemente.
* 📱 **Mobile First:** Design responsivo com suporte a gestos e "toque para iniciar" (necessário para áudio no iPhone).
* 🎉 **Efeitos Especiais:** Corações flutuantes, Exibição de itens ao visualizar com fadein, Chuva de corações, animação de digitação e explosão de confetes.

---
<div id="config"></div>
## 🛠 Configuração Fácil

Você não precisa editar código complexo. Basta alterar o arquivo `config.json` na raiz do projeto.

### 1. Adicione suas Mídias
Coloque suas fotos e música dentro da pasta `files/`.
> **Dica:** Converta seu áudio para **.mp3** para garantir compatibilidade total com todos os celulares.

### 2. Edite o `config.json`
Abaixo está a explicação de cada campo:

```json
{
  "title": "Feliz Aniversário Amor!",    // Título que aparece na aba do navegador
  "titlePage": "1.9 da fulana",          // Título principal que aparece na tela (acima do coração)
  "imagens": [                           // Lista das fotos do carrossel
    "./files/foto1.jpg",
    "./files/foto2.jpg",
    "./files/foto3.jpg"
  ],
  "dataInicio": "2023-11-29T00:00:00",   // Data de início (Formato: AAAA-MM-DDTHH:MM:SS)
  "tituloTexto": "Feliz Aniversário!",   // Texto com efeito de máquina de escrever
  "tempoInicial": 15,                    // Em qual segundo a música deve começar
  "imgWidth": 400,                       // Largura das imagens (em pixels)
  "initialVolume": 0.5,                  // Volume inicial (0.0 a 1.0)
  "particleCount": 40,                   // Quantidade de corações voando no fundo
  "motivos": [                           // Frases que ficam trocando automaticamente
    "Sua alegria contagiante",
    "Sua risada única",
    "O jeito que você me olha"
  ],
  "spotifyImage": "./files/capa.jpg",    // Imagem da "capa do álbum" no player
  "musicType": "audio/mpeg",             // Use "audio/mpeg" para MP3 ou "audio/webm" para WEBA
  "audioSrc": "./files/musica.mp3",      // Caminho do arquivo de áudio
  "destinatario": "Fulana ❤️",           // Nome no cabeçalho da carta
  "assinatura": "Com carinho, Fulano ❤️",// Assinatura no rodapé da carta
  "cartaTexto": "Escreva aqui sua mensagem.<br><br>Use br para pular linhas." // Texto do modal
}
```
---

<div id="instalar"></div>
## 🚀 Instalação Local

> [!WARNING]
> **Atenção:** Como este projeto consome dados de um arquivo JSON externo, ele **não funcionará** se você apenas abrir o `index.html` diretamente (devido a políticas de segurança CORS).

Você precisa simular um servidor local. Escolha a opção que preferir:

### 💻 Opção A: VS Code (Recomendado)
1. Instale a extensão **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**.
2. Clique com o botão direito no arquivo `index.html`.
3. Escolha a opção **Open with Live Server**.

### 🐍 Opção B: Python
Se você já tem Python instalado, abra o terminal na pasta do projeto e execute:

```bash
python -m http.server
```
Depois, acesse `http://localhost:8000` no seu navegador.

---

<div id="deploy"></div>
## ☁️ Deploy (Como colocar na internet)

A maneira mais simples e gratuita é através da **[Vercel](https://vercel.com)**.

1.  Crie uma conta na **Vercel**.
2.  Conecte sua conta do GitHub e clique em **Add New Project**.
3.  Importe este repositório.
4.  A Vercel detectará as configurações automaticamente. Clique em **Deploy**.

> 🎉 **Pronto!** Você receberá um link (ex: `juliaday.vercel.app`) para compartilhar.

---

## 🤝 Créditos e Tecnologias

* 🟢 **Animações:** [GSAP (GreenSock)](https://greensock.com/)
* 🎊 **Efeitos:** [Canvas Confetti](https://github.com/catdad/canvas-confetti)
* 🎨 **Ícones:** [FontAwesome](https://fontawesome.com/)

---

<p align="center">
  Feito com todo ❤️ do mundo
</p>
