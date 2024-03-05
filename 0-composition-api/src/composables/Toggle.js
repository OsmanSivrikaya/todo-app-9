import { ref } from "vue";

export default function() {
    const show = ref(false);
    const onShow = () => {
      show.value = !show.value;
    };

    return {show, onShow}
}