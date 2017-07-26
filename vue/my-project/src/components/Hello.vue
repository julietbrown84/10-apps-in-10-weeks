<template>
<div class="hello" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" @mousemove="xCoordinate">
  <p><button @click="increment">+</button> {{ counter }} <button @click="decrement">-</button></p>
  <p>Pixels across: {{ x }}</p>
  <h3>Type here:</h3>
  <textarea v-model="message" class="message" rows="5" maxlength="72"></textarea><br>
  <p class="booktext">{{ message }} </p>
  <test></test>
</div>
</template>
<script>
import Test from './Test'

export default {
  name: 'hello',
  components: {
    Test
  },
  data () {
    return {
      counter: 0,
      x: 0,
      message: 'This is a good place to type things.'
    }
  },
  methods: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    },
    xCoordinate (e) {
      this.x = e.clientX
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
