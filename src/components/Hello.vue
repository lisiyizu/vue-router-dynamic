<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <xbg :val="obj"></xbg>
      <!-- <BgIndex :val="obj"></BgIndex> -->
      <!-- <PageIndex :option.sync='pageModel'></PageIndex> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      pageModel:{
        limit: 5,
        page: 1,
        count: 10,
        total: 100,
        trigger: function(page, count) {
        }
      }, 
      obj:{
        url:"http://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?qua=high&where=super"
      },
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
