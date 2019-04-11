<template>
    <div>
      <div class="movie" v-for="(item,index) in moviesList" :key="index">
        <div class="avatar">
          <img :src="item.img"/>
        </div>
        <div class="wrap scale-1px">
          <div class="desc">
            <div class="title">
              <span>{{item.title}}</span>
              <span class="item">{{item.sate}}</span>
            </div>
            <div class="score">
              <span class="suffix">观众评</span>
              <span class="grade">{{item.grade}}</span>
            </div>
            <p class="actor">主演：{{item.actor}}</p>
            <p class="show-info">{{item.country}} | {{item.time}}分钟</p>
          </div>
          <div class="btn">
            <a href="javascript:;" class="go">购票</a>
          </div>
        </div>
    </div>
    </div>
</template>
<script>
import {setMovies} from '@/api/movies'
export default {
    name:'HotMovies',
    data(){
        return{
            moviesList:[]
        }
    },
    mounted() {
        setMovies().then(res=>{
            if(res.code==1){
                this.moviesList=res.data;
            }
        })
    }
}
</script>
<style lang="stylus" scoped>
@import '~stylus/mixins.styl';

.movie {
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #fff;

  .avatar {
    flex: 0 0 64px;
    height: 90px;
    margin-top: 12px;

    img {
      width: 64px;
      height: 90px;
    }
  }

  .wrap {
    flex: 1;
    margin-left: 12px;
    position: relative;

    .desc {
      width: 200px;
      padding-top: 10px;
      padding-bottom: 6px;

      .title {
        height: 24px;
        margin-bottom: 7px;
        line-height: 24px;
        overflow: hidden;

        .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
}
      }

      .score {
        font-size: 13px;
        color: #666;

        .grade {
          font-weight: 100;
          color: #ffb232;
          font-size: 14px;
        }
      }

      .actor {
        font-size: 13px;
        color: #666;
        margin-top: 6px;
        line-height: 15px;
        no-wrap();
      }

      .show-info {
        margin-top: 6px;
        line-height: 15px;
        font-size: 13px;
        color: #666;
      }
    }

    .btn {
      font-size: 12px;
      position: absolute;
      right: 0px;
      top: 0;
      bottom: 0;
      height: 27px;
      margin: auto;

      .go {
        display: inline-block;
        width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        box-sizing: border-box;
        border:1px solid #ff5f16;
        color:#ff5f16;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;
        text-decoration: none;
        margin-top:-5px;
      }

      .ys {
        display: inline-block;
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        box-sizing: border-box;
        background-color: #3c9fe6;
        color: #fff;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
</style>
