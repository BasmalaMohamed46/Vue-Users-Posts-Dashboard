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
    import { computed,onMounted, ref } from "vue";
    import { useStore } from "vuex";
    import { useRoute } from "vue-router";
    export default {
        name: 'PostCompDetails',
        setup(){
        let store = useStore();
        const route = useRoute();
        let id = ref(route.params.id);
        let postDetails= computed(() => store.state.postDetails);
        onMounted(() => {
        store.dispatch("GetPostDetails", id.value);
        });
        return{
            postDetails,
        }
        }
    }
</script>

<style scoped>

</style>