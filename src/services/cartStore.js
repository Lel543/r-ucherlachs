import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
export const cart = ref([])

export const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
export const totalItems = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  )
  
export function addToCart(product) {
  const existingProduct = cart.value.find((item) => item.id === product.id)
  if (existingProduct) {
    existingProduct.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
  toast.success('Produkt zum Warenkorb hinzugefügt', {
    style: { fontSize: '1rem' } 
  })
  
}

export function removeFromCart(index) {
  cart.value.splice(index, 1)
}

export function increaseQuantity(index) {
  cart.value[index].quantity++
}

export function decreaseQuantity(index) {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity--
  }
}
