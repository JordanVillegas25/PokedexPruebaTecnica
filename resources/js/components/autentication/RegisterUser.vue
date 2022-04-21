<template>
 <div>
     <form @submit.prevent="registerUser">
       <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text"  v-model="form.name"  class="form-control-plaintext" id="staticEmail" placeholder="email@example.com">
    </div>
  </div>
       <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text"  v-model="form.email" class="form-control-plaintext" id="staticEmail" placeholder="email@example.com">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password"  v-model="form.password" class="form-control" id="inputPassword">
    </div>
  </div>
    <button class="btn btn-primary">Enviar</button>
     </form>
 </div>

</template>
<script>
export default {
    data: () => ({
         form: {
      name:"",
      email: "",
      password: "",
    }
    }),methods:{
        async registerUser(){
            await this.axios
        .post("/api/register", this.form)
        .then(
          (res) => {
              if(res.data.status==1){
                this.$router.push('loguin');
              }
              
          },
          function (error) {
            console.log(error.response.data);
          }
        )
        .catch((err) => {
          console.log("error" + err);
        });
        }
    }
}
</script>