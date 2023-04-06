<template>
<q-page-container>
    <q-page class="container">
        <!-- <div id="top"></div>   -->
        <q-img src="~assets/attendance-logo.png" alt="imge" class="attendance-img head q-mx-auto q-mt-xl" />
        <p id="text-head" class="head q-my-lg"><b>Attendance</b></p>
        <q-form @submit.prevent="onSubmit" class="q-mt-xl">
            <q-input type="text" class="input q-my-md  q-mx-auto" v-model="$v.empId.$model" label="Employee ID" :error="$v.empId.$error" error-message="Field required">
                <template v-slot:prepend>
                    <q-icon name="person" class="primary-color" />
                </template>
            </q-input>
            <q-input :type="isPwd ? 'password' : 'text'" label="Password" class="primary input q-mx-auto" v-model="$v.password.$model" :error="$v.password.$error" error-message="Field required">
                <template v-slot:append>
                    <q-icon v-if="$v.$error==false" :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointe primary-color" @click="isPwd = !isPwd" />
                </template>
                <template v-slot:prepend>
                    <q-icon name="lock" class="primary-color" />
                </template>
            </q-input>
            <q-btn type="submit" class="btn q-mt-xl q-mx-auto" rounded icon-right="login" @click="onSubmit" label="Sign-in" />
        </q-form>
    </q-page>
</q-page-container>
</template>

<script>
import {
    required
} from 'vuelidate/lib/validators'

export default {
    name: 'PageIndex',
    data() {
        return {
            empId: '',
            password: '',
            isPwd: true
        }
    },
    validations: {
        empId: {
            required,
        },
        password: {
            required,
        }
    },
    methods: {
        onSubmit() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                // this.$q.notify({
                //     color: 'red-4',
                //     textColor: 'white',
                //     icon: 'warning',
                //     message: 'Form not valid'
                // })
            } else {
                this.$q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Form submitted'
                })
                this.$router.push('/scanner')
            }

        }
    },

}
</script>

<style scoped>
.container {
    overflow-y: hidden;
}

.attendance-img {
    width: 100px;
    height: 100px;
    margin-top: 100px;
}

#text-head {
    font-size: 30px;
    color: rgb(108, 197, 177);
    text-align: center;
    margin-bottom: 100px;
}

.input {
    width: 300px;
}

.head {
    display: block;
}

.primary-color {
    color: rgb(108, 197, 177);

}

.btn {
    display: block;
    width: 150px;
    background-color: rgb(108, 197, 177);
    color: white;
}
</style>
