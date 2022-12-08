<template>
  <div class="Granite">
    <div id="head">GRANITES IN USA</div><br>
  </div>
  <granite_info></granite_info>
  <Granite_details :values="values"></Granite_details>
</template>

<script>
import Granite_details from './components/Granite_details.vue';
import granite_info from './components/granite_info.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Granite_details,
    granite_info
  },
  data() {
    return {
      values: []
    }
  },
  methods: {
    async getgranitedata() {
      const response = await axios.get("https://witty-frog-overalls.cyclic.app/", {
        mode: 'no-cors',
        referrerPolicy: 'origin',
      });
      return await response.data;
    }
  },

  async created() {
    this.values = await this.getgranitedata();
  }
}
</script>

<style>
.Granite {
  text-align: center;
  font-size: x-large;
  margin: 10px;
}

#head {
  background-image: url('https://cdn.msisurfaces.com/images/colornames/black-pearl-granite.jpg');
  color: yellow;
  padding: 10px;
}
</style>