// import something here
import Vuelidate from 'vuelidate'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
//}
export default async ({ Vue }) => {
  Vue.use(Vuelidate)
}
