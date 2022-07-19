<template>
  <section>
    <div class="container-fluid">
      <div class="row m-0">
        <div class="col-12 px-0 mb-2">
          <div class="card">
            <div
              class="card-header card-header-primary d-flex flex-wrap align-items-center position-relative"
            >
              <div class="content-card-left">
                <h4 class="card-title mb-0">Users</h4>
              </div>
              <div class="content-card-right ms-auto">
                <button
                  class="btn btn-primary px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                >
                  Add New User
                </button>
              </div>
            </div>
            <div class="card-body px-0 pb-0">
              <div class="header-content">
                <div class="table-responsive mb-0">
                  <table
                    id="my-table"
                    class="custom-table basic-table support-table"
                  >
                    <thead>
                      <tr>
                        <th class="text-capitalize text-white">Ticket#</th>
                        <th class="text-capitalize text-white">
                          Ticket Detail
                        </th>
                        <th class="text-capitalize text-white">Priority</th>
                        <th class="text-capitalize text-white">Status</th>
                        <th class="text-capitalize text-white">Status 2</th>
                        <th class="text-capitalize text-white">
                          Final Answer
                        </th>
                        <th class="text-capitalize text-white">Created</th>
                        <th class="text-capitalize text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="empty">
                        <td class="text-center" colspan="8">
                          <div class="empty-wrapper">
                            <figure
                              class="d-flex flex-wrap justify-content-center align-items-center rounded-circle mx-auto"
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
                      <tr v-else v-for="tablelist in 4" :key="tablelist">
                        <td>
                          <router-link to="/support-detail" class="text-primary"
                            >01</router-link
                          >
                        </td>
                        <td class="text-truncate mw-300">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quibusdam id nostrum placeat distinctio? Labore
                          dolorum laborum quis magnam culpa, id tenetur
                          perspiciatis itaque voluptates unde reiciendis at,
                          amet repellat ducimus.
                        </td>
                        <td>
                          <span class=" status invalid text-center text-white ">
                            High
                          </span>
                        </td>
                        <td>
                          <span class=" status success text-center text-white">
                            Success
                          </span>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            class=" table-footer bg-white d-flex flex-wrap my-3 pb-0 border-0 bg-transparent justify-content-end align-items-center"
          >
            <div
              class=" custom-pagination mb-0 d-flex flex-wrap justify-content-center"
            >
              <v-pagination v-model="page" :pages="4" :range-size="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BaseModal
    modalId="addUser"
    modalTitle="Add User"
    modalDialogClass="modal-lg"
    footerCancelTitle="Cancel"
    footerTitle="Save Changes"
  >
    <Adduser />
  </BaseModal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// Modal
import BaseModal from '@/components/Modal/BaseModal.vue';
// Modal Content
import Adduser from '@/components/Modal/ModalContent/AddUser.vue';
// pagination
import VPagination from '@hennge/vue3-pagination';

export default defineComponent({
  name: 'Users',
  components: {
    VPagination,
    BaseModal,
    Adduser,
  },
  setup() {
    const page = ref(1);
    const empty = ref(false);

    return { page, empty };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/_card.scss';
@import '@/assets/scss/layout/_table.scss';
@import '@/assets/scss/layout/_form.scss';
@import '@/assets/scss/components/_buttons.scss';
</style>
