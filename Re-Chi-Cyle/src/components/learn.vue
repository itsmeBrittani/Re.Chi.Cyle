<template>
<div>
    <h1>Which Bin Does It Go In?</h1>
    <h2> Keeping up with what goes where can be difficult - follow the guide below for peace of mind!</h2>
    <div class='guide-container'>
    <div class='blue-bin-container'><h3>Blue Bin Items</h3>
    <div class='paper-box'>Paper</div>
    <div class='glass-box'>Glass</div>
    <div class='plastic-box'>Plastic</div>
    <div class='metal-box'>Metal</div>
    </div>
    <div class='trash-bin-container'><h3>Trash Bin Items</h3></div>
    <div class='neither-container'><h3>Neither!</h3></div>
</div>
</div>
</template>

<style>
.guide-container{
    display: flex;
    flex-wrap: wrap;
    border: 4px solid black;
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

.blue-bin-container{
    display: flex;
    flex-direction: column;
    background: lightblue;
    width: 50%;
    height: auto;
}

.trash-bin-container{
    display: flex;
    flex-direction: column;
    background: lightgray;
    width: 50%;
    height: auto;
}

.neither-container{
    display: flex;
    background: orange;
    width: 100%;
    height: auto;
    justify-content: center;
}
</style>