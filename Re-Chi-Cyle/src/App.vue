<template>
  <div id="app">
      <header>
        <div class='nav-bar'>
          <div>
            <router-link to='/'><img class='nav-bar-img' alt='recycling logo with Chicago blue bar and red star' src='./assets/RCClogo.png'/></router-link></div>
            <div class='header-buttons'><router-link to='/find'><button class='nav-button-find'><strong>Find Recycling Hubs</strong></button></router-link>
            <router-link to='/learn'><button class='nav-button-learn'><strong>To Recycle or Not?</strong></button></router-link>
            <router-link to='/action'><button class='nav-button-action'><strong>Take Action</strong></button></router-link></div>
</div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
        <div class='footer-bar'>
            <a class='footer-link' href="https://github.com/itsmeBrittani/Re.Chi.Cyle">GitHub</a>
            <h5 class='footer-text'>Created by Brittani Savage</h5>
</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      event: 'events'
    }
  }
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
    width: 30%;
    height: auto;
    margin-left: 25px;
}

.nav-button-find {
    border: 5px outset #077707;
    border-radius: 50px;
    background: #099A09;
    color: #f6f6f6;
    height: auto;
    width: 100%;
    font-size: 1em;
    padding: 10px;
}

.nav-button-learn {
    border: 5px outset #F6BA13;
    border-radius: 50px;
    background: #F9C846;
    color: black;
    height: auto;
    width: 100%;
    font-size: 1em;
    padding: 10px;
}

.nav-button-action {
    border: 5px outset #6A040F;
    border-radius: 50px;
    background: #8A0512;
    color: #f6f6f6;
    height: auto;
    width: 100%;
    font-size: 1em;
    padding: 10px;
}

.header-buttons{
  width: 90%;
  display: flex;
  justify-content: space-around;
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

.footer-text{
    color: #f6f6f6;
}

.footer-link{
    text-decoration: none;
    margin-top: 25px;
    color: #f6f6f6;
}
</style>
