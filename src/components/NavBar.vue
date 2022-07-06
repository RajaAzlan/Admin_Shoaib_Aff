<template>
  <nav class="admin-nav">
    <div
      class="
        cotainer-fluid
        d-flex
        flex-wrap
        align-items-center
        px-lg-4 px-md-4 px-sm-4 px-3
      "
    >
      <a href="#" class="code me-2" @click.prevent="toggleNav()">
        <i class="bi bi-text-left"></i>
        <i class="bi bi-justify"></i>
      </a>
      <router-link to="/" class="d-lg-none d-md-block d-sm-block d-block">
        <figure class="mb-0 logo position-relative">
          <img
            src="@/assets/images/Logo-Affweb-white.png"
            class="w-100 h-100"
            alt="affwebs-logo"
          />
        </figure>
      </router-link>
      <div
        class="d-flex flex-wrap justify-content-end ms-auto align-items-center"
      >
        <ul
          class="
            list-unstyled
            d-flex
            flex-wrap
            align-items-center
            p-0
            mb-0
            position-relative
          "
        >
          <li class="d-inline-block">
            <div class="dropdown-custom ml-auto">
              <div class="dropdown position-relative">
                <button
                  class="
                    btn
                    dropdown-toggle
                    px-0
                    ms-2 ms-md-0
                    d-flex
                    flex-wrap
                    align-items-center
                  "
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    class="
                      dropdown-text
                      pe-3
                      d-lg-block d-md-block d-sm-none d-none
                    "
                  >
                    <h4 class="mb-0 text-start text-truncate">Jhon Doe</h4>
                    <p class="mb-0 text-secondary text-start text-truncate">
                      Add Admin
                    </p>
                  </div>
                  <div class="user-image">
                    <img
                      src="@/assets/images/avatar-demo.jpg"
                      alt="Avatar"
                      class="rounded-circle w-100 h-100 shadow"
                    />
                  </div>
                </button>
                <ul
                  class="dropdown-menu list-unstyled nav-dropdown"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div
                    class="
                      user-information
                      d-flex
                      flex-wrap
                      align-items-center
                      p-4
                    "
                  >
                    <div class="user-image image-w-50">
                      <img
                        src="@/assets/images/avatar-demo.jpg"
                        alt="Avatar"
                        class="rounded-circle w-100 h-100"
                      />
                    </div>
                    <div class="dropdown-text ps-3">
                      <h4 class="mb-0 text-start text-truncate">Jhon Doe</h4>
                      <p class="mb-0 text-secondary text-start text-truncate">
                        Add Admin
                      </p>
                    </div>
                  </div>
                  <li><hr class="dropdown-divider mt-0 mb-2" /></li>
                  <li class="d-flex flex-wrap">
                    <a class="dropdown-item w-100" href="#" @click.prevent>
                      <i class="bi bi-people me-3"></i>My Profile</a
                    >
                  </li>
                  <li class="d-flex flex-wrap">
                    <a class="dropdown-item w-100" href="#" @click.prevent>
                      <i class="bi bi-bell me-3"></i>Notifications</a
                    >
                  </li>
                  <li class="d-flex flex-wrap">
                    <a class="dropdown-item w-100" href="#" @click.prevent>
                      <i class="bi bi-gear me-3"></i>Settings</a
                    >
                  </li>
                  <li
                    class="d-flex flex-wrap"
                    data-bs-toggle="modal"
                    data-bs-target="#reminder"
                  >
                    <router-link
                      to="/"
                      class="dropdown-item w-100"
                      @click.prevent
                    >
                      <i class="bi bi-box-arrow-right me-3"></i>Logout
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  setup() {
    const toggleNav = () => {
      let menu = document.querySelector('body');
      let menuToggle = document.querySelector('.code');

      if (menu.classList.contains('nav-toggle')) {
        menu.classList.remove('nav-toggle');
        menuToggle.classList.remove('open');
      } else {
        menu.classList.add('nav-toggle');
        menuToggle.classList.add('open');
      }
    };
    return {
      toggleNav,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/_nav.scss';
@import '@/assets/scss/components/_dropdown.scss';
</style>
