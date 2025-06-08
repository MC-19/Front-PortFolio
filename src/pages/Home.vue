<template>
    <Navbar/>
    <Introduction/>
    <About/>
    <WhatIDo />
    <Skills/>
    <MiCV/>
    <Projectos/>
    <Contacto/>
    <Footer/>
</template>

<script setup lang="ts">
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import Introduction from '@/pages/Introduction.vue'
    import About from '@/pages/About.vue'
    import WhatIDo from '@/pages/WhatIDo.vue'
    import Skills from '@/pages/Skills.vue'
    import MiCV from '@/pages/MiCV.vue'
    import Projectos from '@/pages/Projects.vue'
    import Contacto from '@/pages/Contact.vue'
</script>
