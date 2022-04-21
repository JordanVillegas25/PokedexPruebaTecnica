<template>
  <div>

    <form @submit.prevent="login">
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="form.email"
            class="form-control-plaintext"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            v-model="form.password"
            class="form-control"
            id="inputPassword"
          />
        </div>
      </div>
      <button class="btn btn-primary">Enviar</button>
    </form>
    <div class="mb-3 row">
      <div class="col-sm-1">
        <a class="btn-light">
          <router-link
            exact-active-class="active"
            to="/registerUser"
            class="nav-link"
            >Registro</router-link
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {},
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async login() {
      await this.axios
        .post("/api/login", this.form)
        .then(
          (res) => {
              if(res.data.status==1){
   this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
              localStorage.setItem('token', res.data.access_token);
              this.$router.push('/');
              }else{
                  console.log(res.data)
              }
          
          },
          function (error) {
            console.log(error.response.data);
          }
        )
        .catch((err) => {
          console.log("error" + err);
        });
    },
  },
};
</script>