<template>
<div>
  <h1>Make Your Voice Heard</h1>
  <div class='container'>
    
    <!-- CREATE POST HERE -->
    <p class='error' v-if='error'>{{ error }}</p>
    <div class='events-container'>
      <h2 class='recy-title'> Recycling Events </h2>
      <div class='event'>This where the events will go</div>
      <!-- <div class='event' v-for='(event, index) in events' v-bind:item='event' v-bind:index='index' v-bind:key='event._id'>
        {{`${event.createdAt.getDate()}/${event.createdAt.getMonth()}/${event.createdAt.getFullYear()}`}}
        <p class='event-title'>{{ event.title }}</p>
        <p class='location'>{{ event.location }}</p>
        <p class='date'>{{ event.date }}</p>
        <p class='startTime'>{{ event.startTime }}</p>
        <p class='endTime'>{{ event.endTime }}</p>
        <p class='description'>{{ event.description }}</p>
      </div>  -->
  </div>
  <div class='contact-connect-container'> 
    <h2>Contact your Alderperson</h2>
        <a href='https://www.chicago.gov/city/en/depts/mayor/iframe/lookup_ward_and_alderman.html'><button class='find-my-button'><strong>Find My Alderperson</strong></button></a><br />
        <hr>
    <h2>Connect with local organizations</h2>
    </div>
  </div>
  </div>
</template>


<style>
.container{
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

</style>