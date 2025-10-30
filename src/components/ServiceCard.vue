<template>
  <div class="service-card" :style="{ backgroundImage: `url(${service.image})` }">
    <div class="card-content">
      <h3>{{ service.title }} <br /><span>{{ service.subtitle }}</span></h3>
      <p>{{ service.description }}</p>
      <button class="card-button" @click="toggleMenu(service.id)">
        {{ showMenu ? 'Ocultar Menu' : 'Ver Menu Completo' }}
      </button>
      <ul class="service-menu" :class="{ active: showMenu }">
        <li v-for="item in service.menu" :key="item">
          <strong v-if="item.category">{{ item.category }}</strong>
          <span v-if="item.items">{{ item.items.join(' / ') }}</span>
          <span v-else>{{ item.item || item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  menu: any[]
}

defineProps<{
  service: Service
}>()

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style scoped>
/* Styles in main.scss */
</style>