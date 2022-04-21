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
            style="align-center; background-color:black;color:white"
          >
            {{ pokemon.data.name }}
          </h5>
          <img
            :src="pokemon.data.sprites.other.dream_world.front_default"
            class="card-img-top"
            style="height: 350px; width: 100%; border-radius: 5px"
            alt="..."
          />
             <ul class="list-group list-group-flush">
    <li class="list-group-item"> Experiencia base : {{ pokemon.data.base_experience }}</li>
    <li class="list-group-item">  peso : {{ pokemon.data.weight }}Kilos</li>
    <li class="list-group-item"> Abilidad Principal  : {{ pokemon.data.abilities[0].ability.name }}</li>
 
  </ul>
          <div class="card-body">
            <p class="card-text">
         
            </p>
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
  </div>
</template>
<script>
export default {
  data: () => ({
    pokemones: {},
  }),
  created() {
    this.getPokemonsFavorites();
  },
  methods: {
    async getPokemonsFavorites() {
      let vectorPokemon = [];

      await this.axios
        .post("/api/get-favorites")
        .then(
          (res) => {
            if (res.data.status == 1) {
              console.log(res.data.data);
              res.data.data.forEach((item) => {
                this.axios
                  .get("https://pokeapi.co/api/v2/pokemon/" + item.pokemon_id)
                  .then((res2) => {
                    vectorPokemon.push(res2);
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

      this.pokemones = vectorPokemon;
      console.log(this.pokemones);
    },
    async deleteFavoritePokemon(idpokemon) {
      await this.axios
        .post("/api/delete-favorites", { "pokemon_id": idpokemon })
        .then(
          (res) => {
            if (res.data.status == 1) {
              alert(res.data.msj);
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
  },
};
</script>