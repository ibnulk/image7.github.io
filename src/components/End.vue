<template>
    <section id="footer">
        <span>Made with <i class="fas fa-heart"></i> </span>
        <a href="mailto:ikayes114@gmail.com">ikayes114@gmail.com</a>
    </section>
</template>

<style scoped>

    #footer {
        width: 100%;
        padding: 1rem 0;        min-height: 15vh;
        background: #034B63;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    #footer a {
        text-decoration: none;
        transition: color 200ms ease;
    }
    #footer a:hover {
        color: #fff;
    }

</style>

<script>
export default {
  name: 'End'
}
</script>
