<template>
  <div>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <form @submit.prevent="registerUser">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Nombre</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                v-model="form.name"
                class="form-control-plaintext"
                id="staticEmail"
                placeholder="Digite su nombre"
              />
            </div>
          </div>
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
                to="/loguin"
                class="nav-link logoutbutton"
                >Loguin</router-link
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
    form: {
      name: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    async registerUser() { //envia los datos del nuevo usuario para su validacion y registro en la base de datos del back
      await this.axios
        .post("/api/register", this.form)
        .then(
          (res) => {
            if (res.data.status == 1) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registrado con exito!",
                showConfirmButton: false,
                timer: 1500,
              });
              this.$router.push("loguin"); //refirige a iniciar sesion al registrarse
            }
          },
          function (error) {//notifica las validaciones de formulario encontrados 
            let temp = "";
            if (error.response.data.errors.name != null)
              temp += error.response.data.errors.name + " ";
            if (error.response.data.errors.email != null)
              temp += error.response.data.errors.email + " ";
            if (error.response.data.errors.password != null)
              temp += error.response.data.errors.password + " ";
            Swal.fire({
              icon: "error",
              title: "Campos con errores",
              text: temp,
            });
          }
        )
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Error en credenciales",
            text: err,
          });
        });
    },
  },
};
</script>