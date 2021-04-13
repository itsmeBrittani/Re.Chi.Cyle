<template>
<div>
    <h1>Show me the map!</h1>
    <div id='map' ref='map'></div>
</div>
</template>
<script>
let map;
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat:41.881832,lng:-87.623177},
        zoom: 10
        // streetViewControl: true,
        // mapTypeControl: true,
        // fullscreenControl: true,
        // zoomControl: true
        })
    }
</script>

<style>
#map{
    width: 100%;
    height: 500px;
    background: lightgray;
    margin-bottom: 10px;
}
</style>