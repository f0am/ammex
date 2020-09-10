<template>
  <nav-tabs-card>
    <template slot="content">
      <!-- <span class="md-nav-tabs-title">Jobs:</span> -->
      <md-tabs class="md-success" md-alignment="left">
        <md-tab id="tab-bookkeeping" md-label="Bookkeeping" md-icon="menu_book">
          <jobs-table></jobs-table>
        </md-tab>

        <md-tab id="tab-payroll" md-label="Payroll" md-icon="receipt_long">
          <jobs-table></jobs-table>
        </md-tab>

        <md-tab id="tab-taxes" md-label="Taxes" md-icon="attach_money">
          <jobs-table></jobs-table>
        </md-tab>

        <md-tab id="tab-gst" md-label="GST/HST" md-icon="calculate">
          <jobs-table></jobs-table>
        </md-tab>
      </md-tabs>
    </template>
  </nav-tabs-card>
</template>

<script>
import { NavTabsCard } from "@/components";
import JobsTable from "./JobTable"

export default {
  components: {
    NavTabsCard,
    JobsTable
  }
};
</script>
