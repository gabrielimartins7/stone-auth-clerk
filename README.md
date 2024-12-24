# Stone Auth Clerk

Um aplicativo que realiza autenticação com o Google e exibe uma lista.

## Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **Clerk**

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 14 ou superior)
- **Expo CLI**
- **Git**

## Clonando o Repositório

Para clonar o repositório, execute o seguinte comando:

```bash
git clone https://github.com/gabrielimartins7/stone-auth-clerk.git
```

### Instalando as Dependências

Navegue até o diretório do projeto e instale as dependências utilizando o npm ou yarn:

```bash
cd stone-auth-clerk
npm install
# ou
yarn install
```
### Executando o Projeto
Após a instalação das dependências, inicie o servidor de desenvolvimento do Expo:
```bash
expo start
```
Isso abrirá uma janela no seu navegador com opções para rodar o aplicativo em um emulador ou dispositivo físico.

### Configuração do Clerk
Antes de executar o aplicativo, certifique-se de configurar o Clerk corretamente:

- Crie uma conta no Clerk e configure um novo projeto.
- Obtenha suas credenciais de API do Clerk.
- Crie um arquivo .env na raiz do projeto e adicione suas credenciais:

```env
CLERK_FRONTEND_API=<sua_clerk_frontend_api>
CLERK_API_KEY=<sua_clerk_api_key>

```

### Estrutura do Projeto
A estrutura principal do projeto é a seguinte:

stone-auth-clerk/
├── assets/
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   └── App.tsx
├── .env
├── app.json
├── package.json
└── tsconfig.json
