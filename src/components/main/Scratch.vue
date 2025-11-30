<template>
  <main class="main">
    <article class="main_scratch">
      <div class="main_scratch_title">
        <span></span>
        <span>Armenian Scratch</span>
      </div>
      <div class="main_scratch_text">
        <h2>Armenian Scratch Card</h2>
        <p>
          Traditional Armenian lottery scratch card with 12 cells. Find all
          winning cells to claim your prize!
        </p>
      </div>
    </article>
    <section class="main_section container">
      <div class="main_section_row">
        <Game />
        <Balance />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import Game from "./Game.vue";
import Balance from "./Balance.vue";
</script>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  background-image: url("@/assets/background.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding-top: 6rem;
  padding-bottom: 4.5rem;

  &_scratch {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 3rem;
    margin-top: 5px;

    &_title {
      display: flex;
      align-items: center;
      background: linear-gradient(#ef4444, #f97316);
      padding: 0.5rem 1rem;
      margin: 0 auto;
      border-radius: 9999px;

      :first-child {
        width: 8px;
        height: 8px;
        margin-right: 8px;
        background-color: #ffffff;
        border-radius: 50%;
      }
      :last-child {
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
      }
    }
    &_text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      > h2 {
        font-family: "Roboto", sans-serif;
        font-size: 3.75rem;
        font-weight: 600;
        line-height: 60px;
        color: #ffffff;
      }
      > p {
        font-family: "Roboto", sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 28px;
        color: #e5e7eb;
      }
    }
  }

  @media screen and (max-width: 480px) {
    &_text {
      > h2 {
        font-size: 2rem;
        line-height: 32px;
      }
      > p {
        font-size: 0.875rem;
      }
    }
  }
  &_section {
    &_row {
      column-gap: 36px;
      margin: 10px 12px 0 12px;
      display: grid;
      grid-template-columns:
        minmax(280px, 1fr)
        minmax(240px, 384px);
      align-items: start;
    }
  }

  @media (max-width: 1280px) {
    &_section {
      &_row {
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .main {
    &_scratch {
      margin-top: 5rem;

      &_text {
        > h2 {
          font-size: 1.4rem;
          line-height: 40px;
          text-align: center;
        }
        > p {
          font-size: 1rem;
          text-align: center;
          padding: 0 20px;
        }
      }
    }
  }
}
</style>
