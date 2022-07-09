import { Serve } from "../lobot.js";

async function ContentGrid() {
  return `
<style>
*:hover{
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
}

/*Profile Card 3*/
.profile-card {
  font-family: 'Open Sans', Arial, sans-serif;
  position: relative;
  float: left;
  overflow: hidden;
  width: 100%;
  text-align: center;
  height:368px;
  border:none;
  margin: 20px 0px;
}
.profile-card .background-block {
    float: left;
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.profile-card .background-block .background {
  width:100%;
  vertical-align: top;
  opacity: 0.9;
  -webkit-filter: blur(0.5px);
  filter: blur(0.5px);
   -webkit-transform: scale(1.8);
  transform: scale(2.8);
}
.profile-card .card-content {
  width: 100%;
  padding: 15px 25px;
  color:#232323;
  float:left;
  background:#efefef;
  height:50%;
  border-radius:0 0 5px 5px;
  position: relative;
  z-index: 9999;
}
.profile-card .card-content::before {
    content: '';
    background: #efefef;
    width: 120%;
    height: 100%;
    left: 11px;
    bottom: 51px;
    position: absolute;
    z-index: -1;
    transform: rotate(-13deg);
}
.profile-card .profile {
  border-radius: 50%;
  position: absolute;
  bottom: 50%;
  left: 50%;
  max-width: 100px;
  opacity: 1;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 1);
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  z-index:99999;
}
.profile-card h2 {
  margin: 0 0 5px;
  font-weight: 600;
  font-size:25px;
}
.profile-card h2 small {
  display: block;
  font-size: 15px;
  margin-top:10px;
}
.profile-card i {
  display: inline-block;
    font-size: 16px;
    color: #232323;
    text-align: center;
    border: 1px solid #232323;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin:0 5px;
}
.profile-card .icon-block{
    float:left;
    width:100%;
    margin-top:15px;
}
.profile-card .icon-block a{
    text-decoration:none;
}
.profile-card i:hover {
  background-color:#232323;
  color:#fff;
  text-decoration:none;
}

</style>
<section>
    <div class="container">
        <div class="row">
          <div class="col-md-4">
             <div class="card profile-card">
                 <div class="background-block">
                      <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                  </div>
                  <div class="profile-thumb-block">
                      <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                  </div>
                  <div class="card-content">
                     <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                      <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                      </div>
                  </div>
          </div>
          <div class="col-md-4">
           <div class="card profile-card">
               <div class="background-block">
                    <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                </div>
                <div class="profile-thumb-block">
                    <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                </div>
                <div class="card-content">
                   <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                    <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                    </div>
                </div>
          </div>
          <div class="col-md-4">
             <div class="card profile-card">
                 <div class="background-block">
                      <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                  </div>
                  <div class="profile-thumb-block">
                      <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                  </div>
                  <div class="card-content">
                     <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                      <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                      </div>
                  </div>
          </div>
          <div class="col-md-4">
             <div class="card profile-card">
                 <div class="background-block">
                      <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                  </div>
                  <div class="profile-thumb-block">
                      <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                  </div>
                  <div class="card-content">
                     <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                      <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                      </div>
                  </div>
          </div>
          <div class="col-md-4">
             <div class="card profile-card">
                 <div class="background-block">
                      <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                  </div>
                  <div class="profile-thumb-block">
                      <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                  </div>
                  <div class="card-content">
                     <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                      <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                      </div>
                  </div>
          </div>
          <div class="col-md-4">
             <div class="card profile-card">
                 <div class="background-block">
                      <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                  </div>
                  <div class="profile-thumb-block">
                      <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                  </div>
                  <div class="card-content">
                     <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                      <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                      </div>
                  </div>
          </div>
          <div class="col-md-4">
             <div class="card profile-card">
                 <div class="background-block">
                      <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                  </div>
                  <div class="profile-thumb-block">
                      <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                  </div>
                  <div class="card-content">
                     <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                      <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                      </div>
                  </div>
          </div>
          <div class="col-md-4">
             <div class="card profile-card">
                 <div class="background-block">
                      <img src="/assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                  </div>
                  <div class="profile-thumb-block">
                      <img src="/assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                  </div>
                  <div class="card-content">
                     <h2>Content Drop<small>Snappy Hook Phrase</small></h2>
                      <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                      </div>
                  </div>
          </div>
    </div>
</section>
  `;
}

export { ContentGrid };
