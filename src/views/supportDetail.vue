<template>
  <section class="support-detail">
    <div class="container-fluid">
      <div class="row m-0">
        <div class="col-12 mb-2">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-11 col-md-11 col-12 heading-wrapper">
                  <h4 class="font-20 mb-2">Incorrect name in contact</h4>

                  <p class="mb-0 font-14 d-inline-block editor-p-tag">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Provident veniam labore quas reprehenderit laboriosam, ex
                    minus aperiam culpa exercitationem in doloremque nihil
                    tempora quos voluptatibus obcaecati deserunt! Officia, ex
                    officiis!
                  </p>

                  <p>
                    <span>
                      <blockquote>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Provident veniam labore quas reprehenderit
                        laboriosam, ex minus aperiam culpa exercitationem in
                        doloremque nihil tempora quos voluptatibus obcaecati
                        deserunt! Officia, ex officiis!
                      </blockquote>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-0">
        <div class="col-xl-8 col-12 heading-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="user-detail d-flex flex-wrap align-items-center">
                <div
                  class="
                          rounded-circle
                          bg-primary
                          user-name
                          text-uppercase text-white
                          d-flex
                          flex-wrap
                          align-items-center
                          justify-content-center
                          font-20 font-weight-bold
                        "
                >
                  u
                </div>

                <div class="user-info ps-lg-3 ps-md-3 ps-sm-3 ps-2">
                  <h4 class="mb-1 font-16 fw-normal">Upwork help boat</h4>
                  <h6 class="mb-0 font-14 fw-normal">
                    june 17, 2022 <span class="ps-1">09:50</span>
                  </h6>
                </div>
              </div>
              <ul class="list-unstyled mb-0 mt-4 p-0 discussion">
                <li class="font-14" v-for="discussion in 2" :key="discussion">
                  <span class="text-uppercase pe-1 font-15">bot:</span>Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  repellat ipsa dignissimos esse perspiciatis enim sapiente sed
                  quae ea sunt?
                </li>

                <li class="font-14 font-weight-500 py-3">
                  <span class="text-uppercase pe-1 font-15">user:</span>Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Facere
                  eveniet modi nemo aut obcaecati? Nemo adipisci accusamus at
                  ipsam itaque.
                </li>

                <li class="font-14" v-for="discussion in 4" :key="discussion">
                  <span class="text-uppercase pe-1 font-15">bot:</span>Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  repellat ipsa dignissimos esse perspiciatis enim sapiente sed
                  quae ea sunt?
                </li>

                <li class="font-14 py-4 border-custom">
                  <span class="text-uppercase pe-1 font-15">summary:</span>Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  repellat ipsa dignissimos esse perspiciatis enim sapiente sed
                  quae ea sunt?
                </li>
              </ul>
              <div class="comments">
                <ul class="list-unstyled m-0 p-0">
                  <li class="py-4" v-for="comments in 3" :key="comments">
                    <div
                      class="
                              user-detail
                              d-flex
                              flex-wrap
                              align-items-center
                            "
                    >
                      <div
                        class="
                                rounded-circle
                                bg-primary
                                user-name
                                text-uppercase text-white
                                d-flex
                                flex-wrap
                                align-items-center
                                justify-content-center
                                font-20 font-weight-bold
                              "
                      >
                        a
                      </div>
                      <div class="user-info ps-lg-3 ps-md-3 ps-sm-3 ps-2">
                        <h4 class="mb-1 font-16 fw-normal text-capitalize">
                          adil gulzar
                        </h4>
                        <h6 class="mb-0 font-14 fw-normal">
                          june 17, 2022 <span class="ps-1">09:50</span>
                        </h6>
                      </div>
                    </div>
                    <div class="comment pt-3 text-break">
                      <p class="mb-0 font-14">
                        Hi, Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. In qui est, ad delectus excepturi soluta, placeat
                        sapiente nulla debitis amet totam. Error omnis possimus
                        sunt modi cum nobis voluptatum qui.
                      </p>
                    </div>
                  </li>
                  <li class="py-4">
                    <div
                      class="
                              user-detail
                              d-flex
                              flex-wrap
                              align-items-center
                            "
                    >
                      <div
                        class="
                                rounded-circle
                                bg-primary
                                user-name
                                text-uppercase text-white
                                d-flex
                                flex-wrap
                                align-items-center
                                justify-content-center
                                font-20 font-weight-bold
                              "
                      >
                        a
                      </div>

                      <div class="user-info ps-lg-3 ps-md-3 ps-sm-3 ps-2">
                        <h4 class="mb-1 font-16 fw-normal text-capitalize">
                          adil gulzar
                        </h4>
                        <h6 class="mb-0 font-14 fw-normal">
                          june 17, 2022 <span class="ps-1">09:50</span>
                        </h6>
                      </div>
                    </div>
                    <div class="comment pt-3 text-break">
                      <p class="mb-0 font-14">
                        Hi, Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. In qui est, ad delectus excepturi soluta, placeat
                        sapiente nulla debitis amet totam. Error omnis possimus
                        sunt modi cum nobis voluptatum qui.
                      </p>

                      <a
                        href="#"
                        class="text-primary font-14 d-inline-block mt-2"
                      >
                        <i class="bi bi-paperclip me-1 font-i-18"></i>
                        upwork.jpeg
                      </a>
                    </div>
                  </li>
                  <li class="border-0 comment-post pt-4">
                    <div class="user-detail d-flex flex-wrap">
                      <div
                        class="
                                rounded-circle
                                bg-primary
                                user-name
                                text-uppercase text-white
                                d-flex
                                flex-wrap
                                align-items-center
                                justify-content-center
                                font-20 font-weight-bold
                                mt-2
                              "
                      >
                        a
                      </div>

                      <!-- user info skeletor ends -->
                      <div
                        class="
                                user-info
                                ps-lg-3 ps-md-3 ps-sm-3 ps-2
                                reply
                              "
                      >
                        <form class="custom-form w-100 position-relative">
                          <textarea
                            placeholder="Type here to reply"
                            class="w-100 pt-2 h-90 pe-5"
                          ></textarea>
                          <div class="position-absolute upload-file">
                            <input
                              type="file"
                              id="uploadFile"
                              @change="uploadFile"
                              hidden
                            />
                            <label
                              for="uploadFile"
                              class="
                                      rounded-circle
                                      d-flex
                                      flex-wrap
                                      align-items-center
                                      justify-content-center
                                    "
                            >
                              <i class="bi bi-paperclip"></i>
                            </label>
                          </div>
                          <div
                            class="
                                    d-flex
                                    flex-wrap
                                    align-items-center
                                    mb-3
                                  "
                            v-if="file"
                          >
                            <div
                              class="uploaded-file mt-3 me-3"
                              v-for="uploaded in 10"
                              :key="uploaded"
                            >
                              <figure class="mb-0 position-relative">
                                <img
                                  :src="file"
                                  alt="uploaded-image"
                                  class="w-100 h-100 rounded"
                                />
                                <span
                                  class="
                                          cancel
                                          d-flex
                                          flex-wrap
                                          align-items-center
                                          justify-content-center
                                          position-absolute
                                          rounded-circle
                                        "
                                  @click="file = ''"
                                >
                                  <i class="bi bi-x font-i-18 text-white"></i>
                                </span>
                              </figure>
                            </div>
                          </div>
                          <button class="btn btn-primary mt-1">
                            Post Reply
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-12">
          <div class="card">
            <div class="card-body pb-2">
              <ul class="list-unstyled p-0 mb-0">
                <li class="d-flex flex-wrap support-info pb-3">
                  <span
                    class="
                            font-weight-500 font-14
                            text-capitalize
                            d-inline-block
                          "
                    >id</span
                  >

                  <span class="font-14 text-capitalize d-inline-block"
                    >#319487</span
                  >
                </li>
                <li class="d-flex flex-wrap support-info pb-3">
                  <span
                    class="
                            font-weight-500 font-14
                            text-capitalize
                            d-inline-block
                          "
                    >status</span
                  >

                  <span
                    class="
                            font-14
                            text-capitalize
                            status
                            d-inline-block
                            success
                            px-2
                          "
                    >success</span
                  >
                </li>
                <li class="d-flex flex-wrap support-info pb-3">
                  <span
                    class="
                            font-weight-500 font-14
                            text-capitalize
                            d-inline-block
                          "
                    >created</span
                  >

                  <span class="font-14 text-capitalize d-inline-block"
                    >June 17, 2021 09:44</span
                  >
                </li>
                <li class="d-flex flex-wrap support-info pb-3">
                  <span
                    class="
                            font-weight-500 font-14
                            text-capitalize
                            d-inline-block
                          "
                    >last activity</span
                  >

                  <span class="font-14 text-capitalize d-inline-block"
                    >June 17, 2021 09:44</span
                  >
                </li>
                <li class="d-flex flex-wrap support-info pb-3">
                  <span
                    class="
                            font-weight-500 font-14
                            text-capitalize
                            d-inline-block
                          "
                    >requester</span
                  >

                  <span class="font-14 text-capitalize d-inline-block"
                    >adil gulzar</span
                  >
                </li>
                <li class="d-flex flex-wrap support-info pb-3">
                  <span
                    class="
                            font-weight-500 font-14
                            text-capitalize
                            d-inline-block
                          "
                    >assigned to</span
                  >

                  <span class="font-14 text-capitalize d-inline-block"
                    >ronit cough</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <h4 class="font-18 my-4 text-capitalize">attachments</h4>
          <div class="card">
            <div class="card-body pt-2">
              <ul class="list-unstyled p-0 mb-0 border-li">
                <li class="py-2" v-for="uploads in 5" :key="uploads">
                  <a href="#" class="text-primary font-14 d-inline-block">
                    <i class="bi bi-paperclip me-1 font-i-18"></i>
                    upwork.jpeg
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const file = ref();
    const uploadFile = e => {
      file.value = e.target.files[0];
      file.value = URL.createObjectURL(file.value);
    };
    return {
      file,
      uploadFile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/_card.scss';
@import '@/assets/scss/layout/_form.scss';
@import '@/assets/scss/pages/_support-detail.scss';
</style>
