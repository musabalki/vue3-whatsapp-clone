
import { defineStore } from 'pinia'
import axios from "axios"

axios.defaults.baseURL="http://localhost:4001"
export const useUserStore = defineStore('userStore', {
  state: () => ({
    sub:'',
    email:'',
    picture:'',
    firstname:'',
    lastname:'',
  }),
  actions: {
    async getUserDetailsFromGoogle(response){
      try{
        let res = await axios.post('/api/google-login',{
        token:response.credential
            })
         this.sub=res.data.sub
         this.email=res.data.email
         this.picture=res.data.picture
         this.firstname=res.data.given_name
         this.lastname=res.data.family_name
        }catch(error){
            console.log(error)
        }
    },
    logout(){
         this.sub=""
         this.email=""
         this.picture=""
         this.firstname=""
         this.lastname=""
    },  
  },
  persist:true
})