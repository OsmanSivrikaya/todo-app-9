import { ref, watchEffect } from "vue";

export default function(){
    const searchText = ref("");
    const isTyping = ref(false);

    // watch eski yeni datayı göstermek için kullanılır
    // watch(searchText, () => {
    //   if (searchText.value.length > 0) {
    //     isTyping.value = true;

    //     setTimeout(() => {
    //       isTyping.value = false;
    //     }, 1000)
    //   }
    // })

    //watch effect bize onInvalidate değerini verir buda değişkenin durumunu gösterir
    const stop = watchEffect((onInvalidate) => {
      if (searchText.value.length > 0) {
        isTyping.value = true;

        const typing = setTimeout(() => {
          isTyping.value = false;
          //watchEffectin izlemeyi bırakması için kendisini call edebilirsin
          //stop();
        }, 1000)

        onInvalidate(() => clearTimeout(typing))
      }
    })

    return {isTyping, searchText}
}