<template>
  <div>
    <div class="header-background">
      <img src="https://dummyimage.com/500/000/fff.png&text=MC" alt="character image" class="character-portrait">
    
      <div class="character">
        <h1 class="name">Maxwell Cornwald</h1>
        <h3 class="descriptor">Persona Information Utility</h3>
        <p class="switch">Feeling Dizzy? <a href="#">Switch Persona!</a></p>
      </div>

      <div class="bank">
        <h3 class="bank-title">Nexus Balance</h3>
        <h2 class="balance">$100,000.00</h2>
        <h3 class="bank-bills">Weekly Bills</h3>
        <h2 class="bills">$2,500.00</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persona'
}
</script>

<style>
  .header-background {
    background-color: white;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.25);
    width: 100%;
    height: 13rem;
  }

  .character {
    float: left;
    width: 40%
  }

  .character-portrait {
    width: 150px;
    margin-left: 5%;
    padding: 2% 0 2% 0;
    border-radius: 50%;
    float: left;
  }

  .name {
    color: #121212;
    margin-left: 20%;
    padding: 3% 0 0 0;
  }

  .descriptor {
    color: #6F6F6F;
    margin-left: 20%;
  }

  .switch {
    text-decoration: none;
    margin-left: 20%;
    padding: 2% 0 0 0;
  }
  
  .bank {
    float: right;
    width: 20%;
  }
  .bank-title {
    padding: 5% 0 0 0;
    margin-right: 10%;
    color: #121212;
  }

  .balance {
    color: green;
  }

  .bills {
    color: red;
  }

  .right {
    float: right;
  }
</style>
