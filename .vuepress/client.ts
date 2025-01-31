import { defineClientConfig } from '@vuepress/client'
import Contact from './components/Contact.vue'
import ExternalIframe from './components/ExternalIframe.vue'
import NoBreak from './components/NoBreak.vue'
import NoPrint from './components/NoPrint.vue'
import Qcm from './components/Qcm.vue'
import Reveal from './components/Reveal.vue'
import Sample from './components/Sample.vue'
import SlidesDeck from './components/SlidesDeck.vue'
import Center from './components/Center.vue'

export default defineClientConfig({
    enhance({ app }) {
        app.component('Contact', Contact)
        app.component('ExternalIframe', ExternalIframe)
        app.component('NoBreak', NoBreak)
        app.component('NoPrint', NoPrint)
        app.component('Qcm', Qcm)
        app.component('Reveal', Reveal)
        app.component('Sample', Sample)
        app.component('SlidesDeck', SlidesDeck)
        app.component('center', Center)
    }
})