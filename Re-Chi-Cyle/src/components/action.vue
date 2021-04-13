<template>
<div>
  <h1>Make Your Voice Heard</h1>
  <h3 style='font-size: 16px; line-height: 200%; width: 90%; margin: 0 auto; text-align: center;'>There are still many advancements to make regarding recycling in the city.
    Chicago still needs to adopt a recycling program or system for both textiles and composting amongst other materials.
    The city could also look towards reusing plastics to make road repairs last longer.
    The possibilities are endless and you're invited to explore them here and with other likeminded people in an effort to build towards change.
  </h3>
  <div class='container'>
    
    <!-- CREATE POST HERE -->
    <p class='error' v-if='error'>{{ error }}</p>
    <div class='events-container'>
      <h2 class='recy-title'> Recycling Events </h2>
      <div class='event'>Coming Soon</div>
      <div class='event-maybe' v-for='(event, index) in events' v-bind:item='event' v-bind:index='index' v-bind:key='event._id'>
        {{`${event.createdAt.getDate()}/${event.createdAt.getMonth()}/${event.createdAt.getFullYear()}`}}
        <p class='event-title'>{{ event.title }}</p>
        <p class='location'>{{ event.location }}</p>
        <p class='date'>{{ event.date }}</p>
        <p class='startTime'>{{ event.startTime }}</p>
        <p class='endTime'>{{ event.endTime }}</p>
        <p class='description'>{{ event.description }}</p>
      </div> 
  </div>
  <div class='contact-connect-container'> 
    <h2>Contact your Alderperson</h2>
        <a href='https://www.chicago.gov/city/en/depts/mayor/iframe/lookup_ward_and_alderman.html'><button class='find-my-button'><strong>Find My Alderperson</strong></button></a><br />
        <hr>
    <h2>Connect with local organizations</h2>
    <ul>
      <a class='org-list' href='https://chicagorecyclingcoalition.org'><li>Chicago Recycling Coalition</li></a>
      <a class='org-list' href='http://www.chicagosustainabilitytaskforce.org/'><li>Chicago Sustainability Task Force</li></a>
      <a class='org-list' href='http://setaskforce.org/'><li>Southeast Environmental Task Force</li></a>
      <a class='org-list' href='https://www.blacksingreen.org/'><li>BIG: Blacks in Green</li></a>
      <a class='org-list' href='https://www.thewasteshed.com/'><li>The WasteShed</li></a>
      <a class='org-list' href='http://neighbor-space.org/'><li>Neighbor-Space</li></a>
      <a class='org-list' href='https://semillasdejusticia.weebly.com/'><li>Semillas de Justicia</li></a>
      <a class='org-list' href='http://chicagopatchworkfarms.com/'><li>Chicago Patchwork Farms</li></a>
      <a class='org-list' href='https://greencorpschicago.org/'><li>Greencorps Chicago</li></a>
      <a class='org-list' href='https://www.chicagoparkdistrict.com/parks-facilities/cooperation-operation-park-573'><li>The Cooperation Operation</li></a>
      <a class='org-list' href='https://www.theurbancanopy.org/home'><li>The Urban Canopy</li></a>
      <a class='org-list' href='https://www.blockbins.com/'><li>Block Bins</li></a>
    </ul>
    </div>
  </div>
  </div>
</template>


<style>
.container{
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}
.events-container{
  width: 60%;
  height: auto;
  background: lightgray;
}

.contact-connect-container{
  width: 30%;
}

.find-my-button{
  border: 5px outset #060F88;
    border-radius: 50px;
    background: #0713B0;
    color: #f6f6f6;
    height: 30px;
    width: auto;
    font-size: 16px;
    margin-bottom: 15px;
}

.org-list{
  color: #2c3e50;
  text-decoration: none;
}

ul{
  list-style-type: none;
  text-align: center;
  margin-right: 40px;
  line-height: 200%;
}

</style>