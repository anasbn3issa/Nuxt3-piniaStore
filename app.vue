<template>
  <div>
    <h1>Welcome</h1>
  </div>
</template>


<script setup>
import { useAuth } from './stores/auth';

  const authStore = useAuth();

  const { getUser, getToken } = authStore;

  
  
</script>