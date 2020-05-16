<template>
  <div id="app">

    <el-form ref="npc" :model="npc" label-width="120px">

      <el-row>
        <el-col :span="10">
          <el-form-item label="Name" icon="el-icon-female">
            <el-input v-model="npc.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="Race">
            <el-input v-model="npc.race.name" />
            <!--el-select v-model="form.region" placeholder="please select your zone">
            Race drop down, onChange, reroll stats and name
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select-->
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="Class">
            <el-input v-model="npc.class" />
            <!-- make dropdown -->
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="Level">
            <el-input v-model="npc.level" />
            <!-- add buttons to change level -->
          </el-form-item>
        </el-col>
      </el-row>

      <AbilityScores :race="npc.race" :re_roll="this.re_roll" v-on:abilities="onChildClick"/>

      <el-row>
        <hr>
        <h2>Defense</h2>
        <el-row>
          AC
          <el-input-number v-model="npc.AC" @change="changeAC" :controls="false" />
        </el-row>
        <el-row>
          HP
        </el-row>
        <el-row>
          Saves
        </el-row>
      </el-row>

      <el-row>
        <hr>
        <h2>Offense</h2>
        <el-row>
          Melee
        </el-row>
        <el-row>
          Ranged
        </el-row>
        <el-row>
          Spells
        </el-row>

      </el-row>
      <el-row>
        <hr>
        <h2>Stats</h2>
        <el-row>
          BAB  CMB  CMD
        </el-row>
        <el-row>
          Feats
        </el-row>
        <el-row>
          Skills
        </el-row>
        <el-row>
          Others
        </el-row>

      </el-row>

      <el-form-item>
        {{ fromChild }}
        <el-button type="primary"@click="reRoll()">Re-Roll</el-button>
        <el-button type="success" @click="submitForm('ruleForm')">Create</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import styles from "@/styles/variables.scss";
import AbilityScores from '@/views/stats/ability_scores.vue';
import races from './races';

export default {
  name: 'Test',
  components: {
    AbilityScores
  },
  data() {
    return {
      fromChild: '',
      //abilities: ^
      re_roll: false,
      npc: {
        race: '', //entire race obj
        name: '',
        sex: '', //1 Female, 2 Male
        age: '',
        height: '',
        weight: '',
        class: '', // NPC Class, []
        level: 0,
        str: { name: 'Str', base: 0, total: 0, mod: 0, perc: 0 },
        dex: { name: 'Dex', base: 0, total: 0, mod: 0, perc: 0 },
        con: { name: 'Con', base: 0, total: 0, mod: 0, perc: 0 },
        int: { name: 'Int', base: 0, total: 0, mod: 0, perc: 0 },
        wis: { name: 'Wis', base: 0, total: 0, mod: 0, perc: 0 },
        cha: { name: 'Cha', base: 0, total: 0, mod: 0, perc: 0 },

        AC: 10, //make computed, look at abilities

      },
    };
  },
  created() {
    var race = races.races[Math.floor(Math.random() * races.races.length)];
    this.npc.race = race
    this.npc.sex = Math.floor(Math.random() * 2);
  },
  mounted() {
    //this.reRoll();
  },
  methods: {
    reRoll() {
      this.re_roll = true;

      //Take out after adding the race dropdown ??
      //var race = races.races[Math.floor(Math.random() * races.races.length)];
      //this.npc.race = race;

      this.npc.sex = Math.floor(Math.random() * 2);
      if (this.npc.sex == 1) {
        var name_int = Math.floor(Math.random() * this.npc.race.female_names.length);
        this.npc.name = race.female_names[name_int];
        document.querySelector(".el-form-item__label").classList.remove("el-icon-male");
        document.querySelector(".el-form-item__label").classList.add("el-icon-female");
      } else {
        var name_int = Math.floor(Math.random() * this.npc.race.male_names.length);
        this.npc.name = race.male_names[name_int];
        document.querySelector(".el-form-item__label").classList.remove("el-icon-female");
        document.querySelector(".el-form-item__label").classList.add("el-icon-male");
      }

      this.npc.class = 'Fighter';
      this.npc.level = 10;

      this.re_roll = false;
    },
    onChildClick (value) {
      //TODO: test if I can get all abl for AC and stuff
      this.fromChild = value;
    },


    changeAC() {
      console.log(this.npc.AC);
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.line{
  text-align: center;
}

/*
@import '@/../../../styles/element-variables.scss';
.app-container {
  flex: 1;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  a.user-link {
    color: $--color-primary;
  }
  .block {
    float: left;
    min-width: 250px;
  }
  .clear-left {
    clear: left;
  }
}
*/
</style>
