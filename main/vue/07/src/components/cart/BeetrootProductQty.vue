<template>
  <div class="qty input-group">
    <beetroot-button
      class="btn btn-outline-secondary"
      @action="$emit('setQty', -1)"
      text="-"
    />
    <input class="form-control" type="number" @input="setQty" :value="qty" />
    <beetroot-button
      class="btn btn-outline-secondary"
      text="+"
      @action="$emit('setQty', 1)"
    />
  </div>
</template>

<script>
import BeetrootButton from "../ui/BeetrootButton.vue";
export default {
  components: { BeetrootButton },
  name: "beetroot-product-qty",
  emits: ["setQty"],
  props: {
    qty: Number,
  },
  methods: {
    setQty(e) {
      this.$emit("setQty", +e.target.value, true);
    },
  },
};
</script>
