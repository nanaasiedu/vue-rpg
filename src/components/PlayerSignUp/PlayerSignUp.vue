<template>
  <div class="player-sign-up">
    <div class="message">{{message}}</div>
    <form>
      <label>Name: {{name}}</label>
      <input v-model="name" type="text" class="name"/>
      <label>Class: {{heroClass}}</label>
      <select v-model="heroClass" class="hero-class">
        <option>Thief</option>
        <option>Shadow</option>
      </select>

      <input type="submit" value="Create Character" v-on:click="validatePlayer"/>
    </form>
  </div>
</template>

<script lang="ts" src="./PlayerSignUp.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./PlayerSignUp.css">
</style>
