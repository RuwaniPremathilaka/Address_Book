<template>
  <v-card
    class="summarycard"
  >
    <v-container>
      <v-row
        class="summarybox"
        dense
      >
        <v-col
          class="d-flex align-center justify-center"
        >
          <v-avatar
            size="70"
            color="#DEFFEE"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
            >
              <path
                fill="#01ac50"
                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
              />
            </svg>
          </v-avatar>
          <v-card
            class="details"
            color="#fff"
            theme="dark"
            max-width="200"
          >
            <v-card-title
              class="maintitle"
            >
              Total
              Customers
            </v-card-title>

            <v-card-subtitle
              class="alltotale"
              >5,423</v-card-subtitle
            >

            <v-card-title
              class="maintitle"
            >
              <v-icon
                size="20"
                color="#087830"
                icon="mdi-arrow-up"
              ></v-icon>
              <span
                class="percentagetc"
                >16%</span
              >
              this
              month
            </v-card-title>
          </v-card>
        </v-col>
        <v-divider
          vertical
        ></v-divider>
        <v-col
          class="d-flex align-center justify-center"
        >
          <v-avatar
            size="70"
            color="#DEFFEE"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
            >
              <path
                fill="#01ac50"
                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>
          </v-avatar>
          <v-card
            class="details"
            max-width="200"
            color="#fff"
            theme="dark"
          >
            <v-card-title
              class="maintitle"
            >
              Members
            </v-card-title>

            <v-card-subtitle
              class="alltotale"
              >1893</v-card-subtitle
            >
            <v-card-title
              class="maintitle"
            >
              <v-icon
                size="20"
                color="#b81c58"
                icon="mdi-arrow-down"
              ></v-icon>
              <span
                class="percentagem"
                >1%</span
              >
              this
              month
            </v-card-title>
          </v-card>
        </v-col>
        <v-divider
          vertical
        ></v-divider>
        <v-col
          class="d-flex align-center justify-center"
        >
          <v-avatar
            size="70"
            color="#DEFFEE"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="18"
              viewBox="0 0 576 512"
            >
              <path
                fill="#01ac50"
                d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
              />
            </svg>
          </v-avatar>
          <v-card
            class="details"
            max-width="200"
            color="#fff"
            theme="dark"
          >
            <v-card-title
              class="maintitle"
            >
              Active
              Now
            </v-card-title>

            <v-card-subtitle
              class="alltotale"
              >189</v-card-subtitle
            >
            <v-avatar
              size="36px"
              class="ml-4 mt-2"
            >
              <v-img
                src="../src/img/img1.jpg"
              ></v-img>
            </v-avatar>
            <v-avatar
              size="36px"
              class="mt-2"
              style="
                position: relative;
                left: -20px;
              "
            >
              <v-img
                src="../src/img/img 2.jpg"
              ></v-img>
            </v-avatar>
            <v-avatar
              size="36px"
              class="mt-2"
              style="
                position: relative;
                left: -40px;
              "
            >
              <v-img
                src="../src/img/img 3.jpg"
              ></v-img>
            </v-avatar>
            <v-avatar
              size="36px"
              class="mt-2"
              style="
                position: relative;
                left: -60px;
              "
            >
              <v-img
                src="../src/img/img 2.jpg"
              ></v-img>
            </v-avatar>
            <v-avatar
              size="36px"
              class="mt-2"
              style="
                position: relative;
                left: -80px;
              "
            >
              <v-img
                src="../src/img/img 3.jpg"
              ></v-img>
            </v-avatar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "CustomerSummary",
  layout:
    "",
  data() {
    return {};
  },
};
</script>
<style
  scoped
>
.details {
  box-shadow: none;
}

.maintitle {
  font-size: smaller;
  color: gray;
  font-weight: bold;
}
.percentagetc {
  color: #087830;
  font-weight: bold;
}
.percentagem {
  color: #b81c58;
  font-weight: bold;
}
.alltotale {
  font-size: 25px;
  font-weight: bold;
}
.summarycard {
  margin-top: 20px;
  border-radius: 25px;
}

@media only screen and (max-width: 1024px) {
  .summarybox {
    display: block;
  }
}
</style>
