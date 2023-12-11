<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="
          drawer
        "
        app
        :mobile-break-point="
          1024
        "
        hide-overlay
      >
        <v-list-item
          class="d-flex justify-start"
        >
          <template
            v-slot:append
          >
            <v-img
              class="logo"
              src="../src/img/Logo.jpg"
            ></v-img>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="
                drawer =
                  !drawer
              "
              class="hidden-lg-and-up"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          density="compact"
          nav
        >
          <v-list-item
            class="SelectedTile"
            active-class="SelectedTile-active"
            v-for="item in items"
            :title="
              item.title
            "
            :prepend-icon="
              item.icon
            "
            :to="
              item.path
            "
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
      >
        <v-app-bar-nav-icon
          @click.stop="
            drawer =
              !drawer
          "
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-main
        class="main"
      >
        <v-container
          fluid
        >
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
      selectedItem: 2,
      items:
        [
          {
            title:
              "DashBoard",
            icon: "mdi-view-dashboard",
            path: "/",
          },
          {
            title:
              "Products",
            icon: "mdi-cube-outline",
            path: "/first",
          },
          {
            title:
              "Customers",
            icon: "mdi-account-group-outline",
            path: "/second",
          },
          {
            title:
              "Income",
            icon: "mdi-coin",
            path: "/third",
          },
          {
            title:
              "Promote",
            icon: "mdi-checkbox-blank-outline",
            path: "/fourth",
          },
          {
            title:
              "Help",
            icon: "mdi-help-circle-outline",
            path: "/fifth",
          },
        ],
    };
  },
};
</script>
<style
  scoped
>
.ListItemClass {
  color: #b6b9cb;
}

.SelectedTile:hover {
  border-radius: 4px;
  background: #455a64;
  color: #fff;
}

.SelectedTile-active {
  border-radius: 4px;
  background: #5a32ea;
  color: #fff;
}
main.v-main {
  background-color: aliceblue;
}
.container {
  margin: 50px;
}
.logo {
  width: 200px;
}
@media only screen and (min-width: 1278px) {
  .v-app-bar {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .logo {
    width: 150px;
  }
}
</style>
