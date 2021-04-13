<template>
  <div id="app">
      <header>
        <div class='nav-bar'>
            <router-link to='/'><img class='nav-bar-img' alt='recycling logo with Chicago blue bar and red star' src='./assets/RCClogo.png'/></router-link>
            <router-link to='/find'><button class='nav-button-find'><strong>Find Recycling Hubs</strong></button></router-link>
            <router-link to='/learn'><button class='nav-button-learn'><strong>To Recycle or Not?</strong></button></router-link>
            <router-link to='/action'><button class='nav-button-action'><strong>Take Action</strong></button></router-link>
</div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
        <div class='footer-bar'>
            <h5 class='footer-text'>Created by Brittani Savage<br/></h5> 
            <a class='footer-link' href="https://github.com/itsmeBrittani">GitHub</a>
</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

.nav-bar{
    display: flex;
    width: 100%;
    height: 10%;
    background: #463F3A;
    overflow: hidden;
    position: sticky;
    justify-content: space-around;
    align-items: center;
}

.nav-bar-img {
    width: 35%;
    height: auto;
}

.nav-button-find {
    border: 5px outset #077707;
    border-radius: 50px;
    background: #099A09;
    color: #f6f6f6;
    height: auto;
    width: auto;
    font-size: 1em;
    margin-right: 100px;
}

.nav-button-learn {
    border: 5px outset #F6BA13;
    border-radius: 50px;
    background: #F9C846;
    color: #2c3e50;
    height: auto;
    width: auto;
    font-size: 1em;
    margin-right: 100px;
}

.nav-button-action {
    border: 5px outset #6A040F;
    border-radius: 50px;
    background: #8A0512;
    color: #f6f6f6;
    height: auto;
    width: auto;
    font-size: 1em;
    margin-right: 100px;
}

.footer-bar{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: #463F3A;
    overflow: hidden;
    position: sticky;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

a, .footer-text{
    text-decoration: none;
    color: #f6f6f6;
}

.footer-link{
    margin-bottom: 10px;
}
</style>
