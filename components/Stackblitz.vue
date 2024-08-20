<!--
A simple wrapper for embeded Stackblitz 

Usage:

<Stackblitz id="angular-druxxd" file="src%2Fmain.ts"/>
-->


<script setup lang="ts">
defineProps<{
  id: string
  file: string
  width?: string|number
  height?: string|number
}>()
</script>

<template>
<iframe 
class="youtube"
:width="width" 
:height="height" 
:src="`https://stackblitz.com/edit/${id}?embed=1&file=${file}&hideNavigation=1`" 
allowfullscreen="allowfullscreen" 
allowpaymentrequest 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
frameborder="0"/>


</template>