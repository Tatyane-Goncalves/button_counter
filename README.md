# 🧮 Projeto Contador React

Um contador interativo feito com React, como parte de um desafio de prática front-end para iniciantes.

---

## 🚀 Objetivo

Criar um componente chamado `Contador` que:
- Mostra um número inicial (começando do zero).
- Incrementa esse número com um botão.
- Ao atingir 10, desativa o botão e exibe uma mensagem.

---

## ✨  Funcionalidades

- ✅ Valor inicial: `0`
- ✅ Botão “Incrementar” que soma +1 a cada clique
- ✅ Limite de cliques: `10`
- ✅ Desativa o botão ao atingir o limite
- ✅ Mensagem de aviso quando atingir o máximo

---

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- SCSS (SCSS modules)
- JavaScript (ES6+)
- [Vite](https://vitejs.dev/) (para build e dev server rápido)

---

## 🧱 Estrutura do Projeto
```bash
product-card/
├── src
│   ├── images
│   │    └── preview.png
│   ├── components
│   │   ├── ButtonIncrement
│   │   │    ├──ButtonIncrement.jsx
│   │   │    └── ButtonIncrement.module.scss
│   │   ├── ButtonReset
│   │   │    ├──ButtonReset.jsx
│   │   │    └── ButtonReset.module.scss
│   │   └─ Counter
│   │        ├── Counter.jsx
│   │        └── Counter.module.scss
│   ├── styles
│   │     └── _variables.scss
│   ├── App.jsx
│   ├── index.scss
│   └── main.js
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

---

## 📦 Como rodar o projeto

1. Clone o repositório:

```bash
git clone hhttps://github.com/Tatyane-Goncalves/button_counter.git
```

2. Acesse a pasta do projeto:
```bash
cd button_counter
```

3. Instale as dependências:
```bash
npm install
```

4. Rode o projeto:
```bash
npm run dev
```
> Observação: Esse projeto foi iniciado com Vite. Se estiver usando CRA (Create React App), substitua o comando acima por ``npm start``.

---

## 🧪 Funcionalidades Extras (Se implementadas)
- 🔁 Botão "Resetar" que zera o contador e reativa o botão.
- ✨ Animação no número ao incrementar.
- 📘 Versão em TypeScript.

---

## 📸 Demonstração (opcional)
> Em breve...

---

## 📚 Aprendizados
Este projeto foi criado para treinar os seguintes conceitos:

- Componentes funcionais no React
- Uso do `useState`
- Condicionais de renderização
- Estilização básica e responsividade
- Boas práticas de código e organização

---

## 🤝 Contribuição
Pull requests são bem-vindos! Siga os padrões de código, prefira nomes claros e descritivos, use tipagem explícita sempre que possível. Evite hardcoded, e priorize a reutilização do componente. Estilos devem estar isolados usando `.module.scss` ou seguindo a metodologia `BEM`.

---

## ✍️ Autora
Made with 💜 by **Tatyane Gonçalves**

[Linkedin](https://www.linkedin.com/in/tatyanegoncalves/) | [GitHub](https://github.com/Tatyane-Goncalves)

---
## 🧠 Dica
> “Não importa o quão simples o projeto pareça — se você entendeu o que fez, já está evoluindo como dev!” 🚀