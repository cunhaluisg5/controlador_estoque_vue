<template>
  <v-app theme="light">
    <v-main>
      <v-container>
        <v-img
          class="mx-auto my-6"
          max-width="228"
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
        ></v-img>

        <v-card
          class="mx-auto pa-12 pb-8"
          elevation="8"
          max-width="448"
          rounded="lg"
        >
          <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>

          <v-text-field
            density="compact"
            placeholder="Informe seu e-mail"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            type="text"
            v-model="email"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Senha

            <a
              class="text-caption text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Esqueceu sua senha?</a>
          </div>

          <v-text-field
            :append-inner-icon="visivel ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visivel ? 'text' : 'password'"
            density="compact"
            placeholder="Informe sua senha"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visivel = !visivel"
            v-model="senha"
          ></v-text-field>

          <v-btn
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
            block
            @click="entrar"
          >
            Entrar
          </v-btn>

          <v-card-text class="text-center">
            <a
              class="text-blue text-decoration-none"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Criar conta <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from "vue";
  import { useRoute, useRouter } from 'vue-router';
  import firebase from "../services/firebaseConnection.js";

  const visivel = ref(false);
  const senha = ref('');
  const email = ref('');

  const router = useRouter();

  const entrar = async () => {
    await firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
    .then((response)=>{
      console.log('ENTROU: ', response);
      router.push('/home');
    })
    .catch((error)=>{
      console.log('ERRO: ', error);
      alert('E-mail ou senha inválidos!')
    })

  }
</script>
