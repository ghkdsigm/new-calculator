<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <H2>전자&가전 계산</H2>
    <div class="wrap">
      <div class="wrapper">
        <form class="calc" @submit="calc">
          <div style="padding-bottom: 5px">
            <label for="categorytag" style="padding-right: 5px">항목</label>
            <input type="text" id="categorytag" v-model="category" />
          </div>
          <div>
            <label for="inputtag" style="padding-right: 5px">금액</label>
            <input type="number" id="inputtag" v-model="input" />
          </div>
          <div style="padding-left: 35px">
            <span>{{ priceToString(input) }} 원</span>
          </div>
          <button @click="calc" style="display: none"></button>
        </form>
        <div class="list">
          <ul>
            <li v-for="(item, i) in items" :key="i">
              <span>{{ item.category }}: </span>
              <span>{{ priceToString(item.price) }} 원</span>
            </li>
          </ul>
          <div>
            <span>합계: {{ priceToString(sum) }}</span>
            <span>원</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: '',
      input: '',
      items: [],
      total: 0,
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    sum() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.total + Number(this.input);
    },
    sum2() {
      return this.category * this.input;
    },
    result() {
      return this.sum2 - 200000000;
    },
    truthPrice() {
      return this.housePrice - this.sum2;
    },
  },
  methods: {
    calc(e) {
      e.preventDefault();
      if (this.category !== '' || this.input !== '') {
        const res = {
          category: this.category,
          price: this.input,
        };
        this.items.push(res);
        this.addStateValue(this.items);
        this.addTotals(res.price);
        this.sum(res.price);
        //this.total = this.$store.state.total;
        this.category = '';
        this.input = '';
        e.target.form[0].focus();
      } else {
        alert('입력이 필요');
      }
    },
    addStateValue(el1) {
      this.$store.dispatch('toggleStateUser', el1);
    },
    addTotals(el1) {
      this.$store.dispatch('addTotal', el1);
    },
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  mounted() {
    this.items = this.$store.state.items;
    this.total = this.$store.state.total;
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.wrapper {
  margin: 40px auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
.list {
  width: 100%;
  text-align: left;
}
form {
  text-align: left;
}
input {
  padding: 5px;
}
</style>
