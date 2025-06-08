<template>
  <section
    id="contacto"
    class="relative bg-cover bg-center bg-no-repeat py-32 px-6"
    style="background-image: url('/images/mountain-dusk.jpg')"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 max-w-3xl mx-auto text-center text-white">
      <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
      <div class="w-16 h-1 bg-violet-300 mx-auto mb-6"></div>
      <p class="mb-12 text-gray-300">
        ¿Tienes un proyecto o solo quieres saludar?  
        <br />No dudes en enviarme un mensaje.
      </p>

      <form
        @submit.prevent="handleSubmit"
        class="bg-white/10 backdrop-blur-sm p-8 rounded-xl space-y-10"
      >
        <div
          v-for="field in fields"
          :key="field.id"
          class="relative text-left"
        >
          <label
            :for="field.id"
            class="text-sm font-semibold uppercase tracking-wide text-white"
          >
            {{ field.label }}
          </label>

          <div class="relative mt-1">
            <input
              v-model="formData[field.id]"
              :id="field.id"
              :type="field.type"
              :placeholder="field.placeholder"
              class="w-full bg-transparent border-b border-gray-400 py-2 px-1 text-white focus:outline-none"
              @focus="triggerWave(field.id)"
            />

            <!-- Línea animada -->
            <span
              class="absolute left-0 bottom-0 h-[2px] w-full bg-violet-300 scale-x-0 origin-left pointer-events-none transition-transform duration-500"
              :ref="el => rippleRefs[field.id] = el as HTMLElement"
            ></span>
          </div>

          <!-- Mensaje de error -->
          <p v-if="errors[field.id]" class="text-sm text-red-400 mt-1">
            {{ errors[field.id] }}
          </p>
        </div>

        <!-- Botón -->
        <div class="text-center pt-4">
          <button
            type="submit"
            :disabled="isSending"
            class="px-6 py-2 border border-violet-300 text-violet-300 font-semibold rounded hover:bg-violet-300 hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSending ? 'Enviando...' : 'Enviar mensaje' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Overlay tipo Hero con animación -->
<div
  v-if="status.state"
  class="absolute inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
>
  <div
    class="bg-black text-violet-300 p-8 md:p-12 rounded-2xl shadow-xl text-center max-w-md w-full border border-violet-300 space-y-6"
  >
    <!-- Estado: Enviando -->
    <div v-if="status.state === 'sending'" class="flex flex-col items-center gap-4">
      <div class="w-10 h-10 border-4 border-violet-300 border-t-transparent rounded-full animate-spin"></div>
      <h3 class="text-xl font-semibold tracking-wide">Enviando mensaje...</h3>
      <p class="text-sm text-violet-300/80">{{ status.message }}</p>
    </div>

    <!-- Estado: Éxito -->
    <div v-else-if="status.state === 'success'" class="space-y-2">
      <div class="w-12 h-12 rounded-full bg-violet-300 text-black flex items-center justify-center mx-auto">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h3 class="text-xl font-bold">¡Mensaje enviado!</h3>
      <p class="text-sm text-violet-300/80">{{ status.message }}</p>
      <button
        @click="status.state = ''"
        class="mt-4 px-4 py-2 border border-violet-300 rounded hover:bg-violet-300 hover:text-black transition"
      >
        Volver al formulario
      </button>
    </div>

    <!-- Estado: Error -->
    <div v-else-if="status.state === 'error'" class="space-y-2">
      <div class="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <h3 class="text-xl font-bold text-red-500">Error</h3>
      <p class="text-sm text-red-400">{{ status.message }}</p>
      <button
        @click="status.state = ''"
        class="mt-4 px-4 py-2 border border-violet-300 rounded hover:bg-violet-300 hover:text-black transition"
      >
        Volver al formulario
      </button>
    </div>
  </div>
</div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const fields = [
  { id: 'name', label: 'Nombre', type: 'text', placeholder: '' },
  { id: 'email', label: 'Email', type: 'email', placeholder: '' },
  { id: 'subject', label: 'Asunto', type: 'text', placeholder: '' },
  { id: 'message', label: 'Mensaje', type: 'text', placeholder: '' }
]

const formData = reactive<Record<string, string>>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive<Record<string, string>>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const rippleRefs: Record<string, HTMLElement | null> = reactive({})
const isSending = ref(false)

const status = reactive({
  state: '', // '', 'sending', 'success', 'error'
  message: ''
})

function triggerWave(id: string) {
  const el = rippleRefs[id]
  if (!el) return

  el.classList.remove('scale-x-100')
  void el.offsetWidth
  el.classList.add('scale-x-100')

  setTimeout(() => el?.classList.remove('scale-x-100'), 600)
}

async function handleSubmit() {
  // Resetear errores
  Object.keys(errors).forEach(key => (errors[key] = ''))

  let hasError = false

  // Validación nombre
  if (!formData.name) {
    errors.name = 'Este campo es obligatorio'
    hasError = true
  } else if (formData.name.length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
    hasError = true
  }

  // Validación asunto
  if (!formData.subject) {
    errors.subject = 'Este campo es obligatorio'
    hasError = true
  } else if (formData.subject.length < 4) {
    errors.subject = 'El asunto debe tener al menos 4 caracteres'
    hasError = true
  }

  // Validación mensaje
  if (!formData.message) {
    errors.message = 'Este campo es obligatorio'
    hasError = true
  } else if (formData.message.length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    hasError = true
  }

  // Validación email
  const email = formData.email
  const betterEmailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/
  const [local, domain] = email.split('@')
  const domainParts = domain?.split('.') ?? []
  const domainName = domainParts[0]
  const tld = domainParts[1]
  const fakeDomains = ['example.com', 'test.com', 'mailinator.com', 'tempmail.com']

  if (
    !betterEmailRegex.test(email) ||
    email.length < 6 ||
    !domain ||
    !domain.includes('.') ||
    (tld?.length ?? 0) < 2 ||
    /^\d+$/.test(local) ||
    /^\d+$/.test(domainName) ||
    fakeDomains.includes(domain)
  ) {
    errors.email = 'Correo electrónico no válido'
    hasError = true
  }

  if (hasError) return

  isSending.value = true
  status.state = 'sending'
  status.message = 'Por favor espera...'

  try {
    const response = await fetch('https://back-portfolio-b9po.onrender.com//api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    const responseData = await response.json()

    if (!response.ok) {
      if (Array.isArray(responseData.message)) {
        for (const msg of responseData.message) {
          const match = msg.match(/^(\w+)\s/)
          const field = match?.[1]
          if (field && field in errors) {
            errors[field] = msg
          }
        }
        return
      }

      throw new Error(responseData.message || 'Error desconocido')
    }

    status.state = 'success'
    status.message = 'Gracias por tu mensaje. Te responderé pronto.'
    Object.keys(formData).forEach(key => (formData[key] = ''))
      
    // Aquí agregas el cierre automático
    setTimeout(() => {
      status.state = ''
    }, 4000)

  } catch (err) {
    console.error(err)
    status.state = 'error'
    status.message = 'No se pudo enviar el mensaje. Intenta más tarde.'
  } finally {
    isSending.value = false
  }
  
}
</script>

