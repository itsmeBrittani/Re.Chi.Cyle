<template>
<div>
  <h1>Find Recycling Near You</h1>
    <h2> Prominent Recycling Locations </h2>
    <div class='location-container'>
    <div class='recycling-location'>
      <div>
      <iframe width="600" height="350" style="border:0; margin: 10px;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAYCP3L7RD4gRZhZzBLZuWGc&key=AIzaSyCS7mPVkpU1BHc5PEprtC9-g0zSRrWUIN4"></iframe><br/><h3>Residential Recycling Drop-Off Center</h3></div>
      <div>
      <iframe width="600" height="350" style="border:0; margin: 10px;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcYNJ54gsDogR5DoKnOYEJ8M&key=AIzaSyCS7mPVkpU1BHc5PEprtC9-g0zSRrWUIN4"></iframe><br/><h3>Residential Recycling Drop-Off Center</h3></div>
      <div>
      <iframe width="600" height="350" style="border:0; margin: 10px;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjTO8BSnTD4gRgS8Y_8ZX1C0&key=AIzaSyCS7mPVkpU1BHc5PEprtC9-g0zSRrWUIN4"></iframe><br/><h3>Household Chemicals and Computer Recycling Facility</h3><h4>Note: A full list of accepted and rejected materials are available <a href='https://www.chicago.gov/city/en/depts/cdph/supp_info/inspections---permitting/household_chemicalscomputerrecyclingfacilityaccepteditems.html'>here</a></h4></div>
      <div>
      <iframe width="600" height="350" style="border:0; margin: 10px;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMWgoHWcwDogRzBDJ31LmeFA&key=AIzaSyCS7mPVkpU1BHc5PEprtC9-g0zSRrWUIN4"></iframe><br/><h3>Styrofoam Recycling Facility</h3></div>
      </div></div>
    <!-- <h2>Search for Recycling/Drop-off Sites</h2>
    <div class='search-container'>
      <Map />
    </div> -->
    </div>
</template>
<script>
// import Map from '../components/map.vue'
</script>
<style scoped>
.search-container{
    width: 100%;
    height: auto;
    background: lightgray;
}

.location-container, .recycling-location {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>