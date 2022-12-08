<template>
  <div class="states">
    <div class="states_data">Indiana</div>
    <div class="states_data">Massachusetts</div>
    <div class="states_data">Texas</div>
    <div class="states_data">Wisconsin</div>
    <div class="states_data1"><a href="https://witty-frog-overalls.cyclic.app/about">About Me</a></div>
  </div>
</template>
<script>
export default {
  name: 'granite_info'
}

</script>
<style>
.states {
  text-align: center;
  display: inline-flex;
}

.states_data {
  padding-left: 150px;
  text-align: center;
  color: green;
  font-size: large;
  padding-bottom: 30px;
}

.states_data1 {
  padding-left: 150px;
  text-align: center;
  color: green;
  font-size: large;
  padding-bottom: 30px;
  text-decoration: underline;
}
</style>