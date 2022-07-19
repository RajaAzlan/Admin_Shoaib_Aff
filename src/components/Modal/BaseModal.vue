<template>
  <div
    class="modal custom-modal popup-animation slow"
    :ref="modalId"
    :id="modalId"
    tabindex="-1"
    aria-hidden="true"
    :data-bs-backdrop="showBackdrop"
  >
    <div :class="[modalDialogClass, 'modal-dialog modal-dialog-centered']">
      <div :class="[modalContentClass, 'modal-content']">
        <div :class="[modalHeaderClass, 'modal-header']">
          <h1 v-if="modalTitle" class="modal-title">{{ modalTitle }}</h1>
          <button
            type="button"
            class="btn rounded-circle btn-close m-0 outline-none shadow-none p-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div :class="[modalFooterClass, 'modal-footer ']">
          <button
            :id="modalId + '-close'"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            {{ footerCancelTitle }}
          </button>
          <button class="btn btn-primary">
            {{ footerTitle }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: [
    'modalId',
    'showBackdrop',
    'modalTitle',
    'modalDialogClass',
    'modalContentClass',
    'modalContent',
    'footerCancelTitle',
    'footerTitle',
    'modalHeaderClass',
    'modalFooterClass',
  ],
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/_modal.scss';
@import '@/assets/scss/components/_buttons.scss';
</style>
