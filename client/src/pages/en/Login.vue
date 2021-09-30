 <template>
 <layout>
 <section class="hero is-light is-fullheight">
        <div class="hero-body" style="margin:80px">
            <div class="container has-text has-text-centered">
                <div class="columns is is-vcentered">
                    <div class="column is-5" padding="200px">
               <g-image alt="Ammex Impôts" src="~/pictures/logo.png"/>
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
</style>