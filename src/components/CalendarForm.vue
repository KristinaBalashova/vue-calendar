<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Button from "./Button.vue";
import Calendar from "./Calendar/Calendar.vue";
import { formatDate } from "../utils";

const { t } = useI18n();
const router = useRouter();

const selectedDate = ref(null);

const emit = defineEmits(["submit-date"]);

const submitDate = () => {
  if (selectedDate.value) {
    const formattedDate = formatDate(selectedDate.value);
    emit("submit-date", formattedDate);
  }
};

const setDate = (date) => {
  selectedDate.value = date;
};
</script>

<template>
  <div>
    <form @submit.prevent="submitDate" class="form" required>
      <h2 class="title">{{ t("selectDate") }}</h2>
      <Calendar @setDate="setDate" />
      <Button type="submit" class="button-submit">{{ t("submit") }}</Button>
    </form>
  </div>
</template>

<style scope>
.form {
  margin: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  text-align: center;
  margin: 0;
}

.button-submit {
  margin-bottom: 20px;
  width: 50%;
  align-self: center;
}
</style>
