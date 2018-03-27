import axios from 'axios'

const baseUrl = '/api'

const ajax = url => {
  return (
    axios.get(url).then(function(res){
      if(res.status >= 200 && res.status <300){
        return Promise.resolve(res.data.data)
      }
    }).catch(e => {
        return Promise,reject(e)
    })
  )
}

export default {

  getBannerList: _ => ajax(`${baseUrl}/billboard/home?__t=${+new Date()}`), 

  getNowPlaying: _ => ajax(`${baseUrl}/film/now-playing?__t=${+new Date()}&page=1&count=5`),

  getNowPlayingList: page => ajax(`${baseUrl}/film/now-playing?page=${page}&count=10`),

  getComingSoon: _ => ajax(`${baseUrl}/film/coming-soon?__t=${+new Date()}&page=1&count=10`),
  
  getComingList: page => ajax(`${baseUrl}/film/coming-soon?&page=${page}&count=10`),

  getFilmInfo : id => ajax(`${baseUrl}/film/${id}?__t=${+new Date()}`),

  getCinemaList : id => ajax(`${baseUrl}/film/${id}/cinema?__t=${+new Date()}`),
  
  getScheduleList : (filmid,cinemaid) => ajax(`${baseUrl}/schedule?__t=${+new Date()}&film=${filmid}&cinema=${cinemaid}`)

}
