<template>
  <div class="demo">
    <div class="row">
      <div class="col">
        <h4>Time controller demo</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-8 demo-div flex items-center">
        <k-time-controller
            :min="startTime" :max="endTime" :value="value" @change="onChanged"
            :timezone="'auto'"
            :pointerColor="'orange'" :pointerTextColor="'white'"
          />
      </div>
    </div>
    
    <div class="row">
      <div class="col-8">
      </div>
    </div>
    
  </div>
</template>

<script>
import KTimeController from './timecontroller/KTimeController'

export default {
  components: {
    KTimeController
  },
  data () {
    return {
      startTime: this.getStartTime(),
      endTime: this.getEndTime(),
      value: this.getTime()
    }
  },
  created () {
    // Load the required components
    // this.$options.components['k-time-controller'] = this.$load('KTimeController')
  },
  methods: {
    onChanged (value) {
      console.info('NEW VALUE:', value)
    },
    getStartTime () {
      return this.getDateTime(2018, 11, 10)
    },
    getEndTime () {
      return this.getDateTime(2018, 11, 15)
    },
    getTime () {
      return this.getDateTime(2018, 11, 12)
    },
    getDateTime (year, month, day, hour = 0, minute = 0, second = 0) {
      return Date.UTC(year, month-1, day, hour, minute, second)
    }
  }
}
</script>

<style lang="stylus">
  .demo {
    margin-left: 30px;
  }

  .demo-div {
    height: 80px;
    width: 100%;
    background-color: #dedbdb;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 15px;
  }
</style>

