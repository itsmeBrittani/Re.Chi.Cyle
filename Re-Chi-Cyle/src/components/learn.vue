<template>
<div>
    <h1>Which Bin Does It Go In?</h1>
    <h2> Keeping up with what goes where can be difficult - follow the guide below for peace of mind!</h2>
    <h3><i>When recycling anything that had food in it, be sure to scrape out as much of it as you can.</i></h3>
    <div class='guide-container'>
    <div class='blue-bin-container'>
        <h3>Blue Bin Items</h3><br/>
    <div class='paper-box'>
        <img class='learn-icon' alt='wad of paper' src='../assets/icons8-paper-waste-100.png'/>
        <img class='pizza-icon' alt='pizza boxes' src='../assets/pizza.png'/>
        <img class='learn-icon' alt='milk carton' src='../assets/icons8-tetra-pak-100.png'/>
        <img class='learn-icon' alt='cardboard box' src='../assets/icons8-cardboard-box-100.png'/>
        <br/>Paper and Cardboard
        </div><br/>
    <div class='glass-box'>
        <img class='learn-icon' alt='empty glass jar' src='../assets/icons8-empty-jam-jar-96.png'/>
        <img class='learn-icon' alt='wine bottle' src='../assets/icons8-wine-bottle-100.png'/>
        <img class='learn-icon' alt='soda bottle' src='../assets/icons8-orange-soda-bottle-100.png'/><br/>
        Glass
        </div><br/>
    <div class='plastic-box'>
        <img class='learn-icon' alt='plastic bottle' src='../assets/icons8-plastic-100-2.png'/>
        <img class='learn-icon' alt='empty shampoo bottle' src='../assets/icons8-shampoo-96.png'/>
        <br/>Plastic
        </div><br/>
    <div class='metal-box'>
        <img class='learn-icon' alt='cardboard box' src='../assets/icons8-soda-can-100.png'/>
        <img class='cat-food-icon' alt='paper bag' src='../assets/cat-food.png'/>
        <img class='learn-icon' alt='metal can' src='../assets/icons8-canned-food-100.png'/>
        <br/>Metal
    </div><br/>
    </div>
    <div class='non-container'>
        <h3>Not Blue Bin Items</h3><br/>
    <div class='food-box'>
        <img class='apple-icon' alt='apple with a bite taken out' src='../assets/apple.png'/>
        <img class='banana-icon' alt='banana peel' src='../assets/banana.png'/>
        <img class='steak-icon' alt='steak' src='../assets/meat.png'/><br/>Food
        </div><br/>
    <div class='no-glass-box'>
        <img class='broken-bottle-icon' alt='broken bottle' src='../assets/icons8-broken-bottle-100.png'/>
        <img class='light-bulb-icon' alt='spiral light bulb' src='../assets/icons8-spiral-bulb-100.png'/>
        <img class='broken-glass-icon' alt='cracked wine glass' src='../assets/icons8-fragile-100-2.png'/>
        <br/>Broken Glass, Drinking Glasses, and Lightbulbs*
        </div><br/>
    <div class='plastic-bags-box'>
        <img class='pill-icon' alt='pill bottle' src='../assets/icons8-pill-bottle-100-2.png'/>
        <img class='plastic-bag-icon' alt='plastic bag' src='../assets/bag.png'/><img class='styrofoam-icon' alt='styrofoam' src='../assets/icons8-plastic-food-container-100.png'/>
        <br/>Pill Bottles****, Plastic Bags***, and Styrofoam**
        </div><br/>
    <div class='electronic-box'>
        <img class='pc-icon' alt='broken computer' src='../assets/icons8-broken-computer-100.png'/>
        <img class='battery-icon' alt='battery' src='../assets/battery.png'/>
        <img class='phone-icon' alt='broken phone' src='../assets/icons8-broken-phone-100.png'/><br/>Electronics and Batteries*
        </div><br/>
    </div>
    <div class='neither-container'>
        <h3 style='width: 100%;'>Call 311 for Pick Up</h3><br/>
        <div class='row'>
    <div class='yard-box'>
        <img class='learn-icon' alt='maple leaf' src='../assets/icons8-maple-leaf-100.png'/>
        <img class='learn-icon' alt='grass' src='../assets/icons8-grass-100.png'/><br/>
        Yard Waste
        <h5>Must be bagged</h5>
        </div>
    <div class='furn-box'>
        <img class='learn-icon' alt='couch' src='../assets/icons8-three-seater-sofa-96.png'/><br/>Furniture
        </div>
    <div class='bigapp-box'>
        <img class='learn-icon' alt='fridge' src='../assets/icons8-fridge-100.png'/><br/>Large Appliances
        <h5>Appliance must be broken - doors must be removed</h5>
        </div>
    <div class='mattress-box'>
        <img class='mattress-icon' alt='mattress' src='../assets/mattress.png'/><br/>Mattresses
        </div>
    </div><br/>
    </div>
</div>
<h5 style='font-size: 14px; width: 50%; margin: 0 auto; margin-top: 35px; line-height: 200%;'>*Batteries, lightbulbs, most electronics, and most chemicals can be recycled at the Household Chemicals and Computer Recycling Facility - major electronic stores also recycle batteries<br/> **Styrofoam can be recycled at the Dart Container Facility<br/> ***Plastic bags can be recycled at most local grocery stores<br/> ****Pill bottles can be recycled at most local pharmacies
</h5>
</div>
</template>

<style>

/* * {
    border: 3px solid black;
} */

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
    background: #c2c2c2;
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
    align-content: space-around;
}

.row{
    display: flex;
    justify-content: space-around;
    
}

.mattress-icon{
    width: 80%;
}

.pizza-icon{
    width: 100px;
    height: 100px;
    margin-left: 7px;
}

.cat-food-icon, .apple-icon, .banana-icon, .plastic-bag-icon, .battery-icon, .steak-icon, .learn-icon{
    width: 100px;
    height: 100px;
}

</style>