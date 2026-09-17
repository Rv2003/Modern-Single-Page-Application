import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userstore = defineStore('login', () => {
 
  const name = ref<string | null>(localStorage.getItem('name'));
  const token = ref<string | null>(localStorage.getItem('token'));
  const image = ref<string | null>(localStorage.getItem('image'));
  const booking = ref<string | null>(localStorage.getItem('image'));
  const notifkey = ref<number>(0);
  const show = ref<boolean>(false);

 
  function saveUser(data: { accessToken: string; username: string; image: string }) {
    token.value = data.accessToken;
    name.value = data.username;
    image.value = data.image;

    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('name', data.username);
    localStorage.setItem('image', data.image);
  }

 
  function clearUser() {
    token.value = null;
    name.value = null;
    image.value = null;

    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('image');
  }

  return {
    name,
    token,
    image,
    notifkey,
    show,
    saveUser,
    clearUser
  }
})