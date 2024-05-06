<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h3 class="mb-0">Post Form</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="!paramsId ? createPost() : updatePost()">
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" v-model.lazy="formData.title" class="form-control">
              </div>
              <div class="form-group">
                <label for="body">Body:</label>
                <input type="text" id="body" name="body" v-model.lazy="formData.body" class="form-control">
              </div>
              <div class="form-group">
                <label for="userId">UserId:</label>
                <input type="text" id="userId" name="userId" v-model.lazy="formData.userId" class="form-control">
              </div>
              <div class="form-group">
                <label for="tags">Tags:</label>
                <input type="text" id="tags" name="tags" v-model.lazy="formData.tags" class="form-control">
              </div>
              <div class="form-group">
                <label for="reactions">Reactions:</label>
                <input type="number" id="reactions" name="reactions" v-model.lazy.number="formData.reactions" class="form-control">
              </div>
              <div class="form-group mt-4">
                <button type="submit" class="btn btn-success btn-block" v-if="!this.paramsId">Add</button>
                <button type="submit" class="btn btn-primary btn-block" v-else>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>


    export default {
        name: 'AddEditPost',
        data() {
            return {
                paramsId: '',
                formData:{
                    title: '',
                    body: '',
                    userId: '',
                    tags: [],
                    reactions: ''
                }
        }},
        computed: {
          postDetails() {
            return this.$store.state.postDetails;
          }
          
        },
        created() {
          this.paramsId = this.$route.params.id;
          this.$store.dispatch("GetPostDetails", this.$route.params.id);

        },
        watch: {
          postDetails: {
            handler: function (val) {
              this.formData = val;
            },
            deep: true
          }
        },
        methods: {
            async createPost(){
                try{
                    await this.$store.dispatch("CreatePost", this.formData);
                    this.$router.push("/posts");
                }
                catch(err){
                    console.log(err);
                }
            },
            async updatePost(){
                try{
                    await this.$store.dispatch("UpdatePost", this.formData);
                    this.$router.push("/posts");
                }
                catch(err){
                    console.log(err);
                }
            }
        }

    }
</script>

<style scoped>

</style>