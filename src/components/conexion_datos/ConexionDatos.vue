<template>
  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConexionDatos",
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
            "http://jsonplaceholder.typicode.com/posts"
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData()
  }
};
</script>

<style lang="scss" scoped>
</style>