<template>
  <div class="backdrop">
    <div class="modal">
      <div class="close" @click="closeModal">X</div>
      <h1>{{ heading }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background: white;
  border-radius: 10px;
  position: relative;
}

.close {
  position: absolute;
  right: -5px;
  top: -7px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: #f48668;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
}

.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
</style>
