<template>
  <div>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <form @submit.prevent="login">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Email</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                v-model="form.email"
                class="form-control-plaintext"
                id="staticEmail"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >Contraseña</label
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
          <div class="row">
            <div class="col-sm-5"></div>
            <div class="col-sm-3">
              <button class="btn btn-light">Enviar</button>
            </div>
            <div class="col-sm-3"></div>
          </div>
        </form>
        <div class="mb-3 row">
          <div class="col-sm-12 card-footer">
            <a class="btn-light">
              <router-link
                exact-active-class="active"
                to="/registerUser"
                class="nav-link logoutbutton"
                >Registro</router-link
              >
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    //datos a nivel local que almacenan los datos de formulario para ser enviados al back para validar
    user: {},
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async login() {
      //metodo que envia los datos al back
      await this.axios
        .post("/api/login", this.form)
        .then(
          (res) => {
            if (res.data.status == 1) {
              this.axios.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.access_token; //asigna el token a encabezado de las consultas a la pai para la validacion
              localStorage.setItem("token", res.data.access_token); //asigna el token creado para el usuario a una variable storage para usar en el front
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Iniciando sesion",
                showConfirmButton: false,
                timer: 1500,
              });
              this.$router.push("/"); //redirecciona al home al iniciar sesion
              window.location.reload();
            } else {
              Swal.fire({
                icon: "error",
                title: "Error en credenciales",
                text: res.data.msg,
              });
            }
          },
          function (error) {
            //imprime los errores de formulario que el back encuentre
            let temp = "";
            if (error.response.data.errors.email != null)
              temp += error.response.data.errors.email + " ";
            if (error.response.data.errors.password != null)
              temp += error.response.data.errors.password + " ";
            Swal.fire({
              icon: "error",
              title: "Error en credenciales",
              text: temp,
            });
          }
        )
        .catch((err) => {
          console.log("error" + err);
        });
    },
  },
};
</script>