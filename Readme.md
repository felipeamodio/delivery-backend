
# Sistema de Entregas - Backend

  

Este é o backend para um sistema de gerenciamento de entregas, construído com Node.js, Express e MongoDB. O sistema permite cadastrar, consultar, atualizar e excluir entregas, com informações como nome do cliente, data de entrega, ponto de partida e chegada.

  

## Tecnologias Utilizadas

  

-  **Node.js** - Ambiente de execução

-  **TypeScript** - Superset de JavaScript com tipagem estática

-  **Express** - Framework web

-  **Mongoose** - ODM para MongoDB

-  **MongoDB** - Banco de dados

  

## Requisitos

  

- Node.js (v14+)

- MongoDB (instalado localmente ou conta no MongoDB Atlas)

  

## Instalação

  

1. Clone o repositório:

```bash

git clone https://github.com/felipeamodio/delivery-backend

cd delivery-backend

```

  

2. Instale as dependências:

```bash

npm  install

```

  

3. Configure as variáveis de ambiente ou crie um arquivo `.env` na raiz do projeto:

```

PORT=5001

MONGO_URI=mongodb://localhost:27017/delivery-system

GOOGLE_MAPS_API_KEY=sua_chave_api

```

  

## Configuração do MongoDB

  

O sistema necessita de uma conexão com MongoDB para funcionar corretamente. Você tem duas opções:

  

### Opção 1: MongoDB Local

  

1. Instale o MongoDB Community Edition:

- [Instruções para Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

- [Instruções para macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

- [Instruções para Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

  

2. Inicie o serviço MongoDB:

- Windows: `mongod` (em um terminal separado)

- macOS: `brew services start mongodb-community`

- Linux: `sudo systemctl start mongod`

  

3. A conexão utilizará a URI padrão: `mongodb://localhost:27017/delivery-system`

  

### Opção 2: MongoDB Atlas (Nuvem)

  

1. Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. Configure um cluster (a versão gratuita é suficiente)

3. Obtenha a string de conexão e substitua no arquivo `.env` ou em `config.ts`

  

## Estrutura do Projeto

  

```

src/

├── controllers/ # Controladores das rotas

├── interfaces/ # Interfaces TypeScript

├── models/ # Modelos Mongoose

├── routes/ # Rotas da API

├── server.ts # Ponto de entrada da aplicação

└── config.ts # Arquivo de configuração

```

  

## API Endpoints

  

### Entregas

  

| Método | Endpoint | Descrição |

**| GET |** /api/deliveries | Listar todas as entregas |

**| GET |** /api/deliveries/:id | Buscar entrega por ID |

**| POST |** /api/deliveries | Criar nova entrega |

**| PUT |** /api/deliveries/:id | Atualizar entrega |

**| DELETE |** /api/deliveries/:id | Remover entrega |

  

## Modelo de Dados

  

### Delivery (Entrega)


```typescript

{

clientName: string; // Nome do cliente

deliveryDate: Date; // Data de entrega

startPoint: {

address: string; // Endereço de origem

coordinates: {

lat: number; // Latitude

lng: number; // Longitude

}

};

endPoint: {

address: string; // Endereço de destino

coordinates: {

lat: number; // Latitude

lng: number; // Longitude

}

};

createdAt: Date; // Data de criação (automático)

}

```

  

## Executando o Projeto

  

```bash

# Modo de desenvolvimento (com auto-reload)

npm  run  dev

  

# Compilação

npm  run  build

  

# Modo de produção

npm  start

```

  

## Solução de Problemas

  

### Erro de Conexão com MongoDB

  

Se você receber um erro como `MongooseServerSelectionError: connect ECONNREFUSED`, verifique:

  

1. Se o MongoDB está instalado e rodando corretamente

2. Se você está usando MongoDB Atlas, verifique se a URL de conexão está correta

3. Se seu endereço IP está autorizado a acessar o cluster (no caso do MongoDB Atlas)

4. Se não há firewall bloqueando a porta 27017

 
