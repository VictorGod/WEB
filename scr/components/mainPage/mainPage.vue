<template>
<section class="columns">
				<h2 >
					Мы CoworkingTime предоставляем коворкинги только проверенных арендодатей, где вы сможете найти то что ищите
				<p class="service__desc text">
          <router-link :to="{ name: 'Catolog'}"> 
          <button class="btn--primary addTask" @click="addToCart" >Там где тебе это удобно</button>
          </router-link>
</p>
        </h2>
				
			</section>

</template>

<script >
export default {
  name: "MainPage",
   props: {},
    data() {
      return {};
    },
    filters: {},
    methods: {    },
    mounted() {},
  }
</script>

<style lang="scss">
@import url("~@/assets/styles/style.css");
#app {
  max-width: 2000px;
  margin: auto;
}
body {
  overflow: overlay;
  
}



</style>