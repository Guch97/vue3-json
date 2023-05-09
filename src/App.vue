<!--
 * @Author: xs
 * @Date: 2023-05-08 15:16:18
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <p>{{ name }}</p>
  <p>{{ name2 }}</p>
  <p>{{ data.nameAge }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    console.log("this.name :>>> ", this.name); //xs
    console.log("this.data :>>> ", this.data); //xs
  },
  setup(props, { slots, attrs, emit }) {
    const data = reactive({
      nameAge: "joke",
    });
    const nameRef = ref("jocky");
    // setInterval(() => {
    //   data.nameAge += "1";
    // }, 1000);
    // setInterval(() => {
    //   nameRef.value += "1";
    // }, 1000);
    const computedName = computed(() => {
      return nameRef.value + "2";
    });
    watchEffect(() => {
      console.log("nameRef.value :>>> ", nameRef.value); //xs
    });
    return {
      data,
      name: nameRef,
      name2: computedName,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
