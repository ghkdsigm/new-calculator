<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <H2>디딤돌</H2>
    <div class="wrap">
      <div>*본 기준은 30세이상 미혼 단독 세대주 기준인점을 참고하세요</div>
      <div class="wrapper">
        <div>
          <label for="house">부동산 </label>
          <input
            v-model="housePrice"
            type="text"
            id="house"
            ref="houses"
            maxlength="9"
            style="width: 100px"
          />
          <span>= {{ priceToString(housePrice) + '원' }}</span>
        </div>
        <div>
          <input
            type="radio"
            name="radioBtn"
            id="r1"
            @change="radioChange($event)"
            value="80"
            checked="checked"
          />
          <label for="r1" style="margin-right: 5px">ltv 80%</label>
          <input
            type="radio"
            name="radioBtn"
            id="r2"
            @change="radioChange($event)"
            value="70"
          />
          <label for="r2">ltv 70%</label>
        </div>
        <div>
          {{ 'LTV' + '(' + `${this.ltv === 0.8 ? '80%' : '70%'}` + ')' }} =
          {{ priceToString(sum2) + '원' }}
        </div>
        <div>
          디딤돌2억 빼고 받아야할 보금자리론 =
          {{ housePrice > 0 ? priceToString(result) + '원' : 0 }}
        </div>
        <div>
          매물 대비 필요 현금 =
          {{ housePrice === 0 ? '' : priceToString(truthPrice) + '원' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      housePrice: '',
      inputPrice: 0,
      rendedPrice: 0,
      //실시간텍스트
      forbiddenText: '안되',
      inputText: '오늘은 날씨가 좋습니다.',
      ltv: 0.8,
    };
  },
  computed: {
    //ltv
    sum2() {
      return this.housePrice * this.ltv;
    },
    result() {
      return this.sum2 - 200000000;
    },
    truthPrice() {
      return this.housePrice - this.sum2;
    },
  },
  methods: {
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    radioChange(event) {
      //var selected = event.target.value;
      var selected = event.target.value;
      console.log(selected);
      if (Number(selected) === 80) {
        this.ltv = 0.8;
      } else {
        this.ltv = 0.7;
      }
    },
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
</style>
