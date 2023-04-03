
import { defineStore } from 'pinia'
import axios from "axios"
import {v4 as uuid} from 'uuid'
import {db} from '@/firebase.js'
import {setDoc,getDoc,doc} from "firebase/firestore"

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
            
         let userExists = await this.checkIfUserExists(res.data.sub)
         if(!userExists) await this.saveUserDetails(res)
   
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
    async checkIfUserExists(id){
      const docRef = doc(db,"users",id)
      const docSnap = await getDoc(docRef)
      return docSnap.exists()
    },
    async saveUserDetails (res){
      try {
        await setDoc(doc(db,"users",res.data.sub),{
          sub:res.data.sub,
          email:res.data.email,
          picture:res.data.picture,
          firstname:res.data.given_name,
          lastname:res.data.family_name,
        })
      }catch(error){
        console.log(error)
      }
    }
  },
  persist:true
})