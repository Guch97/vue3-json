/*
 * @Author: xs
 * @Date: 2023-05-09 10:58:39
 */
import { defineComponent, reactive, ref, computed, watchEffect } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const renderHello = (number: number) => {
  return number === 12 && <HelloWorld age={"1321"}></HelloWorld>;
};

export default defineComponent({
  name: "App",
  methods: {},
  mounted() {
    console.log("1 :>>> ", 1); //xs
  },
  setup(props, { slots, attrs, emit }) {
    const data = reactive({
      nameAge: "joke",
    });
    const nameRef = ref("jocky");
    // setInterval(() => {
    //   data.nameAge += "1";
    // }, 1000);
    // setInterval(() => {
    //   nameRef.value += "1";
    // }, 1000);
    const computedName = computed(() => {
      return nameRef.value + "2";
    });
    watchEffect(() => {
      console.log("nameRef.value :>>> ", nameRef.value); //xs
    });
    return () => {
      return (
        <div>
          <img></img>
          <p>{data.nameAge}</p>
          <p>{nameRef.value}</p>
          <p>{computedName.value}</p>
          {renderHello(12)}
        </div>
      );
    };
  },
});
