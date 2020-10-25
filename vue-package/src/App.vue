<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/code">Code Examples</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");

$header-color: -webkit-linear-gradient(
    189deg,
    #e43b3b 20%,
    #bb6b10 60%,
    #ffdc40 70%
  );
$text-color: #1c509c;

header,
.header {
  font-size: 4rem;
  background: $header-color;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-weight: bold;
}

:root {
  font-size: 12px;
}

* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #c0d0e2;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  font-size: 2rem;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1e8a78;

    &.router-link-exact-active {
      color: #25ac95;
    }
  }
}
</style>
