# Test Plan — SauceDemo

## 1. Objetivo

Validar as funcionalidades principais da aplicação SauceDemo, cobrindo os fluxos de autenticação, navegação de produtos, gerenciamento de carrinho e checkout. O foco é garantir que os fluxos críticos funcionem conforme esperado e que o sistema se comporte de forma estável em situações fora do padrão.

---

## 2. Escopo

### ✅ O que será testado

- Autenticação (login válido, inválido, vazio, usuário bloqueado, caracteres especiais)
- Listagem e detalhes de produtos
- Adição, remoção e persistência de itens no carrinho
- Fluxo completo de checkout
- Comportamento do sistema em cenários extremos (spam de cliques, refresh, botão voltar, inputs grandes)

### ❌ O que não será testado

- Performance e tempo de resposta do servidor
- Compatibilidade entre navegadores
- Testes de segurança (SQL injection, XSS)
- Funcionalidades de conta (criar conta, recuperar senha)

---

## 3. Aplicação testada

- **Nome:** SauceDemo
- **URL:** https://www.saucedemo.com/
- **Tipo:** E-commerce de demonstração
- **Usuários de teste disponíveis:** `standard_user`, `locked_out_user`, entre outros

---

## 4. Tipos de teste

| Tipo | Descrição |
|------|-----------|
| Funcional | Validação dos fluxos principais conforme requisitos |
| Negativo | Entradas inválidas, campos vazios, usuário bloqueado |
| Exploratório | Comportamentos fora do fluxo padrão (spam, refresh, inputs extremos) |
| Regressão | Re-execução dos casos após mudanças para garantir estabilidade |

---

## 5. Casos de teste

| ID | Descrição | Tipo | Prioridade |
|----|-----------|------|------------|
| TC01 | Login com credenciais válidas | Funcional | Alta |
| TC02 | Login com senha incorreta | Negativo | Alta |
| TC03 | Login com campos vazios | Negativo | Alta |
| TC04 | Login com usuário bloqueado | Negativo | Alta |
| TC05 | Login com caracteres especiais | Negativo | Média |
| TC06 | Listagem de produtos após login | Funcional | Alta |
| TC07 | Visualização de detalhes do produto | Funcional | Média |
| TC08 | Adicionar produto ao carrinho | Funcional | Alta |
| TC09 | Adicionar múltiplos produtos | Funcional | Alta |
| TC10 | Remover produto do carrinho | Funcional | Alta |
| TC11 | Abrir o carrinho | Funcional | Alta |
| TC12 | Acessar carrinho vazio | Funcional | Média |
| TC13 | Persistência do carrinho na navegação | Funcional | Média |
| TC14 | Iniciar checkout | Funcional | Alta |
| TC15 | Checkout com dados válidos | Funcional | Alta |
| TC16 | Checkout com campos vazios | Negativo | Alta |
| TC17 | Finalizar compra com sucesso | Funcional | Alta |
| TC18 | Spam de cliques em "Add to Cart" | Exploratório | Média |
| TC19 | Uso do botão voltar do navegador | Exploratório | Média |
| TC20 | Refresh na página com carrinho preenchido | Exploratório | Média |
| TC21 | Inputs com dados extremos no checkout | Exploratório | Média |

**Total: 21 casos de teste funcionais/negativos**

### Testes Exploratórios (sessões dirigidas)

| ID | Descrição | Técnica | Prioridade |
|----|-----------|---------|------------|
| ET00 | Spam de 30 cliques em "Add to Cart" | Stress / comportamento inesperado | Alta |
| ET01 | Checkout com emojis nos campos de texto | Validação de inputs incomuns | Média |
| ET02 | Inserção de mais de 1000 caracteres no checkout | Limite de input / estabilidade de layout | Média |
| ET03 | Logout durante fluxo de checkout ativo | Consistência de estado / sessão | Alta |

**Total geral: 25 casos de teste**

---

## 6. Critérios de entrada

- Acesso ao ambiente https://www.saucedemo.com/ disponível
- Credenciais de teste funcionando (`standard_user` / `secret_sauce`)
- Navegador atualizado (Chrome ou Firefox)

---

## 7. Critérios de saída

- Todos os 25 casos de teste executados (21 TC + 4 ET)
- 100% dos casos de alta prioridade com status PASS
- Evidências registradas para cada caso executado
- Bugs encontrados documentados (se houver)

---

## 8. Ambiente de teste

| Item | Detalhe |
|------|---------|
| Ambiente | Produção (aplicação pública de demo) |
| Navegador | Google Chrome (versão atual) |
| Sistema Operacional | Windows 10/11 |
| Tipo de execução | Manual |

---

## 9. Evidências

As evidências de cada caso executado estão registradas em:

```
01-manual-testing/
└── Evidence/
    ├── tc01-login-valido/
    ├── tc02-login-invalido/
    └── ...

02-exploratory-testing/
└── Evidence/
    ├── spam-add-to-cart.png
    ├── emoji-checkout.png
    ├── long-input-test.png
    └── logout-checkout-test.png
```

---

## 10. Autor

**Renato Freitas** — QA Engineer em formação  
Data de criação: Junho/2025