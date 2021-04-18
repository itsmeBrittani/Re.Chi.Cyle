<template>
<div>
    <form id="signup-form">
    <!-- name -->
    <div class="field">
        <label class="label">Name</label>
        <input type="text" class="input" name="name">
    </div>

    <!-- email -->
    <div class="field">
        <label class="label">Email</label>
        <input type="email" class="input" name="email">
    </div>

    <!-- submit button -->
    <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
    </div>
    </form>

</div>
</template>
<script>
    export default {
      data () {
        return {
        }
      }
    }
</script>

<style>
#map{
    width: 100%;
    height: 500px;
    background: lightgray;
    margin-bottom: 10px;
}
</style>