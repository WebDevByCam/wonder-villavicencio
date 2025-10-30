<template>
  <section class="testimonials-section">
    <div class="testimonial-header">
      <h3>Testimonios</h3>
      <p class="review-rating">
        EXCELENTE ⭐⭐⭐⭐⭐ <strong>14 reseñas</strong> <span class="google-icon">Google</span>
      </p>
    </div>

    <div class="testimonials-grid">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="testimonial-card"
      >
        <div class="testimonial-top">
          <div class="user-info">
            <div class="user-avatar">{{ testimonial.avatar }}</div>
            <div>
              <strong>{{ testimonial.name }}</strong><br><small>{{ testimonial.time }}</small>
            </div>
          </div>
          <div class="google-icon">G</div>
        </div>
        <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-text">{{ testimonial.text }}</p>
      </div>
    </div>

    <div class="testimonial-cta">
      <a
        href="https://agenda.kumbio.com/wonder-nails-1212"
        class="appointment-btn"
        target="_blank"
        aria-label="Haz tu reserva en línea"
      >
        HAZ TU RESERVA
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    name: 'Angie Barrera',
    time: 'Hace 1 día',
    avatar: 'A',
    text: 'Es un lugar acogedor ambiente tranquilo y ofrecen un buen servicio con las mejores profesionales.'
  },
  {
    id: 2,
    name: 'Diana Carvajal',
    time: 'Hace 2 días',
    avatar: 'D',
    text: 'Me encanta es un lugar fresco acogedor y aparte de eso te atienden muy bien ☺️dan un buen servicio súper recomendado 🫶🏻'
  },
  {
    id: 3,
    name: 'Viviana Ruda',
    time: 'Hace 4 días',
    avatar: 'V',
    text: 'Excelente lugar súper recomendado.un espacio donde sientes la comodidad excelente servicio trabajan con los mejores productos de la ciudad y las niñas sin duda altamente capacitadas'
  },
  {
    id: 4,
    name: 'Paula Rivera',
    time: 'Hace 1 semana',
    avatar: 'P',
    text: 'Excelente servicio, te hacen sentir muy relajada y consentida me encanta 🥰❤️'
  },
  {
    id: 5,
    name: 'Yina Castro',
    time: 'Hace 3 meses',
    avatar: 'Y',
    text: 'Excelente, es un lugar maravilloso y su personal es muy profesional y atento'
  },
  {
    id: 6,
    name: 'Liz Sarria',
    time: 'Hace 5 meses',
    avatar: 'L',
    text: 'Excelente servicio, te hacen sentir como una reina, súper recomendados 😊'
  },
  {
    id: 7,
    name: 'Jeimi Bermudez',
    time: 'Hace 7 meses',
    avatar: 'J',
    text: 'Demasiado perfecto!! La amabilidad de todo el personal, la atención al cliente! Súper consentida, por más lugares bellos como estos 🥰😍'
  },
  {
    id: 8,
    name: 'Ximena Mondragon',
    time: 'Hace 9 meses',
    avatar: 'X',
    text: 'La atención y cuidado con el que hacen los procedimientos es 10/10 🤩 Recomendadisimo'
  }
]
</script>

<style scoped>
/* Estilos en main.scss */
</style>