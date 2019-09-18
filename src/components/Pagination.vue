<template>
  <div>
     <nav aria-label="..." class="d-flex justify-content-center" >
      <ul class="pagination ">
        <li class="page-item" :class="{'disabled': !page.has_pre}">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
          @click.prevent="getPage(page.current_page - 1)">Previous</a>
        </li>
        <li class="page-item" v-for="item in page.total_pages" :key="item"
        :class="{'active':page.current_page === item}">
          <a class="page-link" href="#" @click.prevent="getPage(item)">{{item}}</a>
        </li>
        <li class="page-item" :class="{'disabled': !page.has_next}">
          <a class="page-link" href="#"
          @click.prevent="getPage(page.current_page + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
    },
  },
  methods: {
    getPage(page) {
      const vm = this;
      vm.$emit('switch', Number(page));
    },
  },
};
</script>

