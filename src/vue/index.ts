import { createApp } from 'vue'

import TempExample from '@components/TempExample.vue'

const app = createApp({
	components: {
		TempExample
	}
})

app.mount('#app')
