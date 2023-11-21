<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  msg: string;
}>();
const pingPayload = ref("/");
const checkPayload = ref("/");

async function ping() {
  console.log("ping request send");
  const response = await fetch("http://localhost:8080/ping", {
    mode: "cors",
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResult = await response.json();
  console.log(jsonResult);
  pingPayload.value = jsonResult.result;
}
async function check() {
  console.log("check request send");

  const response = await fetch("http://localhost:8080/check", {
    mode: "cors",
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const jsonResult = await response.json();
  console.log(jsonResult);
  checkPayload.value = jsonResult;
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Let's learn all about Cross Origin Resource Sharing</h3>
    <div class="container">
      <button class="button" @click="ping">Ping</button>
      <button class="button" @click="check">Check</button>
    </div>
    <p>ping response: {{ pingPayload }}</p>
    <p>check response: {{ checkPayload }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.container {
  display: flex;
  gap: 30px;
}

.button {
  width: 150px;
  position: relative;
  background-color: #04aa6d;
  border: none;
  font-size: 28px;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-top: 50px;
}

.button:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
