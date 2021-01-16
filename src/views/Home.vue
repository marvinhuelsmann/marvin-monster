<template>
  <div class="home">

    <div class="white-shadow white-card" style="padding-top: 5px">

      <p class="smaller-normal-text">© {{today.getFullYear()}}
        <a style="color: #3f3f57" href="https://marvhuelsmann.de">Marvin Hülsmann</a></p>


      <div class="blue-card">

        <br class="no-move"/>
        <br class="no-move"/>
        <br class="no-move"/>

        <div class="middle green-shadow gray-card">

          <br class="no-move"/>

          <b-avatar class="profil-pic" size="140px" badge-variant="info"
                    src="https://i.imgur.com/emWZNIV.png">
          </b-avatar>

          <br class="no-move"/>
          <br class="no-move"/>

          <h1 class="text-dark display-title">Marvin</h1>


          <p class="smaller-normal-text">
            <fai style="color:#505050;" :icon="['fas', 'thumbtack']" size="1x"/>
            Hamm, Germany
            <br class="no-move"/>
            <fai style="color:#505050;" :icon="['fas', 'birthday-cake']" size="1x"/>
            {{getBirthdayMessage()}}
          </p>

          <br class="no-move"/>
          <hr/>

          <br class="no-move"/>
          <br class="no-move"/>

          <p class="smaller-normal-text container" style="padding-left: 12px; padding-right: 12px">Marvin ist Administrator bei
            <a style="color: #6e951a" href="https://onegaming.group">OneGaming</a>, wie auch auf dem <a style="color: #72cb9d" href="https://mcone.eu">MCONE
              Netztwek</a>. Außerdem ist er der Erfinder von der <a style="color: #9f60af" href="https://labyhelp.de">LabyHelp Group</a>. Dazu entwickelt er an <a style="color: #009925" href="https://github.com/EchiumMC">EchiumMC</a> ein Open Source MC CoreSystem für Entwickler und Serverbesitzer. Zuletzt findest du hier einen <a href="https://marv.link/" style="color: #9ab4e7">Link Shorter</a> der in der letzten Zeit entwicklet wurde.</p>

          <br class="no-move"/>

          <p class="smaller-normal-text" style="padding-left: 35px; padding-right: 35px">
            Weitere Information erhälts du unter meiner <a href="https://marvhuelsmann.de">Landing Page Seite</a>.
          </p>

          <br class="no-move"/>
        </div>


        <br class="no-move"/>
        <br class="no-move"/>
      </div>

    </div>

    <br class="no-move"/>
    <br class="no-move"/>

    <p class="smaller-normal-text" style="padding-left: 10px">
      <a style="color: #979797;" href="https://marvhuelsmann.de/imprint">Data Privacy</a> - <a style="color: #979797;" href="https://github.com/marvinhuelsmann/marvin-site-monster">view on GitHub</a></p>


  </div>

</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        birthday: this.getBirthdayMatch(),
        today: new Date()
      }
    },
    methods: {
      getBirthdayMessage() {
        if (this.getBirthdayMatch() === 0) {
          return "Marvin hat heute Geburtstag!"
        } else if (this.getBirthdayMatch() === 1) {
          return "Noch einmal schlafen!"
        } else if (this.getBirthdayMatch() <= 5) {
          return "Noch " +  this.getBirthdayMatch() + " mal schlafen!"
        } else if (this.getBirthdayMatch() < 100) {
          return "Marvin hat bald Geburtstag"
        }  else if (this.getBirthdayMatch() === 364 ||
                this.getBirthdayMatch() === 363 ||
                this.getBirthdayMatch() === 362) {
          return "Marvin hatte vor ein paar Tagen Geburtstag"
        } else if (this.getBirthdayMatch() >= 200) {
          return "Es wird noch lange dauern bis Marvin Geburtstag hat (" + this.birthday + " Tage)"
        }
      },
      getBirthdayMatch() {
        var today = new Date();
        var birthdayDate = new Date(today.getFullYear(), 8, 11);
        if (today.getMonth() === 8 && today.getDate() > 11) {
          birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
        }
        var one_day = 1000 * 60 * 60 * 24;
        return Math.ceil((birthdayDate.getTime() - today.getTime()) / (one_day));
      }
    }


  }
</script>
