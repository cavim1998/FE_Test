<template>
  <div id="app">
    <SidebarMenu :menu="menu" :collapsed="true" width="250px" />
    <div
      id="demo"
      :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]"
      class="demo"
    >
      <div class="content h-100 d-flex flex-column">
        <router-view class="py-4 px-4 h-100" />

        <SidebarMenu
          :menu="menu"
          :collapsed="collapsed"
          :show-one-child="true"
          @toggle-collapse="onToggleCollapse"
          width="260px"
        >
          <!-- @item-click="onItemClick" -->
          <div slot="header" class="text-white mb-3 p-2">
            <img
              v-if="isOnMobile || collapsed"
              src="@/assets/logo.png"
              alt="gambar Judul"
              class="w-100"
            />
            <div v-else class="p-2">
              <div class="d-flex align-items-center">
                <img
                  id="HeaderProfilePicture"
                  alt=""
                  src="@/assets/logo.png"
                  width="40px"
                  height="40px"
                />
                <h3 class="ml-5 mb-0">
                  <strong>Pro_1</strong>
                </h3>
              </div>
            </div>
          </div>
          <span slot="toggle-icon">
            <font-awesome-icon icon="fa-arrow-right-arrow-left" />
          </span>
        </SidebarMenu>
        <div
          v-if="isOnMobile && !collapsed"
          @click="collapsed = true"
          class="sidebar-overlay"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      collapsed: false,
      menu: [],
      isOnMobile: false,
      fullscreen: false,
      isPortraitMode: false,
    };
  },
  created() {
    this.menu = [
      {
        href: "/",
        title: "Home",
        icon: {
          element: "font-awesome-icon",
          attributes: { icon: "fa-house" },
        },
      },
      {
        href: "/street",
        title: "Master Ruas",
        icon: {
          element: "font-awesome-icon",
          attributes: { icon: "fa-road" },
        },
      },
    ];
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
    onResize() {
      this.isPortraitMode = this.isMobilePortrait();
      this.autoResizeMobile();
      if (window.innerWidth <= 1200) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
    isMobilePortrait() {
      if (window.outerWidth < 576) {
        if (window.outerWidth < window.outerHeight) {
          return true;
        }
      }
      return false;
    },
    autoResizeMobile() {
      let width = "device-width";
      let scale = 1;
      if (window.outerWidth < 1024) {
        width = 1024;
        scale = window.outerWidth / width;
      }
      // else if (window.outerWidth < 992) {
      //   width = 992
      //   scale = window.outerWidth / width
      // }
      document
        .querySelector("meta[name=viewport]")
        .setAttribute("content", `width=${width}, initial-scale=${scale}`);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#__nuxt,
#__layout {
  height: 100%;
}

#demo {
  padding-left: 260px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(197, 197, 197);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(121, 121, 121);
}

.v-sidebar-menu {
  z-index: 99 !important;
}

.v-sidebar-menu .vsm--link {
  padding: 8px;
}
</style>
