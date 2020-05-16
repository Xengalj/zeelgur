<template>
  <el-row style="ablity-score">
    <el-col :span="4">
      <h4>Str {{/*this.npc.str.base*/}}</h4>
      <el-progress type="dashboard" :percentage="npc.str.perc" :color="customColors" :format="formatStr" :width="100" :stroke-width="12"></el-progress>
      <br>
      <el-button-group>
        <el-button type="info" icon="el-icon-minus" @click="decrease(npc.str)"></el-button>
        <el-button type="info" disabled>{{str_mod}}</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="increase(npc.str)"></el-button>
      </el-button-group>
    </el-col>

    <el-col :span="4">
      <h4>Dex {{/*this.npc.dex.base*/}}</h4>
      <el-progress type="dashboard" :percentage="npc.dex.perc" :color="customColors" :format="formatDex" :width="100" :stroke-width="12"></el-progress>
      <br>
      <el-button-group>
        <el-button type="info" icon="el-icon-minus" @click="decrease(npc.dex)"></el-button>
        <el-button type="info" disabled>{{dex_mod}}</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="increase(npc.dex)"></el-button>
      </el-button-group>
    </el-col>

    <el-col :span="4">
      <h4>Con {{/*this.npc.con.base*/}}</h4>
      <el-progress type="dashboard" :percentage="npc.con.perc" :color="customColors" :format="formatCon" :width="100" :stroke-width="12"></el-progress>
      <br>
      <el-button-group>
        <el-button type="info" icon="el-icon-minus" @click="decrease(npc.con)"></el-button>
        <el-button type="info" disabled>{{con_mod}}</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="increase(npc.con)"></el-button>
      </el-button-group>
    </el-col>

    <el-col :span="4">
      <h4>Int {{/*this.npc.int.base*/}}</h4>
      <el-progress type="dashboard" :percentage="npc.int.perc" :color="customColors" :format="formatInt" :width="100" :stroke-width="12"></el-progress>
      <br>
      <el-button-group>
        <el-button type="info" icon="el-icon-minus" @click="decrease(npc.int)"></el-button>
        <el-button type="info" disabled>{{int_mod}}</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="increase(npc.int)"></el-button>
      </el-button-group>
    </el-col>

    <el-col :span="4">
      <h4>Wis {{/*this.npc.wis.base*/}}</h4>
      <el-progress type="dashboard" :percentage="npc.wis.perc" :color="customColors" :format="formatWis" :width="100" :stroke-width="12"></el-progress>
      <br>
      <el-button-group>
        <el-button type="info" icon="el-icon-minus" @click="decrease(npc.wis)"></el-button>
        <el-button type="info" disabled>{{wis_mod}}</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="increase(npc.wis)"></el-button>
      </el-button-group>
    </el-col>

    <el-col :span="4">
      <h4>Cha {{/*this.npc.cha.base*/}}</h4>
      <el-progress type="dashboard" :percentage="npc.cha.perc" :color="customColors" :format="formatCha" :width="100" :stroke-width="12"></el-progress>
      <br>
      <el-button-group>
        <el-button type="info" icon="el-icon-minus" @click="decrease(npc.cha)"></el-button>
        <el-button type="info" disabled>{{cha_mod}}</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="increase(npc.cha)"></el-button>
      </el-button-group>
    </el-col>

  </el-row>
</template>

<script>
export default {
  name: 'AbilityScores',
  props: {
    re_roll: false,
    race: ''
  },
  watch: {
    re_roll: function () {
      this.setAbilities();
      this.setRacials();
    },
    race : function (value) { this.setRacials(); }
  },
  computed: {
    str_mod: function() { return Math.floor((this.npc.str.total-10) / 2); },
    dex_mod: function() { return Math.floor((this.npc.dex.total-10) / 2); },
    con_mod: function() { return Math.floor((this.npc.con.total-10) / 2); },
    int_mod: function() { return Math.floor((this.npc.int.total-10) / 2); },
    wis_mod: function() { return Math.floor((this.npc.wis.total-10) / 2); },
    cha_mod: function() { return Math.floor((this.npc.cha.total-10) / 2); },
 },
  data() {
    return {
      npc: {
        str: { name: 'Str', base: 0, total: 0, perc: 0 },
        dex: { name: 'Dex', base: 0, total: 0, perc: 0 },
        con: { name: 'Con', base: 0, total: 0, perc: 0 },
        int: { name: 'Int', base: 0, total: 0, perc: 0 },
        wis: { name: 'Wis', base: 0, total: 0, perc: 0 },
        cha: { name: 'Cha', base: 0, total: 0, perc: 0 },
      },
      customColors: [
        {color: '#161616', percentage: 21}, //8 9
        {color: '#F7A428', percentage: 41}, //10 11
        {color: '#0000CC', percentage: 61}, //12 13
        {color: '#00AA00', percentage: 81}, //14 15
        {color: '#AA0000', percentage: 100} //16 17
      ]
    };
  },
  mounted() {
    this.setAbilities();
    this.setRacials();
    this.$emit('abilities', this.npc);
  },
  methods: {
    // Set the Base Ability Scores to between 8 and 18 inclusive
    setAbilities() {
      for (const index in this.npc) {
        var abl = this.npc[index];
        var min = Math.ceil(8);
        var max = Math.floor(19);
        var rand = Math.random() * (max - min);
        abl.base = Math.floor(rand) + min;
        abl.perc = (abl.base - 8) * 10;
      }
    },
    // Sets the Ability Totals and add the racial bonuses
    setRacials() {
      for (const index in this.npc) {
        var abl = this.npc[index];
        abl.total = abl.base;
        this.race.ability_scores.forEach(function(element) {
          for (const key in element) {
            if (key == abl.name) { abl.total += parseInt(element[key]); }
          }
        });
        this.checkPerc(abl);
      }
    },
    increase(abl) {
      this.$emit('abilities', this.npc);
      abl.total += 1;
      this.checkPerc(abl);
    },
    decrease(abl) {
      this.$emit('abilities', this.npc);
      abl.total -= 1;
      this.checkPerc(abl);
    },
    checkPerc(abl) {
      abl.perc = (abl.total - 8) * 10;
      if (abl.perc > 100) {
        abl.perc = 100;
      } else if (abl.perc < 0) {
        abl.perc = 0;
      }
    },
    formatStr(percentage) { return this.npc.str.total; },
    formatDex(percentage) { return this.npc.dex.total; },
    formatCon(percentage) { return this.npc.con.total; },
    formatInt(percentage) { return this.npc.int.total; },
    formatWis(percentage) { return this.npc.wis.total; },
    formatCha(percentage) { return this.npc.cha.total; },
  },
};
</script>

<style lang="scss" scoped>
/* Does not actually get loaded :( */
.el-progress__text {
  font-size: 25px !important;
  font-weight: bold;
}
</style>
