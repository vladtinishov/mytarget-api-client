<template>
    <div class="main">
        <div class="section">
            <label :for="id">{{ label }}</label>
            <input :type="type" :id="id" @input="input" maxlength="50">
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default ({
    props: ["type", "label", "id", "isUrlInput"],
    methods: {
        ...mapActions(["createUrl"]),
        input() {
            let value = document.getElementById(this.id).value;
            if (this.isUrlInput == "true") {
                if (value.length > 10) {
                    this.createUrl(value);
                }
            }
            this.$emit("input", value);
        }
    }
})
</script>

<style scoped>
.main {
    width: 100%;
    display: flex;
    justify-content: center;
}
.section {
    margin: 5px 0;
    width: 500px;
}
input {
    width: 100%;
}
</style>