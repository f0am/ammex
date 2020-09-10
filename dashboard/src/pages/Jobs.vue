<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card-content>
          <jobs-table table-header-color="green"></jobs-table>
        </md-card-content>
      </div>
    </div>
  </div>
</template>

<script>
import JobsTable from "@/components/Jobs/Table";

export default {
  components: {
    JobsTable
  }
};
</script>


