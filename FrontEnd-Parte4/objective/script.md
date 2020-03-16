# DAY 4 BLOCK 6 - CSS FLEXBOX PART II

---

Esta aula tem como objetivo a criação de um site para ensinar os estudantes da Trybe a utilizar **CSS Flexbox** para estruturar uma página web.

Os arquivos `index.html` e `styles.css` possuem as versões finais do projeto e o diretório `images` contém as imagens utilizadas.

## Aula ao vivo

- Crie um arquivo `index.html` com o código abaixo e acesse o site através do Google Chrome:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Lecture 6.4</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

</body>
</html>
```

- Crie um arquivo `style.css` com o código abaixo:
```css
* {
  margin: 0;
  padding: 0;
  font-size: 100%;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

nav, ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  opacity: 0.9;
}

a:hover {
  opacity: 1;
}
```

- Adicione o **Font Awesome** e a fonte _Open Sans_ do **Google Fonts**:

[Font Awesome](https://fontawesome.com/)

[Font Awesome CDN](https://cdnjs.com/libraries/font-awesome)

[Google Fonts](https://fonts.google.com)

ps: observe que o `styles.css` deve ser carregado por último.

```html
<head>
  ...
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
<head>
```

- Altere o título da página:
```html
<title>Hotel Paraíso</title>
```

- Crie a estrutura do header:
```html
<body>
  <header>
    <a href="#">
      <img src="images/logo.png" alt="Hotel Paraíso">
    </a>
    <nav>
      <li><a href="">Home</a></li>
      <li><a href="">Sobre</a></li>
      <li><a href="">Reservas</a></li>
      <li><a href="">Contato</a></li>
    </nav>
  </header>
</body>
```

- Adicione o CSS referente ao header:
```css
...
header {
  background-color: red;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 50px;
}

header img {
  width: 200px;
}

header li a {
  color: #191c03;
}
```

o `background-color: red` é apenas para facilitar a visualização da estrutura

- Adicione as propriedades **Flexbox** ao header:
```css
header {
  ...
  display: flex;
  justify-content: space-between;
  align-items: center;
}
...
header nav {
  display: flex;
}

header li {
  margin: 0 15px;
}

header li:first-child {
  margin-left: 0;
}

header li:last-child {
  margin-right: 0;
}
```

adicionamos as características do **Flexbox** no `<header>` e `<nav>`

adicionamos margens nos itens do menu e removemos a primeira margem à esquerda e a última à direita.

- Altere o `background-color: red` para `background-color: white`:
```css
header {
  background-color: white;
}
```

- Adicione a seção abaixo:
```html
...
<header>
  ...
</header>
<section class="hero">
  <h1>Conheça esse paraíso chamado Itacaré</h1>
  <h3>"Aconchego, conforto, simpatia e alto astral"</h3>
  <a href="" class="btn">Saiba mais</a>
</section>
...
```

- Adicione o CSS referente a `<section class="hero">`:
```css
...
.hero {
  background-image: url(./images/hero.jpg);
  background-size: cover;
  min-height: 100vh;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero h1 {
  font-size: 3.2rem;
  margin-bottom: 15px;
}

.hero h3 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.hero .btn {
  background-color: white;
  border-radius: 4px;
  color: #191c03;
  padding: 20px 50px;
  text-transform: uppercase;
}
```

- Adicione a seção abaixo:
```html
...
<section class="hero">
  ...
</section>
<section class="know-the-hotel">
  <h3>Conheça o Hotel Paraíso!</h3>
  <p>Feche os olhos e imagine paraíso. Um lugar no meio da Mata Atlântica e banhado pelo mar, onde você encontra paz, tranquilidade, conforto e comodidade.</p>
  <hr>
  <ul class="grid">
    <li class="small" style="background-image: url('images/itacare-01.jpg')"></li>
    <li class="large" style="background-image: url('images/itacare-02.jpg')"></li>
    <li class="large" style="background-image: url('images/itacare-03.jpg')"></li>
    <li class="small" style="background-image: url('images/itacare-04.jpg')"></li>
  </ul>
</section>
...
  ```

- Adicione o CSS referente a `<section class="know-the-hotel">`:
```css
.know-the-hotel {
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.know-the-hotel h3 {
  font-size: 2rem;
  margin-bottom: 35px;
  text-align: center;
  color: #191c03;
}

.know-the-hotel p {
  max-width: 800px;
  margin-bottom: 35px;
  text-align: center;
  color: #191c03;
}

.know-the-hotel hr {
  width: 200px;
  height: 2px;
  margin-bottom: 70px;
  border: none;
  background-color: #191c03;
}

.know-the-hotel .grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.know-the-hotel .grid li {
  height: 350px;
  padding: 20px;
  border-radius: 4px;
  background-clip: content-box;
  background-size: cover;
  background-position: center;
}

.know-the-hotel .grid li.small {
  flex-basis: 40%;
}

.know-the-hotel .grid li.large {
  flex-basis: 60%;
}
```

- Adicione a seção abaixo:
```html
...
<section class="know-the-hotel">
  ...
</section>
<section class="features">
  <h3>Único hotel pé na areia de Itacaré</h3>
  <p>Implantado em uma área completamente arborizada, o Hotel Paraíso é o único hotel pé na areia de Itacaré. Aqui o Mar será o seu companheiro e você terá as belezas da natureza como guia.</p>
  <hr>
  <ul class="grid">
    <li>
      <i class="fas fa-location-arrow"></i>
      <h4>Localização</h4>
      <p>Localizada no sul da Bahia, entre o mar e a Mata Atlântica, Itacaré tem refrescantes cachoeiras e praias belíssimas, muitas delas tão pequenas que nem aparecem nos mapas.</p>
    </li>
    <li>
      <i class="fas fa-gift"></i>
      <h4>Pacotes e Ofertas</h4>
      <p>Sabe aquele descontraído encontro com a família e amigos? Ou um momento relax? Nossa estrutura conta com uma diversidade de espaços que proporcionam momentos inesquecíveis.</p>
    </li>
    <li>
      <i class="fas fa-home"></i>
      <h4>Acomodações</h4>
      <p>Hotel Paraíso possui 29 unidades, divididas entre 11 chalés, 16 amplas suítes e 2 chalés familiar, todas com TV a cabo, frigobar, além de varanda com rede.</p>
    </li>
  </ul>
</section>
...
```

- Adicione o CSS referente a `<section class="features">`:
```css
.features {
  background-color: #191c03;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.features h3 {
  font-size: 2rem;
  margin-bottom: 35px;
  text-align: center;
  color: white;
}

.features p {
  max-width: 800px;
  margin-bottom: 35px;
  text-align: center;
  color: white;
}

.features hr {
  width: 200px;
  height: 2px;
  margin-bottom: 70px;
  border: none;
  background-color: white;
}

.features .grid {
  width: 100%;
  display: flex;
}

.features .grid li {
  padding: 0 30px;
  text-align: center;
}

.features .grid li i {
  color: #c3c63b;
  font-size: 3.5rem;
  margin-bottom: 30px;
}

.features .grid li h4 {
  font-size: 1.5rem;
  color: #c3c63b;
  margin-bottom: 30px;
}

.features .grid li p {
  color: white;
}
```

- Adicione a seção abaixo:
```html
...
<section class="features">
  ...
</section>
<section class="newsletter">
  <h3>Newsletter</h3>
  <p>Assine nossa newsletter para se manter atualizado com nossos serviços e a programação de ...</p>
  <hr>
  <form>
    <input type="text" placeholder="Email">
    <button>Cadastrar</button>
  </form>
</section>
...
```

- Adicione o CSS referente a `<section class="newsletter">`:
```css
.newsletter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
}

.newsletter h3 {
  font-size: 2rem;
  margin-bottom: 35px;
  text-align: center;
  color: #c3c63b;
}

.newsletter p {
  max-width: 800px;
  margin-bottom: 35px;
  text-align: center;
  color: #c3c63b;
}

.newsletter hr {
  width: 200px;
  height: 2px;
  margin-bottom: 70px;
  border: none;
  background-color: #c3c63b;
}

.newsletter form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  max-width: 800px;
}

.newsletter input {
  padding: 15px;
  border: 1px solid #c3c63b;
  border-radius: 4px;
  margin-right: 15px;
  flex: 1;
}

.newsletter button {
  padding: 15px;
  background-color: #c3c63b;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

- Adicione o `<footer>` abaixo:
```html
...
<section class="newsletter">
  ...
</section>
<footer>
  <ul>
    <li><a href=""><i class="fab fa-facebook"></i></a></li>
    <li><a href=""><i class="fab fa-twitter"></i></a></li>
    <li><a href=""><i class="fab fa-snapchat"></i></a></li>
    <li><a href=""><i class="fab fa-pinterest"></i></a></li>
  </ul>
  <p>Todos os direitos reservados - Hotel Paraíso 2019</p>
</footer>
...
```

- Adicione o CSS referente ao `<footer>`:
```css
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #191c03;
  padding: 50px 0;
}

footer ul {
  display: flex;
  margin-bottom: 25px;
}

footer ul li {
  margin-right: 10px;
}

footer ul li:last-child {
  margin-right: 0;
}

footer ul li a {
  color: #c3c63b;
  font-size: 2rem;
}

footer p {
  color: #c3c63b;
  text-align: center;
}
```

- Mostre funcionamento do `align-self`:

Para mostrar o funcionamento do `align-self`, vamos alterar a classe `footer ul`:
```css
...
footer ul {
  ...
  height: 300px;
  border: 1px solid red;
}
```

- Adicione a classe:
```css
...
footer ul li:nth-child(2) {
  align-self: center;
}
```

e explique o que ocorreu. Vale alterar para outros valores afim de consolidar o conhecimento.

- Mostre o funcionamento do `order`:

Para mostrar o funcionamento do `order`, vamos adicionar as classes abaixo:
```css
footer ul li:nth-child(1) {
  order: 4;
}

footer ul li:nth-child(2) {
  order: 3;
}

footer ul li:nth-child(3) {
  order: 2;
}

footer ul li:nth-child(4) {
  order: 1
}
```

Explique o funcionamento do order.

- (Opcional) Responsividade:

Adicione o CSS abaixo:
```css
@media (max-width: 700px) {
  header {
    flex-direction: column;
  }

  header img {
    margin-bottom: 15px;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h3 {
    font-size: 1.5rem;
  }

  .know-the-hotel .grid li.small, .know-the-hotel .grid li.large {
    flex-basis: 100%;
  }

  .newsletter input {
    flex-basis: 100%;
    margin-bottom: 15px;
  }
}

@media (max-width: 850px) {
  .features .grid {
    flex-direction: column;
  }
}
```

e explique como **Media queries** e **Flexbox** facilitam no desenvolvimento de uma página responsiva.
