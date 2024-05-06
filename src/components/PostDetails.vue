<template>
  <div v-if="postDetails" class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h1 class="card-title mb-0">Post Details</h1>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <strong>Id:</strong> {{ postDetails.id }}
            </div>
            <div class="mb-3">
              <strong>Title:</strong> {{ postDetails.title }}
            </div>
            <div class="mb-3">
              <strong>Body:</strong> {{ postDetails.body }}
            </div>
            <div class="mb-3">
              <strong>UserId:</strong> {{ postDetails.userId }}
            </div>
            <div class="mb-3">
              <strong>Tags:</strong>
              <ul class="list-inline">
                <li v-for="(tag, index) in postDetails.tags" :key="index" class="list-inline-item">{{ tag }}</li>
              </ul>
            </div>
            <div class="mb-3">
              <strong>Reactions:</strong> {{ postDetails.reactions }}
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <router-link :to="'/add/' + postDetails.id" class="btn btn-primary me-md-2">Edit</router-link>
              <button @click="deletePost(postDetails.id)" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container mt-5">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'PostDetails',
  computed: {
    postDetails() {
      return this.$store.state.postDetails;
    }
    },
    methods: {
       async deletePost(id){
        try {
          await this.$store.dispatch("DeletePost", id);
          this.$router.push("/posts");
        } catch (error) {
          console.error(error);
        }
       }
    },
    created() {
      this.$store.dispatch("GetPostDetails", this.$route.params.id);
    },
};
</script>

<style scoped>

</style>
