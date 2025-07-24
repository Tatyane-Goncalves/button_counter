## 🧮 Projeto Contador de clique 
> 🚧 Em construção

Um contador interativo feito com React, TypeScript, Shadcn/UI, como parte de um desafio de prática front-end para iniciantes.

## 🚀 Objetivo
Criar um componente chamado Contador que:

- Mostra um número inicial (começando do zero).
- Incrementa e decrementa esse número com um botão.
- Ao atingir 10, desativa o botão e exibe uma mensagem.

## ✨ Funcionalidades
- ✅ Valor inicial: 0
- ✅ Botão “Incrementar” que soma +1 a cada clique
- ✅ Botão “Decrementar” que soma +1 a cada clique
- ✅ Limite de cliques: 10
- ✅ Desativa o botão ao atingir o limite
- ✅ Mensagem de aviso quando atingir o máximo
- ✅ Botão "Resetar" que zera o contador e reativa o botão.

## 🚀 Tecnologias
- Vite
- React
- TypeScript
- Shadcn/UI
- Tailwind
- Biome


````bash
button_counter/
├── src
│   ├── components
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   │  
│   │   ├── ButtonDecrement
│   │   │    └── ButtonDecrement.tsx
│   │   │  
│   │   ├── ButtonIncrement
│   │   │    └── ButtonIncrement.tsx
│   │   │  
│   │   ├── ButtonReset
│   │   │    └── ButtonReset.tsx
│   │   │  
│   │   └─ Counter
│   │        └── Counter.tsx
│   ├── lib
│   │    └── utils.ts
│   │    
│   ├── App.tsx
│   ├── index.scss
│   └── main.tsx
│   
├── .gitignore
├── biome.jsonc
├── components.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.js
````

## 📦 Como rodar o projeto

1. Clone o repositório:
````bash
git clone hhttps://github.com/Tatyane-Goncalves/button_counter.git
````

2. Acesse a pasta do projeto:
````bash
cd button_counter
````

3. Instale as dependências:
````bash
npm install
````

4. Rode o projeto
````bash
npm run dev
````

## 🧪 Funcionalidades Extras (Se implementadas)
- ✨ Animação no número ao incrementar.

## 📸 Demonstração
> Em breve!

## 📚 Aprendizados
Este projeto foi criado para treinar os seguintes conceitos:

- Componentes funcionais no React
- Uso do useState
- Condicionais de renderização
- Estilização básica e responsividade
- Boas práticas de código e organização
- Utilização de TypeScript

## 🤝 Contribuição
Pull requests são bem-vindos! Siga os padrões de código, prefira nomes claros e descritivos, use tipagem explícita sempre que possível. Evite hardcoded, e priorize a reutilização do componente.

## ✍️ Autora
Made with 💜 by **Tatyane Gonçalves**

[Linkedin](https://www.linkedin.com/in/tatyanegoncalves/) | [GitHub](https://github.com/Tatyane-Goncalves)

---
## 🧠 Dica
> “Não importa o quão simples o projeto pareça — se você entendeu o que fez, já está evoluindo como dev!” 🚀