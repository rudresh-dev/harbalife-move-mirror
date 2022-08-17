<template>
<div>
  <div class="clicker" tabindex="1" style="padding: 0px; margin: 0px;">
    <img style="width: 100vw; height: 100vh; padding: 0px; margin: 0px; background-color: white;" src="../two.png" />
  </div>
  <div class="hiddendiv">
      <div class="container" style="">
        <h1 class="title" style="margin-top: 70px; color: white; font-size: 110px; font-weight: 600;">
          Move Mirror
        </h1>
        <img src="../logobg.png" style="width:330px; background-color: white; padding: 20px 40px; border-radius: 35px; margin: 25px 0px;" />
        <img src="../bottle.png" style="width:220px; padding: 20px 40px; border-radius: 35px; position: absolute; z-index: 999; bottom: 10px; right: 10px;" />
        <div class="demoArea">
          <div class="bc-1">
            <div class="demoArea--camera">
              <CameraAndSkeleton @predict="getMirrorPose" />
            </div>
          </div>
          <div class="bc-2">
            <div class="demoArea--mirrorImage">
              <img
                v-if="mirrorImage"
                :src="require(`~/assets/images/mirror-poses/${mirrorImage}`)"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import CameraAndSkeleton from '@/components/CameraAndSkeleton'

export default {
  components: {
    CameraAndSkeleton
  },

  setup (props, { root }) {
    const mirrorImage = ref(null)

    const getMirrorPose = async (pose) => {
      const nearestImages = await root.$axios.$post('/api/searchTree/nearestMatches/1', { userPose: pose })
      mirrorImage.value = nearestImages[0]
    }

    return {
      mirrorImage,
      getMirrorPose
    }
  }
}
</script>

<style lang="scss">
$lg: 1200px;
$md: 960px;
$sm: 600px;

body{
  background-color: #F5F5F5;
  background-image: url(../bg.svg);
  color: white;
  background-size: 100%;
}

.demoArea--camera{
  margin: 0px 0px;
  height: 480px;
  border-radius: 1rem;
}

.demoArea--mirrorImage{
  margin: 20px 0px;
}

.bc-1{
  padding: 4px 20px;
  background-color: #005d52;
  // background-color: #FFCA08;
  border-radius: 2rem;
  margin: 60px 0px 60px 0px;
  border-image: linear-gradient(to right, #000 50%, transparent 50%) 100% 1;
}

.bc-2{
  padding: 2px 20px;
  background-color: #63B046;
  background-color: #005d52;
  // background-color: #FFCA08;
  border-radius: 2rem;
  margin: 40px 0px;
}

.container {
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 16px;

  @media (min-width: $lg) {
    width: 1160px;
    margin: 0 auto;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 64px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.demoArea {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  &--camera, &--mirrorImage {
    width: 600px;
  }

  &--mirrorImage {
    img {
      width: 600px;
      height: 600px;
      background-size: cover;
      border-radius: 1rem;
    }
  }
}

.treebranch{
  position: absolute;
  top: 950px;
  left: 899px;
  z-index: -90;
}

.clicker {
width:100px;
height:100px;
background-color:rgb(255, 255, 255);
outline:none;
cursor:pointer;
z-index: -1;
}

.hiddendiv{
display:none;
background-color: #F5F5F5 !important;
background-image: url(../bg.svg);
  color: white;
  background-size: 100vh;
  z-index: 9999;
background-color:green;
}

.clicker:focus + .hiddendiv{
display:block;
background-color: #F5F5F5 !important;
background-image: url(../bg.svg);
color: white;
background-size: 100vh;
z-index: 9999;
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100vh;
}
</style>
