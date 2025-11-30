<template>
  <header>
    <div class="header container">
      <nav class="header_nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/games">Games</router-link>
        <router-link to="/tuarnaments">Tournaments</router-link>
        <router-link to="/community">Community</router-link>
      </nav>

      <div class="nav" @click="toggleMenu">
        <img :src="menuIcon" alt="menuIcon" />
      </div>

      <nav :class="['nav-links', { open: menu }]">
        <button @click="toggleMenu">x</button>
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/games" @click="closeMenu">Games</router-link>
        <router-link to="/tuarnaments" @click="closeMenu"
          >Tournaments</router-link
        >
        <router-link to="/community" @click="closeMenu">Community</router-link>
      </nav>

      <div v-show="menu" class="overlay" @click="closeMenu"></div>

      <div class="header_icons">
        <img :src="avatar" alt="Avatar" width="28px" height="28px" />
        <img :src="downLine" alt="downLine" width="18px" height="18px" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import avatar from "../../assets/icons/avatar.svg";
import downLine from "../../assets/icons/downLine.svg";
import menuIcon from "../../assets/icons/menu.svg";

const menu = ref(false);

function toggleMenu() {
  menu.value = !menu.value;
}

function closeMenu() {
  menu.value = false;
}
</script>

<style scoped lang="scss">
header {
  height: 64px;
  background-color: #111827ff;
  color: white;

  .header {
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_nav-links {
        display: flex;
        align-items: center;
        column-gap: 2rem;

      a, router-link {
        margin: 0 10px;
        text-decoration: none;
        font: 400 1rem "Outfit", sans-serif;
        line-height: 24px;
        color: #d1d5db;
        cursor: pointer;
      }
    }

    &_icons {
      display: flex;
      align-items: center;
      column-gap: 4px;
      img {
        color: white;
      }
    }
  }

  /* Hamburger icon */
  .nav {
    display: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #1f2937;
    flex-direction: column;
    padding: 2rem 1rem;
    display: flex;
    gap: 1.5rem;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 2s ease;

    > button {
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      color: white;
      position: absolute;
      right: 5px;
      top: 10px;
      cursor: pointer;
      font-size: 1.25rem;
    }
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 900;
  }

  @media (max-width: 678px) {
    .nav {
      display: flex;
    }
    .header > .header_nav-links {
      display: none;
    }
  }
}
</style>
