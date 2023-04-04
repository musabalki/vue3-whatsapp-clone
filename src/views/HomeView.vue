<template>
    <div class="flex">
        <div id="Header" class="fixed w-[420px] z-10">
            <div class="bg-[#F0F0F0] w-full justify-between items-center px-3 py-2 flex">
                <img class="rounded-full ml-1 w-10" :src="userStore.picture || '' " alt="">
                <div class="flex items-center justify-center">
                    <AccountGroupIcon fillColor="#515151" class="mr-6" />
                    <DotsVerticalIcon @click="logout" fillColor="#515151" class="cursor-pointer" />
                </div>
            </div>
            <div class="bg-white w-full px-2 border-b shadow-sm">
                <div class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md">
                    <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
                    <input type="text" class="ml-5 appearance-none w-full bg-[#F0F0F0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-noe focus:shadow-outline placeholder:text-sm placeholder:text-gray-500" autocomplete="off" placeholder="Start a new chat">
                </div>
            </div>
        </div>
        <div v-if="showFindFriends">
            <ChatsView class="mt-[100px]" />           
        </div>
        <div v-else>
            <FindFriendsView/>
        </div>
        <div v-if="open">
            <MessageView/>
        </div>
        <div v-else class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center">
            <div class="grid h-screen place-items-center">
                <div>
                    <div class="w-full flex items-center justify-center">
                        <img width="375"  src="w-web-not-loaded-chat.png" alt="">
                         
                    </div>
                    <div class="text-[32px] text-gray-500 font-light mt-10">Whatsapp Web</div>
                    <div class="text-[14px] text-gray-600 mt-2">Whatsapp Web</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import ChatsView from "./ChatsView.vue"
import MessageView from "./MessageView.vue"
import FindFriendsView from "./FindFriendsView.vue"
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue"
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue"
import MagnifyIcon from "vue-material-design-icons/Magnify.vue"
import {useUserStore} from "../store/user-store"
import {useRouter} from "vue-router"

const userStore = useUserStore();
const open = ref(true)
const showFindFriends = ref(false)
const router = useRouter();


onMounted(async ()=>{
    try{ 
    await userStore.getAllUsers();
    //console.log(userStore.allUsers)
    }catch(error){
        console.log(error)
    }
})

const logout = ()=>{
    let res = confirm('Are you sute you want to logout ?');
    if(res) userStore.logout(); router.push('/login')
}

</script>
 
<style>

</style>