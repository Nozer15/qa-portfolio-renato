# Exploratory Test Execution - SauceDemo

# Exploratory Test Execution - SauceDemo

## ET00 - Login com usuário problemático

Status: FAIL

Resultado atual:
Após o login com o usuário problem_user, todas as imagens dos produtos são exibidas de forma incorreta, repetindo a mesma imagem para todos os itens.

Evidência:
problem-user-products.png

## ET01 - Adicionar todos os produtos e atualizar a página

Status: PASS

Resultado atual:
Todos os produtos permaneceram no carrinho após atualização da página.

Evidência:
all-products-refresh.png

---

## ET02 - Spam de cliques no botão Add to Cart

Status: PASS

Resultado atual:
O sistema impediu duplicações indevidas e manteve comportamento estável.

Evidência:
spam-add-to-cart.png

---

## ET03 - Checkout utilizando emojis

Status: PASS

Resultado atual:
O sistema processou os dados sem apresentar erros visuais ou travamentos.

Evidência:
emoji-checkout.png

---

## ET04 - Navegação em múltiplas abas

Status: PASS

Resultado atual:
A aplicação permaneceu funcional durante toda a navegação.

Evidência:
multiple-tabs-test.png

---

## ET05 - Inserção de texto extremamente longo

Status: PASS

Resultado atual:
Nenhuma falha visual ou funcional foi observada.

Evidência:
long-input-test.png

---

## ET06 - Logout durante o checkout

Status: PASS

Resultado atual:
A sessão foi encerrada corretamente e o usuário retornou para a tela de login.

Evidência:
logout-checkout-test.png
