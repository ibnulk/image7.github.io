<template>
    <section id="contact">
        <h3 id="contact-heading">You can find me in the web</h3>
        <hr>
        <div class="social">
            <a href="https://github.com/image7" target="_blank">
                <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/ibnul-kayes-837314121/" target="_blank">
                <i class="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="https://twitter.com/ibnulkayes" target="_blank">
                <i class="fab fa-twitter fa-2x"></i>
            </a>
        </div>

    </section>
</template>

<style scoped>

    #contact {
        min-height: 40vh;
        background: #f6fffb;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
    }
    @media screen and (max-width: 450px) {
        #contact-heading {
            text-align: center;
        }
    }
    .social {
        width: 170px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .social a {
        display: block;
        width: 50px;
        height: 50px;
        line-height: 60px;
        text-align: center;
        border: 1px solid #000;
        color: #000;
        border-radius: 50%;
        transition: all .4s cubic-bezier(.82,0,.63,1.26);
    }
    .social a:hover {
        background: #034B63;
        border: 1px solid #034B63;
        color: #fff;
        animation: spin 300ms linear;
    }

    @keyframes spin {
        0%      { transform: rotate(0deg) }
        50%     { transform: rotate(180deg) }
        100%    { transform: rotate(360deg) }
    }

</style>

<script>
export default {
  name: 'Contact'
}
</script>

