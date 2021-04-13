<template>
<div>
    <h1>Which Bin Does It Go In?</h1>
    <h2> Keeping up with what goes where can be difficult - follow the guide below for peace of mind!</h2>
    <div class='guide-container'>
    <div class='blue-bin-container'>
        <h3>Blue Bin Items</h3>
    <div class='paper-box'>
        <img class='learn-icon' alt='paper' src='../assets/icons8-paper-waste-100.png'/>
        <img class='learn-icon' alt='paper' src='../assets/icons8-carton-of-orange-juice-100.png'/>
        <img class='learn-icon' alt='cardboard box' src='../assets/icons8-cardboard-box-100.png'/>
        <img class='learn-icon' alt='paper bag' src='../assets/icons8-take-away-food-100-2.png'/>
        <br/>Paper & Cardboard
        </div><br/>
    <div class='glass-box'>
        <img class='learn-icon' alt='wine bottle' src=''/>Glass
        </div>
    <div class='plastic-box'>
        <img class='learn-icon' alt='plastic bottle' src=''/>Plastic
        </div>
    <div class='metal-box'>
        <img class='learn-icon' alt='metal can' src=''/>Metal
    </div>
    </div>
    <div class='non-container'>
        <h3>Not Blue Bin Items</h3>
    <div class='food-box'>
        <img class='learn-icon' alt='apple with a bite taken out' src=''/>Food
        </div>
    <div class='no-glass-box'>
        <img class='learn-icon' alt='broken glass' src=''/>Broken Glass & Drinking Glasses
        </div>
    <div class='plastic-bags-box'>
        <img class='learn-icon' alt='plastic bag' src=''/>Plastic Bags
        </div>
    <div class='electronic-box'>
        <img class='learn-icon' alt='broken laptop' src=''/>Electronics
        </div>
    </div>
    <div class='neither-container'>
        <h3 style='width: 100%;'>Call 311 for Pick Up</h3>
        <div class='row'>
    <div class='paper-box'>
        <img class='learn-icon' alt='grass' src=''/>Yard Waste
        </div>
    <div class='glass-box'>
        <img class='learn-icon' alt='couch' src=''/>Furniture
        </div>
    <div class='plastic-box'>
        <img class='learn-icon' alt='fridge' src=''/>Large Appliances
        </div>
    <div class='mattress-box'>
        <img class='learn-icon' alt='mattress' src=''/>Mattresses
        </div>
    </div>
    </div>
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
    justify-content: space-around;
}

.non-container{
    display: flex;
    flex-direction: column;
    background: lightgray;
    width: 50%;
    height: auto;
    justify-content: space-around;
}

.neither-container{
    display: flex;
    flex-direction: column;
    background: orange;
    width: 100%;
    height: auto;
    justify-content: center;
}

.row{
    display: flex;
    justify-content: space-around;
}
</style>