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
            <el-input v-model="npc.race" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="Class">
            <el-input v-model="npc.class" />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="Level">
            <el-input v-model="npc.level" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row style="ablity-score">
        <el-col :span="4">
          <p>Str</p>
          <el-progress type="dashboard" :percentage="npc.str.perc" :color="customColors" :format="formatStr" :width="100" :stroke-width="12"></el-progress>
          <br>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease(npc.str)"></el-button>
            <el-button icon="el-icon-plus" @click="increase(npc.str)"></el-button>
          </el-button-group>
        </el-col>

        <el-col :span="4">
          <p>Dex</p>
          <el-progress type="dashboard" :percentage="npc.dex.perc" :color="customColors" :format="formatDex" :width="100" :stroke-width="12"></el-progress>
          <br>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease(npc.dex)"></el-button>
            <el-button icon="el-icon-plus" @click="increase(npc.dex)"></el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <p>Con</p>
          <el-progress type="dashboard" :percentage="npc.con.perc" :color="customColors" :format="formatCon" :width="100" :stroke-width="12"></el-progress>
          <br>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease(npc.con)"></el-button>
            <el-button icon="el-icon-plus" @click="increase(npc.con)"></el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <p>Wis</p>
          <el-progress type="dashboard" :percentage="npc.int.perc" :color="customColors" :format="formatInt" :width="100" :stroke-width="12"></el-progress>
          <br>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease(npc.int)"></el-button>
            <el-button icon="el-icon-plus" @click="increase(npc.int)"></el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <p>Int</p>
          <el-progress type="dashboard" :percentage="npc.wis.perc" :color="customColors" :format="formatWis" :width="100" :stroke-width="12"></el-progress>
          <br>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease(npc.wis)"></el-button>
            <el-button icon="el-icon-plus" @click="increase(npc.wis)"></el-button>
          </el-button-group>
        </el-col>
        <el-col :span="4">
          <p>Cha</p>
          <el-progress type="dashboard" :percentage="npc.cha.perc" :color="customColors" :format="formatCha" :width="100" :stroke-width="12"></el-progress>
          <br>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease(npc.cha)"></el-button>
            <el-button icon="el-icon-plus" @click="increase(npc.cha)"></el-button>
          </el-button-group>
        </el-col>
      </el-row>

      <!--el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">
          -
        </el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item-->

      <el-form-item>
        <el-button type="primary"@click="reRoll()">Re-Roll</el-button>
        <el-button type="success" @click="submitForm('ruleForm')">Create</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import styles from "@/styles/variables.scss";
import races from './races';

export default {
  name: 'Test',
  data() {
    return {
      npc: {
        race: '',
        name: '',
        sex: '',
        class: '',
        level: 0,
        str: { real: 0, perc: 0 },
        dex: { real: 0, perc: 0 },
        con: { real: 0, perc: 0 },
        int: { real: 0, perc: 0 },
        wis: { real: 0, perc: 0 },
        cha: { real: 0, perc: 0 },
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
    this.reRoll();
  },
  methods: {
    reRoll() {
      var race = races.races[Math.floor(Math.random() * races.races.length)];
      var race = races.races[0]; //TODO: REMOVE LINE
      console.log(race);

      this.npc.sex = Math.floor(Math.random() * 2);
      if (this.npc.sex == 1) {
        var name_int = Math.floor(Math.random() * race.female_names.length);
        this.npc.name = race.female_names[name_int];
        document.querySelector(".el-form-item__label").classList.remove("el-icon-male");
        document.querySelector(".el-form-item__label").classList.add("el-icon-female");
      } else {
        var name_int = Math.floor(Math.random() * race.male_names.length);
        this.npc.name = race.male_names[name_int];
        document.querySelector(".el-form-item__label").classList.remove("el-icon-female");
        document.querySelector(".el-form-item__label").classList.add("el-icon-male");
      }

      this.npc.race = 'Geit';
      this.npc.class = 'Fighter';
      this.npc.level = 10;

      this.setAbility(this.npc.str);
      this.setAbility(this.npc.dex);
      this.setAbility(this.npc.con);
      this.setAbility(this.npc.int);
      this.setAbility(this.npc.wis);
      this.setAbility(this.npc.cha);

    },
    setAbility(abl) {
      var min = Math.ceil(8);
      var max = Math.floor(19);
      var rand = Math.random() * (max - min);
      abl.real = Math.floor(rand) + min;
      abl.perc = Math.floor(rand) * 10;
    },
    formatStr(percentage) { return this.npc.str.real; },
    formatDex(percentage) { return this.npc.dex.real; },
    formatCon(percentage) { return this.npc.con.real; },
    formatInt(percentage) { return this.npc.int.real; },
    formatWis(percentage) { return this.npc.wis.real; },
    formatCha(percentage) { return this.npc.cha.real; },
    increase(abl) {
      abl.real += 1;
      this.checkPerc(abl);
    },
    decrease(abl) {
      abl.real -= 1;
      this.checkPerc(abl);
    },
    checkPerc(abl) {
      abl.perc = (abl.real - 8) * 10;
      if (abl.perc > 100) {
        abl.perc = 100;
      } else if (abl.perc < 0) {
        abl.perc = 0;
      }
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
