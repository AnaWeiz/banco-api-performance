
## Testes de Performance com K6

Repositório dedicado à realização de testes de performance utilizando **JavaScript** e a ferramenta **[K6]**.  
Os testes foram desenvolvidos para validar a estabilidade, tempo de resposta e capacidade de carga de endpoints da API do projeto **Banco API**.

---

## Introdução

O objetivo deste projeto é simular cenários de carga em endpoints REST, garantindo que a API suporte um determinado número de requisições simultâneas sem perda significativa de desempenho.

---

## Tecnologias Utilizadas

- **[K6](https://k6.io/):** Ferramenta open-source para testes de carga e desempenho.  
- **JavaScript:** Linguagem utilizada na criação dos scripts de teste.  
- **Node.js:** Para execução de scripts auxiliares ou manipulação de dados locais.  
- **Git e GitHub:** Versionamento e hospedagem do repositório.  

---

## Estrutura do Repositório

```
banco-api-performance/
├── fixtures/
├── helpers/
├── tests/
├── config/
├── utils/
├── README.md
```

## Modo de Instalação

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/AnaWeiz/banco-api-performance.git
   cd banco-api-performance
   ```

2. **Instalar o K6:**
   - 🔗 [Guia oficial de instalação do K6](https://k6.io/docs/get-started/installation/)

3. **Configurar o arquivo `config.local.json`:**
   Altere o arquivo `config.local.json` e define a URL base da API a ser testada
   ```json
  {
    "baseUrl": "http://localhost:3000"
  }
   ```

---

### Execute um teste
Execute um dos testes com o comando:

```bash
k6 run tests/login.test.js
```

Certifique-se de passar a variável de ambiente `BASE_URL`, caso não esteja usando um `config.local.json` ou uma abordagem de carregamento automático:

```bash
k6 run tests/autenticacao/login.test.js -e BASE_URL=http://localhost:3000
```
---

### Acompanhamento em tempo real do relatório

Para visualizar o relatório **em tempo real** durante a execução do teste, utilize as variáveis de ambiente do K6:

```bash
K6_WEB_DASHBOARD=true k6 \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/autenticacao/login.test.js \
-e BASE_URL=http://localhost:3000

```

---
