<div class="container">
  <form>
    <legend>Formulario</legend>
    <!-- Temperatura -->
    <div>
      <input
        type="number"
        name="temperature"
        id="temperature"
        min="0"
        placeholder="Escriba la temperatura"
        step="0.01"
      />
    </div>
    <!-- Irradiación -->
    <div>
      <input
        type="number"
        name="irradiation"
        id="irradiation"
        min="0"
        placeholder="Escriba la irradiación"
        step="0.01"
      />
    </div>
  </form>
</div>

<style type="text/scss">
  @import "../../styles/form.scss";
</style>
