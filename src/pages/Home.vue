<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>

        <v-list-group value="Clientes">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle">
              Itens
            </v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-currency-usd">Cadastrar</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Listar</v-list-item>
        </v-list-group>

        <v-list-group value="Clientes">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle">
              Estoque
            </v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-currency-usd">Cadastrar</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Listar</v-list-item>
        </v-list-group>

        <v-list-item prepend-icon="mdi-home">Início</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat  class="border-b">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>Meu app</v-app-bar-title>
      <v-btn @click="() => changeTheme()">
        <v-icon :icon="iconLamp"></v-icon>
      </v-btn>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img cover src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/298d7bf4-ce71-4880-bcaf-f6b98a38b2da/dfmmduk-9ecb858b-b199-4751-8364-cf90c184414f.jpg/v1/fill/w_1280,h_1280,q_75,strp/cute_nerd_avatar_octane_render_32k_uhd_by_kaiquemix_dfmmduk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5OGQ3YmY0LWNlNzEtNDg4MC1iY2FmLWY2Yjk4YTM4YjJkYVwvZGZtbWR1ay05ZWNiODU4Yi1iMTk5LTQ3NTEtODM2NC1jZjkwYzE4NDQxNGYuanBnIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMjk4ZDdiZjQtY2U3MS00ODgwLWJjYWYtZjZiOThhMzhiMmRhXC9rYWlxdWVtaXgtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.u0IgdLrCRlsJeT9bz0shxXq5-3N8LMYPYVdq-_l4OiA">
              </v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Meu perfil</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-heart-outline">
                <v-list-item-title>Favoritos</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main color="teal-darken-1">
      <v-container>
        <v-card>
          <v-card-title>
            Cadastro
          </v-card-title>

          <v-card-subtitle>
            Preencha os dados abaixo
          </v-card-subtitle>

          <v-card-text>
            <v-sheet class="mx-auto">
              <v-form @submit.prevent>
                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="nome"
                      label="Nome"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="fornecedor"
                      label="Fornecedor"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="marca"
                      label="Marca"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="tipo"
                      label="Tipo"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="altura"
                      label="Altura"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="peso"
                      label="Peso"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="cor"
                      label="Cor"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="preco"
                      label="Preço"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn @click="cadastrarItem" color="primary" class="mt-2" type="submit" block>Cadastrar</v-btn>
              </v-form>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import firebase from "../services/firebaseConnection.js";

  const isDrawerOpen = ref(false);
  const theme = ref('light');
  const iconLamp = ref('mdi-lightbulb-on');

  const nome = ref('');
  const fornecedor = ref('');
  const marca = ref('');
  const tipo = ref('');
  const altura = ref('');
  const peso = ref('');
  const cor = ref('');
  const preco = ref('');

  const changeTheme = () => {
    let currentTheme = theme.value;
    let currentIconLamp = iconLamp.value;

    if (currentTheme === 'dark'){
      currentTheme = 'light';
      currentIconLamp = 'mdi-lightbulb-on-outline';
    }else if (currentTheme === 'light'){
      currentTheme = 'dark';
      currentIconLamp = 'mdi-lightbulb-on';
    }

    theme.value = currentTheme;
    iconLamp.value = currentIconLamp;
  }

  const cadastrarItem = async () => {
    await firebase.firestore().collection('item')
      .add({
        nome: nome.value,
        fornecedor: fornecedor.value,
        marca: marca.value,
        tipo: tipo.value,
        altura: altura.value,
        peso: peso.value,
        cor: cor.value,
        preco: preco.value
      })
      .then(()=>{
        nome.value = '';
        fornecedor.value = '';
        marca.value = '';
        tipo.value = '';
        altura.value = '';
        peso.value = '';
        cor.value = '';
        preco.value = '';

       console.log('CADASTRADO COM SUCESSO!');
       alert('Cadastro realizado com sucesso!');
      })
      .catch((error)=>{
        console.log('GEROU ALGUM ERRO: ' + error);
      })
  }
</script>
