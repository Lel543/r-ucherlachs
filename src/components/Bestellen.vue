<template>
    <div class="container">
      <div class="row mt-1">
        <div class="twelve columns">
          <h1>Bestelldaten</h1>
        </div>
      </div>
      <div class="container">
        <div class="row mt-1">
          <div class="six columns">
            <form action="">
              <input type="text" name="" id="" placeholder="Vorname..."><br>
              <input type="text" name="" id="" placeholder="Nachname..."><br>
              <input type="text" name="" id="" placeholder="Email..."><br>
            </form>
          </div>
          <div class="six columns">
            <form action="">
              <input type="text" name="" id="" placeholder="Ort...">
              <input type="text" name="" id="" placeholder="PLZ...">
              <br>
              <input type="text" name="" id="" placeholder="Nachname..."><br>
              <input type="text" name="" id="" placeholder="Email..."><br>
            </form>
          </div>
        </div>
        <div class="row mt-1">
          <div class="ten columns">
            <span>Ich habe die AGBs gelesen, und akzeptikere diese...</span> <br>
            <span>Ich bestätige diese kostenpflichtige Bestellung</span>
          </div>
          <div class="two columns">
            <form action="">
              <input type="checkbox" value="gelesen"> <br>
              <input type="checkbox" value="gelesen">
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <hr class="seperator">
        </div>
      </div>
      <div class="twelve columns">
        <button class="btn-1">Bestellen</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Bestellen'
  };
  </script>
  
  <style scoped>
  
  </style>