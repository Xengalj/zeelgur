<template>
  <div id="app">
    <br>
    <el-form ref="npc" :model="npc" label-width="75px">

      <el-row>
        <el-col :span="6">
          <el-form-item label="Name">
            <el-input v-model="npc.name" :suffix-icon="npc.sexIcon" />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Class">
            <el-select v-model="npc.class" :placeholder="npc.class">
              <el-option
                v-for="type in this.classes"
                :key="type"
                :value="type">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Race">
            <el-select v-model="npc.race" :placeholder="npc.race.name" @change="onRaceChange">
              <el-option
                v-for="race in this.races"
                :key="race.name"
                :value="race">
                {{ race.name }}
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Height">
            <el-input v-model="npc.height" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="HP">
            <el-input-number v-model="npc.HP.curr" :max="npc.HP.max" />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Level">
            <el-input-number v-model="npc.level" />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Age">
            <el-input v-model="npc.age" />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Weight">
            <el-input v-model="npc.weight" />
          </el-form-item>
        </el-col>
      </el-row>

      <AbilityScores ref="abilities" :race="npc.race" v-on:abilities="fromAbilities"/>

      <el-row>
        <hr>
        <h2>Defense</h2>
        <el-row>
          AC
          <el-input-number v-model="npc.AC" :controls="false" />
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
        <el-button type="primary"@click="reRoll()">Re-Roll</el-button>
        <el-button type="success" @click="submitForm('npc')">Create</el-button>
      </el-form-item>

      TESTING DATA:
      <br><br>
      {{ abilities }}

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
      abilities: '',
      races: '',
      classes: ['Adept', 'Aristocrat', 'Commoner', 'Expert', 'Warrior'],
      npc: {
        name: '',
        race: '', //entire race obj
        sex: '', //1 Female, 2 Male
        sexIcon: 'el-icon-female',
        age: 16,
        height: '8\'10\"',
        weight: '120 lbs',

        class: '',
        level: 1,
        HP: {
          max: 10,
          curr: 10
        },

        AC: 10,
        armor: 0,

      },
    };
  },
  created() {
    this.races = races.races;
    this.npc.race = this.races[Math.floor(Math.random() * this.races.length)];
    this.npc.sex = Math.floor(Math.random() * 2);

    //TODO: Set Hight & Weight & Age

    this.npc.class = this.classes[Math.floor(Math.random() * 5)];
    //TODO: Set HP


  },
  mounted() {
    this.resetName();
    //this.reRoll();
  },
  methods: {
    rollDice() {},
    reRoll() {
      this.$refs.abilities.reRoll();

      this.npc.sex = Math.floor(Math.random() * 2);
      this.resetName();

      this.npc.class = this.classes[Math.floor(Math.random() * 5)];
      this.npc.level = 10;

    },
    onRaceChange() {
      this.resetName();
    },
    resetName() {
      this.npc.sex = Math.floor(Math.random() * 2);
      if (this.npc.sex == 1) {
        var name_int = Math.floor(Math.random() * this.npc.race.female_names.length);
        this.npc.name = this.npc.race.female_names[name_int];
        this.npc.sexIcon = 'el-icon-female';
      } else {
        var name_int = Math.floor(Math.random() * this.npc.race.male_names.length);
        this.npc.name = this.npc.race.male_names[name_int];
        this.npc.sexIcon = 'el-icon-male';
      }
    },

    setAC() {
      var mod = Math.floor((this.abilities.dex.total - 10) / 2);
      this.npc.AC = mod + 10 + this.npc.armor;
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

    fromAbilities(value) {
      this.abilities = value;

      this.setAC();
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
