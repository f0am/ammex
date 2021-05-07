 <template>
 <layout>
 <section class="hero is-light is-fullheight">
        <div class="hero-body" style="margin:80px">
            <div class="container has-text has-text-centered">
                <div class="columns is is-vcentered">
                    <div class="column is-5" padding="200px">
               <g-image alt="Ammex Impôts" src="~/Logo.png"/>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <div class="login">
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
                </div>
        </div>
            </div>
    </section>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Log In'
  }
}
</script>

<style>

:root {
  --shadowDark: #D9DDE6;
  --background: #E4E9F2;
  --shadowLight: #EFF5FE;
}

.hero-body {
  justify-content: center;
}

.box {
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 8px 8px 15px var(--shadowDark), -8px -8px 15px var(--shadowLight);
}

a {
  font-weight: 400;
}
</style>