import { ref, computed } from "vue";

export default function() {
    const title = ref("HELLO WORLD");
    const titleLengMessage = computed( () => {
        return title.value.length + " adet karakter sayısı yazdınız."
      })

      return {title, titleLengMessage}
}