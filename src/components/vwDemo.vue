<template>
  <div>
    <div class="block block-2">
      <div class="container" flexcontainer>
        <div class="block-item" w-375-224 aspectratio aspect-ratio="375/224">
          <div aspectratio-content>
            <img src="//gw.alicdn.com/mt/TB1gRq9SXXXXXcRXFXXXXXXXXXX-375-224.png" alt="" width="100%" height="100%">
                </div>
          </div>
          <div class="block-item" w-375-224 aspectratio aspect-ratio="375/224">
            <div aspectratio-content="">
              <img src="//gw.alicdn.com/mt/TB1PMCHSXXXXXcQaXXXXXXXXXXX-375-224.png" alt="" width="100%" height="100%">
                </div>
            </div>
          </div>
        </div>
        <div class="block block-3">
          <div class="container" flexcontainer>
            <div class="block-item" w-499-250 aspectratio aspect-ratio="499/250">
              <div aspectratio-content>
                <img src="//gw.alicdn.com/mt/TB1Jk6lSXXXXXXSXpXXXXXXXXXX-499-250.png" alt="" width="100%" height="100%">
                </div>
              </div>
              <div class="block-item" w-250-250 aspectratio aspect-ratio="250/250">
                <div aspectratio-content>
                  <img src="//gw.alicdn.com/mt/TB11E6hSXXXXXXlXpXXXXXXXXXX-250-250.png" alt="" width="100%" height="100%">
            </div>
                </div>
              </div>
              <div class="container" flexcontainer>
                <div class="block-item" w-375-246 aspectratio aspect-ratio="375/246">
                  <div aspectratio-content>
                    <img src="//gw.alicdn.com/mt/TB1N017SXXXXXcWXFXXXXXXXXXX-375-246.png" alt="" width="100%" height="100%">
            </div>
                  </div>
                  <div class="block-item" w-375-246 aspectratio aspect-ratio="375/246">
                    <div aspectratio-content>
                      <img src="//gw.alicdn.com/mt/TB1rC9DSXXXXXagapXXXXXXXXXX-375-246.png" alt="" width="100%" height="100%">
            </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
  name: 'vwDemo',
  data() {
    return {

    };
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height: 100vh;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #f4f4f4;
}

img {
  width: 100%;
  height: auto;
  vertical-align: top;
  content: normal !important;
}

  //等比例宽高容器
[aspectratio] {
  position: relative;
}

[aspectratio]::before {
  content: '';
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}

[aspectratio-content] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

[flexContainer] {
  display: flex;
  width: 750px;
}

.block {
  margin-top: 15px;
}

[w-375-224] {
  width: 375px;
}

[w-375-224] {
  // 和其他属性分这些，否则编译的时候只剩下自己
  aspect-ratio: '375:224';
}

[w-750-250] {
  width: 750px;
}

[w-750-250] {
  aspect-ratio: '750:250';
}

[w-499-250] {
  width: 499px;
}

[w-499-250] {
  aspect-ratio: '499:250';
}

[w-250-250] {
  width: 250px;
}

[w-250-250] {
  aspect-ratio: '250:250';
}

[w-375-246] {
  width: 375px;
}

[w-375-246] {
  aspect-ratio: '375:246';
}

[w-188-246] {
  width: 188px;
}

[w-188-246] {
  aspect-ratio: '188:246';
}

[w-187-246] {
  width: 187px;
}

[w-187-246] {
  aspect-ratio: '187:246';
}
  @svg 1px-border {
    height: 2px;
    @rect {
      fill: var(--color, black);
      width: 100%;
      height: 50%;
    }
  }
.block-3 {
    background: #fff;
    border: 1px solid transparent;
    margin-bottom: 15px;
    border-image: svg(1px-border param(--color #333)) 2 2 stretch;
}
</style>
