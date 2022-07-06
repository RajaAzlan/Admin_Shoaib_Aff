<template>
  <section class="support">
    <div class="container-fluid">
      <div class="row m-0">
        <div class="col-12 px-0 mb-2">
          <div class="card">
            <div
              class="card-header card-header-primary d-flex flex-wrap align-items-center position-relative"
            >
              <div class="content-card-left">
                <h4 class="card-title mb-0">Ticket</h4>
              </div>
              <div class="content-card-right ms-auto">
                <button
                  class="btn btn-primary px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#addTicket"
                >
                  Add New Ticket
                </button>
              </div>
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col-xl col-lg-3 col-md-4 col-6 mb-3">
                  <div class="card purple shadow-none">
                    <div class="card-body py-4">
                      <div
                        class="dashboard-card d-flex flex-wrap align-items-center "
                      >
                        <div
                          class="
                                  icon-box
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                  bg-primary
                                  mx-auto
                                  w-auto
                                  h-auto
                                  bg-transparent
                                "
                        >
                          <i class="bi bi-door-open"></i>
                        </div>
                        <div
                          class="dashboard-content w-100 pt-3 ps-0 text-center"
                        >
                          <h6 class="mb-0">
                            4<span class="text-capitalize mb-0 font-14 ps-1"
                              >open</span
                            >
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl col-lg-3 col-md-4 col-6 mb-3">
                  <div class="card yellow shadow-none">
                    <div class="card-body py-4">
                      <div
                        class="dashboard-card d-flex flex-wrap align-items-center"
                      >
                        <div
                          class="
                                  icon-box
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                  bg-primary
                                  mx-auto
                                  w-auto
                                  h-auto
                                  bg-transparent
                                "
                        >
                          <i class="bi bi-arrow-repeat"></i>
                        </div>
                        <div
                          class="
                                  dashboard-content
                                  w-100
                                  pt-3
                                  ps-0
                                  text-center
                                "
                        >
                          <h6 class="mb-0">
                            0<span class="text-capitalize mb-0 font-14 ps-1"
                              >in progress</span
                            >
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl col-lg-3 col-md-4 col-6 mb-3">
                  <div class="card green shadow-none">
                    <div class="card-body py-4">
                      <div
                        class="
                                dashboard-card
                                d-flex
                                flex-wrap
                                align-items-center
                              "
                      >
                        <div
                          class="
                                  icon-box
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                  bg-primary
                                  mx-auto
                                  w-auto
                                  h-auto
                                  bg-transparent
                                "
                        >
                          <i class="bi bi-patch-check"></i>
                        </div>
                        <div
                          class="
                                  dashboard-content
                                  w-100
                                  pt-3
                                  ps-0
                                  text-center
                                "
                        >
                          <h6 class="mb-0">
                            13<span class="text-capitalize mb-0 font-14 ps-1"
                              >answered</span
                            >
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl col-lg-3 col-md-4 col-6 mb-3">
                  <div class="card blue shadow-none">
                    <div class="card-body py-4">
                      <div
                        class="
                                dashboard-card
                                d-flex
                                flex-wrap
                                align-items-center
                              "
                      >
                        <div
                          class="
                                  icon-box
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                  bg-primary
                                  mx-auto
                                  w-auto
                                  h-auto
                                  bg-transparent
                                "
                        >
                          <i class="bi bi-pause-circle"></i>
                        </div>
                        <div
                          class="
                                  dashboard-content
                                  w-100
                                  pt-3
                                  ps-0
                                  text-center
                                "
                        >
                          <h6 class="mb-0">
                            7<span class="text-capitalize mb-0 font-14 ps-1"
                              >on hold</span
                            >
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl col-lg-3 col-md-4 col-6 mb-3">
                  <div class="card red shadow-none">
                    <div class="card-body py-4">
                      <div
                        class="
                                dashboard-card
                                d-flex
                                flex-wrap
                                align-items-center
                              "
                      >
                        <div
                          class="
                                  icon-box
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                  bg-primary
                                  mx-auto
                                  w-auto
                                  h-auto
                                  bg-transparent
                                "
                        >
                          <i class="bi bi-door-closed"></i>
                        </div>
                        <div
                          class="
                                  dashboard-content
                                  w-100
                                  pt-3
                                  ps-0
                                  text-center
                                "
                        >
                          <h6 class="mb-0">
                            6<span class="text-capitalize mb-0 font-14 ps-1"
                              >closed</span
                            >
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 px-0">
          <div class="card position-relative">
            <div
              class="
                      card-header card-header-primary
                      d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                      position-relative
                      py-3
                    "
            >
              <div class="content-card-left">
                <h4 class="card-title mb-0">Filters</h4>
              </div>
            </div>
            <div class="card-body pb-0">
              <form action="" class="custom-form">
                <div class="row">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-3 mb-3">
                    <div class="position-relative">
                      <label for="">Status</label>
                      <Multiselect
                        v-model="value"
                        mode="single"
                        :options="partOptions"
                        class="custom-multiselect border-multiselect"
                        placeholder="Select option"
                        :searchable="true"
                        :showOptions="true"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 px-3 mb-3">
                    <div class="position-relative">
                      <label for="">Priority</label>
                      <Multiselect
                        v-model="value"
                        mode="single"
                        :options="partOptions"
                        class="custom-multiselect border-multiselect"
                        placeholder="Select option"
                        :searchable="true"
                        :showOptions="true"
                      />
                    </div>
                  </div>

                  <div
                    class="
                            col-lg-3 col-md-4 col-sm-6 col-12
                            ms-md-auto
                            px-3
                          "
                  >
                    <label for="" class="mb-custom">Title/Description</label>
                    <div class="position-relative">
                      <i
                        class="
                                bi bi-search
                                position-absolute
                                icon-left-placement
                                top-50
                                text-white
                              "
                      ></i>
                      <input
                        placeholder="Search"
                        type="text"
                        class="w-100 bg-primary text-white icon-left mt-0"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <!-- clear filter  -->
            <div class="row">
              <div class="col ms-4">
                <p class="font-14 text-secondary d-inline-block">
                  Showing 1 of 10 entries.
                </p>
                <!-- clear filter component -->
                <ClearFilter />
              </div>
            </div>

            <div class="row">
              <div class="col-12 px-3">
                <div class="header-content">
                  <div class="table-responsive mb-0">
                    <table
                      id="my-table"
                      class="custom-table basic-table support-table"
                    >
                      <thead>
                        <tr>
                          <th class="text-capitalize">Ticket#</th>
                          <th class="text-capitalize">Ticket Detail</th>
                          <th class="text-capitalize">Priority</th>
                          <th class="text-capitalize">Status</th>
                          <th class="text-capitalize">Status 2</th>
                          <th class="text-capitalize">Final Answer</th>
                          <th class="text-capitalize">Created</th>
                          <th class="text-capitalize">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="tablelist in 5" :key="tablelist">
                          <td>
                            <router-link
                              to="/support-detail"
                              class="text-primary"
                              >01</router-link
                            >
                          </td>
                          <td class="text-truncate mw-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam id nostrum placeat distinctio?
                            Labore dolorum laborum quis magnam culpa, id tenetur
                            perspiciatis itaque voluptates unde reiciendis at,
                            amet repellat ducimus.
                          </td>
                          <td>
                            <span
                              class="
                                      status
                                      invalid
                                      text-center text-white
                                    "
                              >High</span
                            >
                          </td>
                          <td>
                            <span
                              class="
                                      status
                                      success
                                      text-center text-white
                                    "
                              >Success</span
                            >
                          </td>
                          <td>
                            <select class="form-select shadow-none">
                              <option selected>Select Status</option>
                              <option value="1">Active</option>
                              <option value="2">Processing</option>
                              <option value="3">Delivering</option>
                            </select>
                          </td>
                          <td>08/10/2021</td>
                          <td>08/10/2021</td>
                          <td class="action">
                            <a href="#" class="edit d-inline-block me-2">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a href="#" class="edit d-inline-block">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr v-if="empty">
                          <td class="text-center" colspan="6">
                            <div class="empty-wrapper">
                              <figure
                                class="
                                        d-flex
                                        flex-wrap
                                        justify-content-center
                                        align-items-center
                                        rounded-circle
                                        mx-auto
                                      "
                              >
                                <img
                                  src="@/assets/images/table/empty.png"
                                  alt="empty-cart"
                                />
                              </figure>
                              <h4 class="text-secondary font-16 mb-0">
                                Unfortunately, there is no data to display
                              </h4>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
                    table-footer
                    bg-white
                    d-flex
                    flex-wrap
                    my-3
                    pb-0
                    border-0
                    bg-transparent
                    justify-content-end
                    align-items-center
                  "
          >
            <div
              class="
                      custom-pagination
                      mb-0
                      d-flex
                      flex-wrap
                      justify-content-center
                    "
            >
              <v-pagination v-model="page" :pages="4" :range-size="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// for multiselect
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';
// pagination
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
// For ClearFilter
import ClearFilter from '../components/ClearFilter.vue';
import { ref } from 'vue';
export default {
  components: {
    Multiselect,
    VPagination,
    ClearFilter,
  },
  setup() {
    const value = ref();
    const page = ref(1);
    const partOptions = ref(['Abuse', 'Marketing', 'Sales']);
    const empty = ref(false);

    return { value, page, partOptions, empty };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/_card.scss';
@import '@/assets/scss/layout/_table.scss';
@import '@/assets/scss/layout/_form.scss';
@import '@/assets/scss/pages/_support.scss';
@import '@/assets/scss/components/_buttons.scss';
</style>
<style lang="scss">
@import '@/assets/scss/components/_multiselect.scss';
@import '@/assets/scss/components/_pagination.scss';
</style>
