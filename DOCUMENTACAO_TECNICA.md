# Documentação Técnica - Casa's Burger

## Visão Geral

O Casa's Burger é uma aplicação web responsiva desenvolvida para uma hamburgueria, construída com tecnologias modernas do ecossistema React. A aplicação apresenta um site institucional com funcionalidades de navegação, exibição de cardápio, informações de contato e integração com WhatsApp e Google Maps.

## Arquitetura do Projeto

### Estrutura de Diretórios

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes de interface (shadcn/ui)
│   ├── Hero.tsx        # Seção principal com call-to-action
│   ├── Navbar.tsx      # Barra de navegação
│   ├── Menu.tsx        # Seção do cardápio
│   ├── About.tsx       # Seção sobre a empresa
│   └── Contact.tsx     # Seção de contato e localização
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── lib/                # Utilitários e configurações
│   └── utils.ts        # Funções auxiliares
├── assets/             # Recursos estáticos (imagens)
├── hooks/              # Hooks customizados
└── main.tsx           # Ponto de entrada da aplicação
```

## Stack Tecnológica

### Core Framework
- **React 18.3.1**: Biblioteca principal para construção da interface de usuário
- **TypeScript 5.8.3**: Superset do JavaScript com tipagem estática
- **Vite 5.4.19**: Build tool e servidor de desenvolvimento

### Roteamento e Estado
- **React Router DOM 6.30.1**: Gerenciamento de rotas da aplicação
- **TanStack React Query 5.83.0**: Gerenciamento de estado do servidor e cache

### Interface e Estilização
- **Tailwind CSS 3.4.17**: Framework CSS utilitário para estilização
- **shadcn/ui**: Biblioteca de componentes baseada em Radix UI
- **Radix UI**: Componentes primitivos acessíveis e customizáveis
- **Lucide React 0.462.0**: Biblioteca de ícones SVG

### Componentes de Interface (Radix UI)
- **@radix-ui/react-accordion**: Componente de acordeão
- **@radix-ui/react-dialog**: Modais e diálogos
- **@radix-ui/react-dropdown-menu**: Menus suspensos
- **@radix-ui/react-navigation-menu**: Navegação estruturada
- **@radix-ui/react-popover**: Elementos flutuantes
- **@radix-ui/react-tabs**: Sistema de abas
- **@radix-ui/react-toast**: Notificações toast
- **@radix-ui/react-tooltip**: Dicas de ferramenta

### Utilitários e Formulários
- **React Hook Form 7.61.1**: Gerenciamento de formulários
- **@hookform/resolvers 3.10.0**: Resolvedores de validação
- **Zod 3.25.76**: Schema de validação TypeScript-first
- **clsx 2.1.1**: Utilitário para concatenação de classes CSS
- **tailwind-merge 2.6.0**: Merge inteligente de classes Tailwind

### Desenvolvimento e Qualidade
- **ESLint 9.32.0**: Linter para análise de código
- **TypeScript ESLint 8.38.0**: Regras específicas do TypeScript
- **PostCSS 8.5.6**: Processador CSS
- **Autoprefixer 10.4.21**: Adição automática de prefixos CSS

## Funcionalidades Implementadas

### 1. Navegação
- **Scroll Suave**: Navegação entre seções com animação suave
- **Menu Responsivo**: Barra de navegação adaptável a diferentes tamanhos de tela
- **Roteamento**: Sistema de rotas com React Router

### 2. Seções do Site

#### Hero Section
- Apresentação principal da marca
- Call-to-action para cardápio e pedidos
- Imagem de fundo responsiva
- Botões interativos com funcionalidades específicas

#### Cardápio
- Exibição de produtos em grid responsivo
- Cards com imagens, descrições e preços
- Efeitos hover para melhor interação
- Dados estáticos de produtos

#### Sobre
- Informações institucionais da empresa
- Estatísticas e números de destaque
- Grid de características da empresa
- Layout responsivo em duas colunas

#### Contato
- Informações de localização e horários
- Cards informativos com ícones
- Botões de ação para WhatsApp e Google Maps

### 3. Integrações Externas

#### WhatsApp Integration
- **Função**: `redirectToWhatsApp(phoneNumber, message?)`
- **Funcionalidade**: Redireciona para WhatsApp com número e mensagem pré-definidos
- **Implementação**: URL scheme do WhatsApp com parâmetros codificados
- **Número configurado**: 85 988865813

#### Google Maps Integration
- **Função**: `redirectToGoogleMaps(address)`
- **Funcionalidade**: Redireciona para Google Maps com endereço específico
- **Implementação**: API do Google Maps com query de busca
- **Endereço configurado**: "Uninassau Aguanambi Fortaleza"

### 4. Utilitários

#### Função de Scroll
- **Função**: `scrollToSection(sectionId)`
- **Funcionalidade**: Navegação suave entre seções da página
- **Implementação**: `scrollIntoView` com comportamento suave

#### Utilitários CSS
- **Função**: `cn(...inputs)`
- **Funcionalidade**: Merge inteligente de classes CSS com Tailwind
- **Implementação**: Combinação de `clsx` e `tailwind-merge`

## Configurações

### Vite Configuration
```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

### TypeScript Configuration
- **Target**: ES2020
- **Module Resolution**: Bundler
- **JSX**: React JSX
- **Strict Mode**: Desabilitado para flexibilidade
- **Path Mapping**: Alias "@" para diretório src

### Tailwind Configuration
- **Dark Mode**: Baseado em classes
- **Content**: Arquivos TypeScript e TSX
- **Theme**: Sistema de cores customizado com variáveis CSS
- **Plugins**: tailwindcss-animate para animações

## Scripts Disponíveis

```json
{
  "dev": "vite",                    // Servidor de desenvolvimento
  "build": "vite build",           // Build de produção
  "build:dev": "vite build --mode development", // Build de desenvolvimento
  "lint": "eslint .",              // Análise de código
  "preview": "vite preview"        // Preview da build
}
```

## Responsividade

A aplicação foi desenvolvida com abordagem mobile-first, utilizando:
- **Breakpoints Tailwind**: sm, md, lg, xl, 2xl
- **Grid System**: CSS Grid e Flexbox para layouts
- **Imagens Responsivas**: Aspect ratio e object-fit
- **Tipografia Escalável**: Tamanhos de fonte adaptativos

## Acessibilidade

- **Radix UI**: Componentes com suporte nativo a acessibilidade
- **Semântica HTML**: Estrutura semântica adequada
- **Navegação por Teclado**: Suporte completo a navegação via teclado
- **Contraste**: Cores com contraste adequado para leitura

## Performance

- **Vite**: Build tool otimizado para desenvolvimento rápido
- **Code Splitting**: Carregamento sob demanda de componentes
- **Tree Shaking**: Eliminação de código não utilizado
- **Imagens Otimizadas**: Compressão e formatação adequada

## Desenvolvimento

### Pré-requisitos
- Node.js 20.19.5 ou superior
- Bun (recomendado) ou npm/yarn

### Instalação
```bash
# Usando Bun (recomendado)
bun install

# Usando npm
npm install --legacy-peer-deps
```

### Execução
```bash
# Desenvolvimento
bun run dev

# Build de produção
bun run build

# Preview da build
bun run preview
```

## Estrutura de Dados

### Menu Items
```typescript
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}
```

### Configurações de Contato
- **Telefone**: (85) 98524-5668
- **WhatsApp**: 85 988865813
- **Endereço**: Av. Aguanambi, 251 - José Bonifacio, Fortaleza - CE
- **Horário**: Segunda a Domingo, 18h às 23h30

## Considerações de Manutenção

### Adição de Novos Produtos
1. Adicionar item no array `menuItems` em `Menu.tsx`
2. Incluir imagem correspondente em `src/assets/`
3. Atualizar import da imagem

### Modificação de Contatos
1. Atualizar informações em `Contact.tsx`
2. Modificar número do WhatsApp em `utils.ts`
3. Ajustar endereço do Google Maps conforme necessário

### Personalização Visual
1. Modificar variáveis CSS em `src/index.css`
2. Ajustar configurações do Tailwind em `tailwind.config.ts`
3. Personalizar componentes shadcn/ui conforme necessário

## Conclusão

Esta aplicação representa uma implementação moderna e profissional de um site institucional para hamburgueria, utilizando as melhores práticas de desenvolvimento web, com foco em performance, acessibilidade e experiência do usuário. A arquitetura modular permite fácil manutenção e expansão de funcionalidades futuras.
