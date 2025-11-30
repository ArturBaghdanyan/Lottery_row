<template>
  <div class="account">
    <div class="account_card">
      <h2>Account Balance</h2>
      <span class="account_card_amount">49,600</span>
      <span>Available to spend</span>
    </div>
    <div class="account_card">
      <h2>Current Game</h2>
      <div class="account_card_price">
        <span>Ticket Price:</span>
        <span style="margin-right: 8px">400</span>
      </div>
      <div class="account_card_price">
        <span>Cells Scratched:</span>
        <span>0/12</span>
      </div>
      <div class="account_card_price">
        <span>Current Winnings:</span>
        <span style="margin-right: 10px; color: #16a34a">0</span>
      </div>
    </div>
    <div class="account_card">
      <h2>Prize Table</h2>
      <div v-for="prize in prizeTable">
        <div :key="prize.id" class="account_card_price">
          <p>{{ prize.level }} {{ prize.key }}:</p>
          <p>{{ formatBalance(prize) }}</p>
        </div>
      </div>
    </div>
    <div class="account_card">
      <h2>How to Play</h2>
      <div class="account_card_play">
        <img :src="arrowSuccess" alt="arrowSuccess" />
        <span>Scratch cells to reveal wins or losses</span>
      </div>
      <div class="account_card_play">
        <img :src="arrowSuccess" alt="arrowSuccess" />
        <span>Find all winning cells to claim prizes</span>
      </div>
      <div class="account_card_play">
        <img :src="error" alt="error" />
        <span>One losing cell ends the game</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { prizeTable } from "../../data/prizeTable";

import arrowSuccess from "../../assets/icons/arrowSuccess.svg";
import error from "../../assets/icons/error.svg";

const formatBalance = (prize) => {
  if (prize.key === 6) {
    return prize.balance + ",500";
  }

  if (prize.key === 7 || prize.key === 8) {
    return prize.balance;
  }

  return prize.balance + ",000";
};
</script>

<style scoped lang="scss">
.account {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  &_card {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border-radius: 1.5rem;
    border: 0.25rem solid #374151;
    padding: 1.75rem;
    background: #1f2937e5;

    > h2 {
        font: 700 1.25rem "Roboto", sans-serif;
        line-height: 28px;
    }
    &_amount {
      color: #16a34a;
      font: 700 1.875rem "Roboto", sans-serif !important;
      line-height: 2.25rem;
    }
    > span {
      line-height: 1.5rem;
      font-size: 0.875rem;
    }
    &_price {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > :nth-child(1) {
        line-height: 1.25rem;
        font: 400 0.875rem "Roboto", sans-serif;
      }

      > :nth-child(2) {
        font-weight: 700;
        line-height: 1.25rem;
      }
    }

    &_play {
      display: flex;
      align-items: end;
      column-gap: 12px;

      > img {
        width: 20px;
        height: 20px;
      }
      > span {
        line-height: 1.25rem;
        padding-bottom: 2px;
        font-size: 0.875rem;
      }
    }
  }
}
@media (max-width: 1200px) {
  .account {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 900px) {
  .account {
    grid-template-columns: 1fr;
  }
}
</style>
