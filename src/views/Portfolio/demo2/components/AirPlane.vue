<template>
 <div class="air-plane">
  <div class="legend">
    <div class="legend-item purple">1类</div>
    <div class="legend-item yellow">2类</div>
  </div>
  <div class="plane-item">
    <div class="left">
      <div class="top">
        <div class="icon">
            <el-image :width="51" :height="28" src="/imgs/demo2/plane_icon.png"></el-image>
            <span>重</span>
        </div>

        <span>3U88</span>
      </div>
      <div class="bottom">关舱门：13:10</div>
    </div>
    <div class="center">
      <div class="top">成都 -- 杭州</div>
      <div class="bottom">起飞：13:30</div>
    </div>
    <div class="right">
       <div class="top">13:10 - 14:30 <div class="legend-item purple">1类</div></div>
      <div class="bottom">落地：14:30</div>
    </div>
  </div>
  <div class="plane-item">
    <div class="left">
      <div class="top">
        <div class="icon">
            <el-image :width="51" :height="28" src="/imgs/demo2/plane_icon.png"></el-image>
            <span>重</span>
        </div>

        <span>3U66</span>
      </div>
      <div class="bottom">今日状态：正常</div>
    </div>
    <div class="center">
      <div class="top">三亚 -- 杭州</div>
      <!-- <div class="bottom">起飞：13:30</div> -->
    </div>
    <div class="right">
       <div class="top">13:10 - 14:30 <div class="legend-item yellow">2类</div></div>
      <div class="bottom">本月正常率：89.06%</div>
    </div>
  </div>
  <div class="plane-item">
    <div class="left">
      <div class="top">
        <div class="icon">
            <el-image :width="51" :height="28" src="/imgs/demo2/plane_icon.png"></el-image>
            <span>重</span>
        </div>

        <span>3U66</span>
      </div>
      <div class="bottom">今关舱门：13:05</div>
    </div>
    <div class="center">
      <div class="top">西安 -- 杭州</div>
      <div class="bottom">起飞：13:30</div>
    </div>
    <div class="right">
       <div class="top">13:10 - 14:30 <div class="legend-item yellow">2类</div></div>
      <div class="bottom">本月正常率：89.06%</div>
    </div>
  </div>
 </div>
</template>

<script setup>
</script>

<style scoped>
.air-plane{
  width: 100%;
  height: 100%;
}
.legend{
  height: 40px;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content:flex-end;
}
.legend-item{
  color:#68D5EA;
  font-size: 12px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.legend-item.purple::before{
  content:'';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background:#ED97FF;
  display: block;
  margin-right:5px;
}
.legend-item.yellow::before{
  display: block;
  content:'';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background:#FFF57B;
  margin-right:5px;
}
.plane-item{
  height: 110px;
  padding:20px;
  color: #fff;
  margin:0 0 20px 0;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(83,198,222,0.11);
}
.top,.bottom{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
}
.bottom{
  color: #94EBFE;
  font-size: 12px;
}
.left .bottom{
  justify-content: flex-start;
}
.right .bottom{
  justify-content: flex-end;
}
.icon{
 position: relative;
  color: #fff;
  margin-right: 20px;
}
.icon span{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-60%);
}
</style>
