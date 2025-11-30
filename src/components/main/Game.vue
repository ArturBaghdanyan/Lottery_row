<template>
  <div class="game">
    <div class="game_column">
      <div
        v-for="(item, index) in gameData"
        :key="item.id"
        class="game_column_row"
      >
        <p>{{ item.balance }}</p>
        <div
          class="game_column_row_item"
          :class="{ 'last-item': index === gameData.length - 1 }"
        >
          <img :src="item.button1" alt="button" />
          <img :src="item.button2" alt="button" />
          <button v-if="item.claim">{{ item.claim }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gameData } from "../../data/gameData";
</script>

<style scoped lang="scss">
.game {
  background-color: #111827;
  border-radius: 12px;

  &_column {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 61px 18px 61px 72px;

    &_row {
      display: flex;
      gap: 38px;

      > p {
        width: 107px;
        text-align: end;
        font: 700 1.875rem "Roboto", sans-serif;
        line-height: 36px;
      }

      &_item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;

        > img {
          width: 181px;
          border-radius: 4px;
          border: 1px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            #d1d5db 0%,
            #9ca3af 50%,
            #6b7280 100%
          );
        }
        > button {
          width: 170px;
          height: 48px !important;
          border-radius: 12px;
          padding: 12px 0;
          border: none;
          background: linear-gradient(90deg, #9333ea 0%, #db2777 100%);
          color: white;
          text-transform: capitalize;
          font: 700 1rem "Roboto", sans-serif;
        }
      }

      @media (max-width: 1438px) {
        &_item {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          button {
            grid-column: 1 / -1;
            justify-self: center;
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .game {
    &_column {
      padding: 40px;

      &_row {
        gap: 24px;

        > p {
          width: 80px;
          font-size: 1.5rem;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .game {
    &_column {
      padding: 24px 12px;

      &_row {
        flex-direction: column;
        align-items: center;
        gap: 16px;

        > p {
          width: auto;
          text-align: center;
          font-size: 1.375rem;
        }

        &_item {
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          gap: 1rem;

          > img {
            width: 140px;
          }

          > button {
            width: 100%;
            max-width: 220px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .game {
    &_column {
      gap: 1.25rem;
      margin: 0 auto;

      &_row {
        > p {
          font-size: 1.2rem;
        }

        &_item {
          gap: 12px;
          grid-template-columns: 1fr;

          > img {
            width: 120px;
          }

          > button {
            height: 44px;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>
