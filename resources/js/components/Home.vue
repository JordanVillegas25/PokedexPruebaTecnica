<template>
  <div class="row" style="margin-top: -15px">
    <div class="col-sm-3"></div>
    <div class="col-sm-5">
      <form class="d-flex" @submit.prevent="searchPokemon">
        <input
          class="form-control me-2"
          v-model="form.search"
          type="search"
          placeholder="Nombre de pokemon o numero pokedex"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
    <div></div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        class="table--items products__list__item"
        v-for="pokemon of pokemones"
        :key="pokemon.data.id"
      >
        <div
          class="card text-center"
          style="
            max-width: 300px;
            min-height: 350px;
            border-radius: 15px;
            margin-bottom: 10px;
            background-color: white;
          "
        >
          <h5
            class="card-title"
            style="align-center; background-color:black;color:white; padding-bottom: 5px;"
          >
            <b>
              {{ pokemon.data.name.toUpperCase() }}
            </b>
          </h5>
          <img
            :src="pokemon.data.sprites.other['official-artwork'].front_default"
            class="card-img-top"
            style="height: 350px; width: 100%; border-radius: 5px"
            alt="Sin imagen en los registros"
          />
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <label for="staticEmail" class="col-sm-7 col-form-label"
                  >Experiencia base :</label
                >
                <div class="col-sm-5">
                  <span
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail"
                  >
                    {{ pokemon.data.base_experience }}</span
                  >
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <label for="staticEmail" class="col-sm-7 col-form-label"
                  >peso :</label
                >
                <div class="col-sm-5">
                  <span
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail"
                  >
                    {{ pokemon.data.weight }}Kilos</span
                  >
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <label for="staticEmail" class="col-sm-7 col-form-label"
                  >Abilidad Principal :</label
                >
                <div class="col-sm-5">
                  <span
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail"
                  >
                    {{ pokemon.data.abilities[0].ability.name }}</span
                  >
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <label for="staticEmail" class="col-sm-7 col-form-label"
                  >tipos :
                </label>
                <div class="col-sm-5">
                  <span
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail"
                  >
                    {{ pokemon.data.types[0].type.name }}
                    {{
                      pokemon.data.types.length == 2
                        ? ", " + pokemon.data.types[1].type.name
                        : ""
                    }}</span
                  >
                </div>
              </div>
            </li>
          </ul>
          <div class="card-body">
            <p class="card-text"></p>
            <div class="card-footer">
              <button
                href="#"
                class="btn btn-primary"
                @click="addFavoritePokemon(pokemon.data.id)"
              >
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click="previousPagination"
              tabindex="-1"
              aria-disabled="true"
              >Previous</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" href="#">{{ currentPage }}</a>
          </li>

          <li class="page-item">
            <a class="page-link" @click="nextPagination" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pokemones: {},
    countPagination: 1,
    currentPage: 1,
    currentUrl: "https://pokeapi.co/api/v2/pokemon/?limit=6&offset=0", //guarda la ruta principal de conexion a la api
    nextUrl: "",
    previousUrl: "",
    form: {
      search: "",
    },
  }),
  created() {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")==""){ //verificacion de inicio de sesion
 this.$router.push("/loguin");
    }else{
 this.getPokemons();
    }
   
    
  },
  methods: {
    async getPokemons() {
      //conecta con la api y obtienelos registros de pokemon
      let vectorPokemon = [];

      await this.axios.get(this.currentUrl).then((all) => {
        //ejecuta la conexion a la api con una url dinamica
        let { data } = all;
        this.nextUrl = data.next; //asigna las nuevas rutas siguientes y anteriores para la paginacion
        this.previousUrl = data.previous;
        //  console.log(this.pokemones);
        data.results.forEach((item) => {
          //recorre cada pokemon de la lista principal y hace una nueva solicitud por los datos de cada pokemon
          this.axios.get(item.url).then((res2) => {
            vectorPokemon.push(res2); //inserta los datos en una lista temporal
          });
        });
      });
      this.pokemones = vectorPokemon;
      console.log(this.pokemones);
    },
    async addFavoritePokemon(idpokemon) {
      //agrega un nuevo registro de favorito del cliente
      await this.axios
        .post("/api/register-favorites", { pokemon_id: idpokemon })
        .then(
          (res) => {
            if (res.data.status == 1) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: res.data.msj,
                showConfirmButton: false,
                timer: 1500,
              });
            }
            if (res.data.status == 0) {
              Swal.fire({
                position: "top-center",
                icon: "info",
                title: "Ya tienes este pokemon, como favorito",
                showConfirmButton: false,
                timer: 1500,
              });
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
    nextPagination() {
      //actualiza las rutas tanto la actual como la siguiente y la enterior
      if (this.nextUrl != null) {
        this.currentPage++;

        this.currentUrl = this.nextUrl;
        this.getPokemons();
      }
    },
    previousPagination() {
      if (this.previousUrl != null) {
        this.currentPage--;

        this.currentUrl = this.previousUrl;
        this.getPokemons();
      }
    },
    async searchPokemon() {
      let vectorPokemon = [];
      if (this.form.search != "") {
        await this.axios
          .get(
            "https://pokeapi.co/api/v2/pokemon/" +
              this.form.search.toLowerCase()
          )
          .then((res) => {
            vectorPokemon.push(res);
            console.log(this.pokemones);
            this.pokemones = vectorPokemon;
          })
          .catch((err) => {
            Swal.fire({
              position: "top-center",
              icon: "info",
              title: "Sin registros",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      } else {
        this.getPokemons();
      }
    },
  },
};
</script>