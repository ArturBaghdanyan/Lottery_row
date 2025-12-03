<template>
  <div class="game">
    <div class="game_column">
      <div
        v-for="(item, rowIndex) in game"
        :key="item.id"
        class="game_column_row"
      >
        <p>{{ item.balance }}</p>

        <div class="game_column_row_item">
          <div
            v-for="(imgSrc, btnIndex) in [item.button1, item.button2]"
            :key="btnIndex"
            class="flip-button"
            :class="{ rotate: isOpen(btnIndex, rowIndex) }"
            @click="toggle(btnIndex, rowIndex)"
          >
            <img
              :src="imgSrc"
              class="main-img"
              :class="{ hidden: result(btnIndex, rowIndex) !== null }"
              alt="icon"
            />
            <div
              class="flip-button_success-icon"
              v-if="result(btnIndex, rowIndex) === 'success'"
            >
              <img :src="check" class="icon success-icon" alt="success-icon" />
            </div>

            <div
              class="flip-button_err-icon"
              v-if="result(btnIndex, rowIndex) === 'error'"
            >
              <img :src="errorIcon" class="icon" alt="error-icon" />
            </div>
          </div>

          <button
            v-if="item.claim"
            class="game_column_row_item_claim item-claim"
          >
            {{ item.claim }}
          </button>
        </div>
      </div>
    </div>
    <div v-if="gameOver" class="modal-overlay">
      <div class="modal">
        <h2>Game Over</h2>
        <p>You selected the wrong button.</p>

        <button @click="restartGame">Restart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { gameData } from "../../data/gameData";
import check from "../../assets/icons/arrowSuccess.svg";
import errorIcon from "../../assets/icons/error.svg";

type ResultType = "success" | "error" | null;

const game = ref(gameData);
const results = ref<ResultType[]>([]);
const gameOver = ref(false);
const currentLevel = ref(-1);

const progressionOrder = computed(() => {
  return [...game.value].sort((a, b) => a.balance - b.balance);
});

results.value = Array(game.value.length * 2).fill(null);

const startIndex = computed(() => {
  return progressionOrder.value.findIndex((item) => item.balance === 400);
});

function rowToProgression(row: number): number {
  const uiItem = game.value[row];
  return uiItem
    ? progressionOrder.value.findIndex((item) => item.id === uiItem.id)
    : -1;
}

// Convert progression index to UI row
function progToRow(progressionRow: number): number {
  const progressionItem = progressionOrder.value[progressionRow];
  return progressionItem
    ? game.value.findIndex((item) => item.id === progressionItem.id)
    : -1;
}

//Row 0 → result[0], result[1]
function totalIndex(btnIndex: number, rowIndex: number) {
  return rowIndex * 2 + btnIndex;
}

function result(btn: number, row: number) {
  return results.value[totalIndex(btn, row)];
}

function isOpen(btn: number, row: number) {
  return result(btn, row) !== null;
}

function shouldProgress(row: number): boolean {
  const left = results.value[totalIndex(0, row)];
  const right = results.value[totalIndex(1, row)];
  return (
    (left === "success" || right === "success") &&
    (left !== null || right !== null)
  );
}
const toggle = (btn: number, row: number) => {
  if (gameOver.value || !game.value[row]) return;

  const prog = rowToProgression(row);
  if (prog === -1) return;

  if (currentLevel.value === -1) {
    if (prog !== startIndex.value) return;
    currentLevel.value = prog;
  }

  if (prog !== currentLevel.value) {
    const uiRow = progToRow(currentLevel.value);
    console.log(`Can only click on ${game.value[uiRow]?.balance}`);
    return;
  }

  const idx = totalIndex(btn, row);

  if (results.value[idx] !== null) {
    results.value[idx] = null;
    return;
  }

  const res: ResultType = Math.random() > 0.5 ? "success" : "error";
  results.value[idx] = res;

  if (res === "error") {
    gameOver.value = true;
  } else if (shouldProgress(row)) {
    const next = currentLevel.value + 1;
    if (next < progressionOrder.value.length) {
      moveClaimButtonToNextItem(next);
      currentLevel.value = next;

      console.log(`Moving to ${game.value[progToRow(next)]?.balance}`);
    } else {
      console.log("All levels completed!");
    }
  }
};

const moveClaimButtonToNextItem = (nextProgressionIndex: number) => {
  const nextRow = progToRow(nextProgressionIndex);
  if (nextRow === -1 || !game.value[nextRow]) return;

  game.value[nextRow].claim = "claim";

  const currentRow = progToRow(currentLevel.value);
  if (currentRow !== -1 && game.value[currentRow]) {
    delete game.value[currentRow].claim;
  }
};

currentLevel.value = startIndex.value;

const restartGame = () => {
  gameOver.value = false;

  currentLevel.value = startIndex.value;
  results.value = Array(game.value.length * 2).fill(null);

  game.value.forEach((item) => {
    delete item.claim;
  });

  const firstRow = progToRow(startIndex.value);

  if (firstRow !== -1 && game.value[firstRow]) {
    game.value[firstRow].claim = "claim";
  }
};
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
        position: relative;

        .icon {
          display: block !important;
        }

        .main-img {
          width: 100%;
          transition: opacity 0.2s ease;
        }

        .main-img.hidden {
          opacity: 0;
        }
        .flip-button {
          width: 181px;
          position: relative;
          cursor: pointer;
          border-radius: 4px;
          border: 1px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            #d1d5db 0%,
            #9ca3af 50%,
            #6b7280 100%
          );
          transition: transform 0.4s ease;

          &_err-icon {
            width: 181px;
            height: 61px;
            position: absolute;
            top: 0;
            background: linear-gradient(
              90deg,
              rgba(255, 128, 166, 1) 0%,
              rgba(253, 29, 29, 1) 50%,
              rgba(252, 176, 69, 1) 100%
            );
          }

          &_success-icon {
            width: 181px;
            height: 61px;
            position: absolute;
            top: 0;
            background: linear-gradient(
              90deg,
              rgb(21 211 14) 0%,
              rgb(24 241 113) 50%,
              rgb(255 246 172) 100%
            );
          }
        }
        &_claim {
          position: absolute;
          right: 0;
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

          &_claim {
            grid-column: 1 / -1;
            justify-self: center;
            width: 100%;
            position: inherit;
          }
        }
      }
    }
  }
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .modal {
    background: #111827;
    border-radius: 12px;
    padding: 32px 40px;
    min-width: 280px;
    text-align: center;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  .modal h2 {
    color: #ef4444;
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .modal p {
    font-size: 1rem;
    color: #d1d5db;
    margin-bottom: 24px;
  }

  .modal button {
    border: none;
    padding: 12px 24px;
    border-radius: 10px;
    background: linear-gradient(90deg, #9333ea 0%, #db2777 100%);
    color: white;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
}

.rotate {
  transform: rotateY(180deg);
}

.icon {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block !important;
  pointer-events: none;
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

          &_claim {
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
