# Test Cases - SauceDemo

## TC01 - Login válido
Passos:
1. Acessar site
2. Inserir standard_user
3. Inserir secret_sauce
4. Clicar login
Resultado esperado: Login realizado com sucesso

---

## TC02 - Login inválido (senha errada)
Passos:
1. Inserir usuário válido
2. Inserir senha incorreta
3. Clicar login
Resultado esperado: Mensagem de erro exibida

---

## TC03 - Login vazio
Passos:
1. Clicar em login sem preencher campos
Resultado esperado: Mensagem de campos obrigatórios

---

## TC04 - Usuário bloqueado
Passos:
1. Inserir locked_out_user
2. Inserir senha
3. Clicar login
Resultado esperado: Mensagem de usuário bloqueado

---

## TC05 - Login com caracteres especiais
Passos:
1. Inserir usuário: ###@@@
2. Inserir senha: !!!@@@
3. Clicar login
Resultado esperado: Sistema não deve quebrar e exibir erro

---

## TC06 - Verificar listagem de produtos
Passos:
1. Realizar login válido
Resultado esperado: Lista de produtos exibida corretamente

---

## TC07 - Abrir detalhes do produto
Passos:
1. Clicar em um produto da lista
Resultado esperado: Página de detalhes do produto abre corretamente

---

## TC08 - Adicionar produto ao carrinho
Passos:
1. Fazer login
2. Clicar em "Add to cart" em um produto
Resultado esperado: Produto adicionado ao carrinho

---

## TC09 - Adicionar múltiplos produtos
Passos:
1. Adicionar 2 ou mais produtos
Resultado esperado: Carrinho mostra quantidade correta

---

## TC10 - Remover produto do carrinho
Passos:
1. Adicionar produto ao carrinho
2. Clicar em "Remove"
Resultado esperado: Produto removido corretamente

---

## TC11 - Abrir carrinho
Passos:
1. Clicar no ícone do carrinho
Resultado esperado: Página do carrinho abre com itens adicionados

---

## TC12 - Carrinho vazio
Passos:
1. Acessar carrinho sem adicionar produtos
Resultado esperado: Carrinho vazio sem erro

---

## TC13 - Persistência do carrinho
Passos:
1. Adicionar produto
2. Navegar entre páginas
Resultado esperado: Produto permanece no carrinho

---

## TC14 - Iniciar checkout
Passos:
1. Clicar em checkout no carrinho
Resultado esperado: Redirecionamento para formulário de checkout

---

## TC15 - Checkout com dados válidos
Passos:
1. Preencher First Name
2. Preencher Last Name
3. Preencher Zip Code
4. Clicar em continuar
Resultado esperado: Avança para etapa de resumo

---

## TC16 - Checkout com campos vazios
Passos:
1. Clicar em continuar sem preencher campos
Resultado esperado: Mensagem de erro de campos obrigatórios

---

## TC17 - Finalizar compra
Passos:
1. Seguir fluxo de checkout completo
2. Clicar em Finish
Resultado esperado: Mensagem "Thank you for your order"

---

## TC18 - Spam de cliques em botão
Passos:
1. Clicar várias vezes rapidamente em "Add to cart"
Resultado esperado: Sistema não deve duplicar comportamento ou travar

---

## TC19 - Uso do botão voltar do navegador
Passos:
1. Avançar no fluxo de compra
2. Usar botão back do navegador
Resultado esperado: Sistema mantém estado ou trata corretamente navegação

---

## TC20 - Refresh na página
Passos:
1. Adicionar item ao carrinho
2. Atualizar página
Resultado esperado: Estado do carrinho não deve ser perdido

---

## TC21 - Inputs com dados extremos
Passos:
1. Inserir texto muito grande ou emojis nos campos
Resultado esperado: Sistema deve validar e não quebrar