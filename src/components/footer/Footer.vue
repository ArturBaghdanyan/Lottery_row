<template>
  <footer>
    <div class="footer">
      <div class="footer_row">
        <div class="footer_row_column">
          <div class="footer_row_column_title">
            <div class="footer_row_column_title_icon">
              <img :src="footerIcon" alt="footerIcon" />
            </div>
            <span>GameHub</span>
          </div>
          <p class="footer_row_column_text">
            The ultimate gaming platform where players connect, compete, and
            conquer in lottery, nardi, and auction experiences.
          </p>
          <div class="footer_row_column_icons">
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <img :src="facebook" alt="Facebook" />
            </a>

            <a href="https://t.me" target="_blank" rel="noopener">
              <img :src="telegram" alt="Telegram" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener">
              <img :src="instagram" alt="Instagram" />
            </a>

            <a href="https://discord.com" target="_blank" rel="noopener">
              <img :src="discord" alt="Discord" />
            </a>
          </div>
        </div>
        <div class="footer_row_column">
          <h3>Games</h3>
          <div class="footer_row_column_piece">
            <span>Lottery Master</span>
            <span>Nardi Champions</span>
            <span>Auction Arena</span>
            <span>Tournaments</span>
          </div>
        </div>
        <div class="footer_row_column">
          <h3>Support</h3>
          <div class="footer_row_column_piece">
            <span>Help Center</span>
            <span>Contact Us</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      <div class="footer_foot">
        <span>© 2024 GameHub. All rights reserved.</span>
        <div class="footer_foot_right">
          <span>Powered by</span>
          <div class="footer_foot_right_piece">
            <span class="footer_foot_right_piece_dot"></span>
            <span>Next js</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerIcon from "../../assets/icons/footer_icons/footerIcon.svg";
import facebook from "../../assets/icons/footer_icons/fb.svg";
import telegram from "../../assets/icons/footer_icons/telegram.svg";
import instagram from "../../assets/icons/footer_icons/instagram.svg";
import discord from "../../assets/icons/footer_icons/discord.svg";
</script>

<style scoped lang="scss">
footer {
  padding: 48px 32px;
  background: #101625ff;
  .footer {
    width: 88%;
    height: auto;
    margin: 0 auto;

    &_row {
      display: grid;
      grid-template-columns: 592px 1fr 1fr;
      column-gap: 32px;

      &_column {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        &_title {
          display: flex;
          column-gap: 8px;

          &_icon {
            width: 32px;
            height: 32px;
            background: #9333ea;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          > span {
            font: 400 1.25rem "Pacifico", cursive;
            line-height: 28px;
          }
        }

        &_text {
          font: 400 1rem "Roboto", sans-serif;
          line-height: 26px;
          color: #9ca3af;
          width: 76%;
        }

        &_piece {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          > h3 {
            font: 600 1.125rem "Roboto", sans-serif;
          }

          > span {
            line-height: 24px;
            color: #9ca3af;
          }
        }
        &_icons {
          display: flex;
          gap: 1rem;
        }
      }
    }

    &_foot {
      width: 100%;
      height: 53px;
      border-top: 1px solid #1f2937;
      display: flex;
      align-items: end;
      justify-content: space-between;
      margin-top: 3rem;

      &_right {
        display: flex;
        align-items: center;
        column-gap: 24px;

        &_piece {
          display: flex;
          align-items: center;
          column-gap: 8px;

          &_dot {
            width: 16px;
            height: 16px;
            background-color: #9333ea;
            border-radius: 4px;
          }
        }
      }
      span {
        color: #9ca3af;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  footer {
    padding: 40px 24px;

    .footer {
      width: 92%;

      &_row {
        grid-template-columns: 1.5fr 1fr 1fr;

        &_column {
          &_text {
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  footer {
    padding: 32px 20px;

    .footer {
      width: 100%;

      &_row {
        display: flex;
        flex-wrap: wrap;
        row-gap: 32px;

        &_column {
          row-gap: 16px;

          &_title > span {
            font-size: 1.125rem;
          }

          &_text {
            font-size: 0.95rem;
            line-height: 22px;
            width: 60%;
          }

          &_piece > span {
            font-size: 0.95rem;
          }
        }
      }
      &_foot {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        height: auto;
        padding-top: 16px;
        text-align: center;

        &_right {
          column-gap: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  footer {
    padding: 28px 16px;

    .footer {
      &_row_column {
        &_title > span {
          font-size: 1rem;
        }

        &_text {
          font-size: 0.875rem;
          line-height: 20px;
        }

        &_piece > span {
          font-size: 0.875rem;
        }
      }
        &_foot {
        gap: 8px;

        span {
          font-size: 13px;
        }

        &_right {
          flex-direction: column;
          gap: 6px;
        }
      }
    }
  }
}
</style>
