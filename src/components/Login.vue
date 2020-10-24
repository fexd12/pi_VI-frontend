<template>
  <div class="auth-content">
    <div class="auth-modal">
      <form @submit.prevent="onSubmit()">
        <img src="@/assets/logo.png" width="270" alt="Logo" class="Logo" />
        <hr />
        <div class="auth-title">Acessar</div>

        <input class="form-control" v-model="user.email" name="email" type="text" placeholder="E-mail" />
        <input class="form-control" v-model="user.password" name="password" type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { signIn, isSignedIn } from "../auth";

export default {
  name: "Auth",
  data: function () {
    return {
      showSignup: false,
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(){
        let result = await signIn(this.$baseUrl, this.user.email, this.user.password);
        // console.log(result)
        if (result.success && Object.keys(result).includes("token")) {
            this.$router.push("/dashboard");
        } else {
            alert("Usuario ou senha Incorretos");
        }
    },
    async authenticate(){
        let signed = await isSignedIn(this.$baseUrl);
        if(signed) this.$router.push('/dashboard')
    }
  },
  async mounted() {
    await this.authenticate();
  },
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #fff;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.auth-modal button {
  align-self: flex-end;
  background-color: #2460ae;
  color: #fff;
  padding: 5px 15px;
}

.auth-modal a {
  margin-top: 35px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(10, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );


}

.Logo{
  position: relative;
  left: 25px;
}
</style>
