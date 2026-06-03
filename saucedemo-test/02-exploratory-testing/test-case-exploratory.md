# Test Cases - SauceDemo

## ET00 - Login com usuário problemático
Passos:
1. Fazer login com problem_user
2. Inserir secret_sauce
3. Clicar em login
4. Observar a listagem de produtos
Resultado esperado: Todas as imagens dos produtos deveriam ser diferentes, mas o bug exibe a mesma foto em todos

---

## ET01 - Adicionar todos os produtos e atualizar a página
Passos:
1. Realizar login.
2. Adicionar todos os produtos disponíveis ao carrinho.
3. Atualizar a página.
Resultado esperado:
Todos os produtos devem permanecer no carrinho após o refresh.

---

## ET02 - Spam de cliques no botão Add to Cart
Passos:
1. Realizar login.
2. Escolher um produto.
3. Clicar rapidamente 30 vezes no botão Add to Cart.
Resultado esperado:
O produto deve ser adicionado apenas uma vez.

---

## ET03 - Checkout utilizando emojis
Passos:
1. Adicionar um produto ao carrinho.
2. Iniciar checkout.
3. Preencher os campos utilizando apenas emojis.
4. Prosseguir.
Resultado esperado:
O sistema deve tratar os dados sem apresentar falhas.

---

## ET04 - Navegação em múltiplas abas
Passos:
1. Abrir o SauceDemo em 5 abas simultaneamente.
2. Adicionar e remover produtos em abas diferentes.
Resultado esperado:
O sistema deve permanecer consistente durante a navegação.

---

## ET05 - Inserção de texto extremamente longo
Passos:
1. Iniciar checkout.
2. Inserir mais de 1000 caracteres nos campos disponíveis.
3. Continuar o fluxo.
Resultado esperado:
A aplicação deve permanecer estável e sem quebras de layout.

---

## ET06 - Logout durante o checkout
Passos:
1. Adicionar produtos ao carrinho.
2. Iniciar checkout.
3. Realizar logout antes da finalização.
Resultado esperado:
A sessão deve ser encerrada corretamente.