<template>
    <footer>
        <div class='footer-bar'>
            <p class='footer-text'>Created by Brittani Savage<br/></p> 
            <a class='footer-link' href="https://github.com/itsmeBrittani">GitHub</a>
</div>
    </footer>
</template>

<style>
.footer-bar{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 10%;
    background: #463F3A;
    overflow: hidden;
    position: sticky;
    justify-content: center;
    align-items: center;
    margin-top: auto;
}

a, .footer-text{
    text-decoration: none;
    color: #f6f6f6;
}

.footer-link{
    margin-bottom: 10px;
}
</style>