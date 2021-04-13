<template>
    <header>
        <div class='nav-bar'>
            <img class='nav-bar-img' alt='recycling logo with Chicago blue bar and red star' src='../assets/RCClogo.png'/>
            <router-link to='/find'><button class='nav-button-find'><strong>Find Recycling Hubs</strong></button></router-link>
            <router-link to='/learn'><button class='nav-button-learn'><strong>To Recycle or Not?</strong></button></router-link>
            <router-link to='/action'><button class='nav-button-action'><strong>Take Action</strong></button></router-link>
</div>
    </header>
</template>


<style>
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
    width: 10%;
    height: 10%;
}

.nav-button-find {
    border: 5px outset #077707;
    border-radius: 50px;
    background: #099A09;
    color: #f6f6f6;
    height: 40px;
    width: auto;
    font-size: 16px;
}

.nav-button-learn {
    border: 5px outset #F6BA13;
    border-radius: 50px;
    background: #F9C846;
    color: #2c3e50;
    height: 40px;
    width: auto;
    font-size: 16px;
}

.nav-button-action {
    border: 5px outset #6A040F;
    border-radius: 50px;
    background: #8A0512;
    color: #f6f6f6;
    height: 40px;
    width: auto;
    font-size: 16px;
}
</style>