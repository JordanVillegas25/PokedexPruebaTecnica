<template>
  <div>
    <div class="row">
      <h1>Favoritos</h1>
    </div>

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
            :src="pokemon.data.sprites.other.dream_world.front_default"
            class="card-img-top"
            style="height: 350px; width: 100%; border-radius: 5px"
            alt="..."
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
                class="btn btn-danger"
                @click="deleteFavoritePokemon(pokemon.data.id)"
              >
                <i class="fas fa-heart"></i>
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
  data: () => ({ //establece variables locales en la vista
    pokemones: {},
    currentPage: 1,
    currentUrl: "/api/get-favorites",
    nextUrl: "",
    previousUrl: "",
  }),
  created() { //ejecuta un metodo al iniciar la vista
    this.getPokemonsFavorites();
  },
  methods: {
    async getPokemonsFavorites() {//obtiene todos los pokemon de la lista de favoritos
      let vectorPokemon = [];

      await this.axios
        .post(this.currentUrl)
        .then(
          (res) => {
            if (res.data.status == 1) {
              this.nextUrl = res.data.data.next_page_url;
              this.previousUrl = res.data.data.prev_page_url;
              console.log(res.data.data);
              res.data.data.data.forEach((item) => { //recorre la lista que obtuvo del back y solicita a la pai de pokemon por media del id mas informacion del pokemon 
                this.axios
                  .get("https://pokeapi.co/api/v2/pokemon/" + item.pokemon_id)
                  .then((res2) => {
                    vectorPokemon.push(res2);//guarda cada registro de pokemon en una lista temporal para asignarla a la lista principal y recorrerla en la vista
                  });
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

      this.pokemones = vectorPokemon;//se guarda la lista en la lista global.
      
    },
    async deleteFavoritePokemon(idpokemon) {//elimina el registro de un favorito por medio del id del pokemon y dl usuario con sesion
      await this.axios
        .post("/api/delete-favorites", { pokemon_id: idpokemon })
        .then(
          (res) => {
            if (res.data.status == 1) {
              Swal.fire({
                position: "top-end",
                icon: "warning",
                title: res.data.msj,
                showConfirmButton: false,
                timer: 1500,
              });
              this.getPokemonsFavorites();
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
    nextPagination() {//se encarga de avanzar en la paginacion y mostrar mas registros
      if (this.nextUrl != null) {
        this.currentPage++;

        this.currentUrl = this.nextUrl;
        this.getPokemonsFavorites();
      }
    },
    previousPagination() {//se encarga de retroceder en la paginacion y mostrar mas registros o registro previos
      if (this.previousUrl != null) {
        this.currentPage--;

        this.currentUrl = this.previousUrl;
        this.getPokemonsFavorites();
      }
    },
  },
};
</script>