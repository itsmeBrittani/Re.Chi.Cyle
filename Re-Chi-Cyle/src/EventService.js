// import axios from 'axios'
import API from '@/api'

// const url = 'http://localhost:5000/action/events'

// class EventService {
// // get posts
//   static getEvents () {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const res = await axios.get(url)
//         const data = res.data
//         resolve(
//           data.map(event => ({
//             ...event,
//             createdAt: new Date(event.createdAt)
//           }))
//         )
//       } catch (err) {
//         reject(err)
//       }
//     })
//   }

// create post
//     static insertEvent(event) {

//   }

// delete post
// }
export default {
  fetchEvents () {
    return API.get('events')
  }
}
