# Test Cases - SauceDemo

## ET00 - Spam de cliques no botão Add to Cart
Passos:
1. Realizar login.
2. Escolher um produto.
3. Clicar rapidamente 30 vezes no botão Add to Cart.
Resultado esperado:
O produto deve ser adicionado apenas uma vez.

---

## ET01 - Checkout utilizando emojis
Passos:
1. Adicionar um produto ao carrinho.
2. Iniciar checkout.
3. Preencher os campos utilizando apenas emojis.
4. Prosseguir.
Resultado esperado:
O sistema deve tratar os dados sem apresentar falhas.

---

## ET02 - Inserção de texto extremamente longo
Passos:
1. Iniciar checkout.
2. Inserir mais de 1000 caracteres nos campos disponíveis.
3. Continuar o fluxo.
Resultado esperado:
A aplicação deve permanecer estável e sem quebras de layout.

---

## ET03 - Logout durante o checkout
Passos:
1. Adicionar produtos ao carrinho.
2. Iniciar checkout.
3. Realizar logout antes da finalização.
Resultado esperado:
A sessão deve ser encerrada corretamente.