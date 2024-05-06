<template>
  <div class="container mt-5">
    <h1 class="mb-4">Posts</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">UserId</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in Posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.userId }}</td>
          <td>
            <router-link :to="'/postsComp/' + post.id" class="btn btn-primary me-2">Details</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import { computed,onMounted } from "vue";
    import { useStore } from "vuex";
    export default {
    name: "PostsCompPage",
    setup() {
        let store = useStore();
        let Posts = computed(() => store.state.Posts);
        onMounted(() => {
        store.dispatch("GetAllPosts");
        });
            return {
        Posts,

        };
    },
    };
</script>

<style scoped>

</style>