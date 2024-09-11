<template>
  <div>
    <h3>Drag and Drop:</h3>

    <div v-draggable="{ id: 1, name: 'Елемент 1' }" class="draggable">
      <span>Element 1</span>
    </div>

    <div v-draggable="{ id: 2, name: 'Елемент 2' }" class="draggable">
      <span>Element 2</span>
    </div>

    <div class="drop-zone" @dragover.prevent @drop="handleDrop">drop</div>
  </div>
</template>

<script>
export default {
  methods: {
    handleDrop(event) {
      const data = event.dataTransfer.getData("text")
      const droppedItem = JSON.parse(data)
      alert(droppedItem.name)
    },
  },
}
</script>

<style>
.draggable {
  width: 200px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: grab;
  text-align: center;
}

.drop-zone {
  width: 300px;
  height: 150px;
  border: 2px dashed #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}
</style>
