<template>
<div>
  <h1>Make Your Voice Heard</h1>
  <h3 style='font-size: 16px; line-height: 200%; width: 90%; margin: 0 auto; text-align: center;'>There are still many advancements to make regarding recycling in the city.
    Chicago still needs to adopt a recycling program or system for both textiles and composting amongst other materials.
    The city could also look towards reusing plastics to make road repairs last longer.
    The possibilities are endless and you're invited to explore them here and with other likeminded people in an effort to build towards change.
  </h3>
  <div class='container'>
    <div class='events-container'>
      <h2 class='recy-title'> Recycling Events </h2>
      <div class='event-form'>
        <form id="event-form" @submit.prevent="handleSubmitForm" method='POST'>
      <!-- title -->
      <div class="field">
        <label class="label">Title: </label>
        <input required type="text" class="input" v-model.lazy.trim="title" name="title" placeholder='title of event'>
      </div>

      <!-- location -->
      <div class="field">
        <label class="label">Location: </label>
        <input type="text" class="input" v-model.lazy.trim="location" name="location" placeholder="location of event">
      </div>

      <!-- date -->
      <div class="field">
        <label class="label">Date: </label>
        <input type="text" class="input" v-model.lazy.trim="date" name="date" placeholder="MM/DD/YYYY">
      </div>

      <!-- startTime -->
      <div class="field">
        <label class="label">Start Time: </label>
        <input type="text" class="input" v-model.lazy.trim='startTime' name="startTime" placeholder="00:00 AM/PM">
      </div>

      <!-- endTime -->
      <div class="field">
        <label class="label">End Time: </label>
        <input type="text" class="input" v-model.lazy.trim='endTime' name="endTime" placeholder="00:00 AM/PM">
      </div>

      <!-- description -->
      <div class="field">
        <label class="label">Description: </label>
        <textarea class="input" v-model.lazy.trim='description' name="description" rows="4" cols="33" placeholder="description of event"/>
      </div>
      <!-- submit button -->
      <div class="field has-text-right">
        <button type="submit" class="event-submit" ><strong>Submit</strong></button>
      </div>
    </form>
    <div class='event-data-container'>
      <h2><b>Events</b></h2>
      <section v-if="errored">
    <p>We're sorry, we're not able to retrieve the event list at the moment, please try back later</p>
  </section>

      <div class='event-list' v-for="event in events" v-bind:key='event.id'>

        <h3 class='event-title'><b>{{ event.title }}</b>
          <form @click.prevent='onDelete(id)' method="POST">
            <img src='../assets/delete.png' class="delete-icon" alt='trash can'/>
          </form>
        </h3>
        <h4>{{ event.location }}</h4>
        <h4>{{ event.date}}</h4>
        <b><span>{{ event.startTime }}</span> to
        <span>{{ event.endTime }}</span></b><br />
        <p class='event-desc'>{{ event.description }}</p>
    </div>
      </div>
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
<script>
import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
// import EventService from '../../EventService'

Vue.use(vueAxios, axios)
export default {
  data () {
    return {
      events: [],
      title: '',
      location: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
      errored: false
    }
  },
  created () {
    axios.get('http://localhost:5000/action').then(res => {
      this.events = res.data
    }).catch(err => {
      console.log(err)
    })
  },
  mounted () {
    axios
      .get('http://localhost:5000/action')
      .then(res => {
        this.events = res.data
      })
      .catch(err => {
        console.log(err)
        this.errored = true
      })
  },
  methods: {
    handleSubmitForm () {
      // const newEvent = {
      //   title: this.title,
      //   location: this.location,
      //   date: this.date,
      //   startTime: this.startTime,
      //   endTime: this.endTime,
      //   description: this.description
      // }
      axios.post('http://localhost:5000/action/', this.event).then(() => {
        this.events.push(this.event)
        this.event = {
          title: '',
          location: '',
          date: '',
          startTime: '',
          endTime: '',
          description: ''
        }
      }).catch((err) => {
        console.log(err)
      })
      // console.log({title: this.title, location: this.location, date: this.date, startTime: this.startTime, endTime: this.endTime, description: this.description})
      // this.title = ''
      // this.location = ''
      // this.date = ''
      // this.startTime = ''
      // this.endTime = ''
      // this.description = ''
      // console.log(newEvent)
      // this.events.push(newEvent)
    },
    onDelete (id) {
      let url = `http://localhost:5000/action/${id}`
      let indexOfArrayItem = this.events.findIndex(i => i._id === id)
      if (window.confirm('Do you really want to delete?')) {
        axios.delete(url).then(() => {
          this.events.splice(indexOfArrayItem, 1)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style>
.container{
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}
.events-container{
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  background: lightgray;
  padding: 10px;
  margin: 0 auto;
  border-radius: 3px;
}

#event-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
}

label{
  font-weight: bold;
  float: left;
}

input, textarea{
  margin: 5px;
}

.contact-connect-container{
  width: 30%;
  margin: 0 auto;
}

.find-my-button, .event-submit{
  border: 5px outset #060F88;
    border-radius: 50px;
    background: #0713B0;
    color: #f6f6f6;
    height: 30px;
    width: auto;
    font-size: 16px;
    margin-bottom: 25px;
    margin-top: 10px;
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

.event-list{
  background: #e8daf7;
  border-radius: 3px;
}

.event-desc{
  width: 60%;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 8px;
}

.event-title{
  padding-top: 8px;
}

.delete-icon{
  width: 17px;
  height: auto;
  margin-left: 7px;
}

</style>