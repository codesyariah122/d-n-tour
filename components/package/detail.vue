<script>
export default {
  props: ["product"],

  head() {
    return {
      title: `D & N Tour - Package | ${this.product.categories[0].name} - Armada ${this.product.name}`,
    };
  },

  methods: {
    pickUp() {
      const url = "https://wa.me/6283165539138?text=";
      const contextWa = `Hallo,Admin D&N Tour, saya ingin memesan paket trip ${this.product.categories[0].name} - Armada ${this.product.name} Dari D & N Tour `;

      window.open(`${url}${encodeURIComponent(contextWa)}`);
    },
  },
};
</script>
<template>
  <div id="card-price" class="container card__price">
    <div class="d-flex justify-content-center row">
      <div class="col-md-12">
        <div class="row p-2 bg-white border rounded">
          <div class="col-md-3 mt-1">
            <img
              class="img-fluid img-responsive rounded product-image"
              :src="product.image.url"
            />
          </div>
          <div class="col-md-6 mt-1">
            <h5 class="text-capitalize">
              {{ product.categories[0].name }} - armada {{ product.name }}
            </h5>
            <div class="d-flex flex-row">
              <div class="ratings mr-2">
                <i class="fa fa-star"></i><i class="fa fa-star"></i
                ><i class="fa fa-star"></i><i class="fa fa-star"></i>
              </div>
              <span> {{ product.categories[0].name }} </span>
            </div>
            <p class="text-justify mb-0" v-html="product.description"></p>
          </div>
          <div
            class="align-items-center align-content-center col-md-3 border-left mt-1"
          >
            <div class="d-flex flex-row align-items-center">
              <h4 class="mr-1">Rp. {{ product.price.formatted }}</h4>
            </div>
            <h6 class="text-success"></h6>
            <div class="d-flex flex-column mt-4">
              <button
                @click="pickUp()"
                class="btn btn-primary btn-sm"
                type="button"
              >
                Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.product-image {
  width: 100%;
}

h5 {
  font-weight: 400;
}

@media screen and (max-width: 745px) {
  .card__price {
    margin-top: 2rem;
    margin-bottom: 7rem;
  }
}

@media (min-width: 992px) {
  .card__price {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}
</style>
