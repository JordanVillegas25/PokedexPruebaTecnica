<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Pokedex</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li class="nav-item" aria-current="page">
              <router-link
                exact-active-class="active"
                to="/"
                class="nav-link active"
                v-if="token != ''"
                aria-current="page"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item" aria-current="page">
              <router-link
                exact-active-class="active"
                to="/favoritepokemon"
                class="nav-link"
                v-if="token != ''"
                aria-current="page"
                >Pokemon Favoritos <b>{{ count }}</b></router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                exact-active-class="active"
                to="/loguin"
                class="nav-link"
                v-if="token == ''"
                >Loguin</router-link
              >
            </li>
            <li class="nav-item logoutbutton">
              <button
                exact-active-class="active"
                class="nav-link logoutbutton"
                @click="logout"
                v-if="token != ''"
              >
                Logout
              </button>
            </li>
          </div>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view> </router-view>
    </div>
  </main>
</template>
<script>
export default {
  data: () => ({
    user: {},
    token: "",
    count: "",
  }),
  created() {
    this.token = localStorage.getItem("token"); //asigna el  token de local storage a una variable local para comprobaciones
    this.countFavorites();
  },
  methods: {
    async logout() {
      //metodo que se encarga de cerrar sesion y eliminar los token
      Swal.fire({
        title: "Estas seguro?",
        text: "¿Deseas cerrar sesion?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .get("/api/logout")
            .then(
              (res) => {
                localStorage.removeItem("token"); //elimina los token y encabezados
                localStorage.setItem("token", "");
                this.token = "";

                this.$router.push("/loguin");
              },
              function (error) {
                console.log(error.response.data);
              }
            )
            .catch((err) => {
              console.log("error" + err);
            });
          Swal.fire("sesion cerrada!", "Esperamos verte pronto", "success");
        }
      });
    },
    async countFavorites() {
      await this.axios
        .post("/api/get-count-favorites")
        .then((res) => {
          console.log(res.data.count);
          this.count = res.data.count;
          //  this.axios.defaults.headers.common['Authorization'] = '';
        })
        .catch((err) => {
          console.log("error" + err);
        });
    },
  },
};
</script>