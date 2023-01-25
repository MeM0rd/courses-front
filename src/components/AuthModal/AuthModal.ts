import Vue from 'vue';
import EmailAuthForm from '@/components/EmailAuthForm/EmailAuthForm.vue';
import EmailRegisterForm from '@/components/EmailRegisterForm/EmailRegisterForm.vue';
import {Component} from 'vue-property-decorator';
import AuthStage from '@/components/AuthModal/AuthStage';
import {userMapper} from "@/store/user";
import {Raw} from "@/@types/Raw";

const Mapper = Vue.extend({
    computed: {
        ...userMapper.mapState(['authStage','currentUser']),
        ...userMapper.mapGetters(['currentUser'])
    },
    methods: {
        ...userMapper.mapMutations(['setAuthStage']),
        ...userMapper.mapActions(['loginByEmail','registerByEmail']),
    }
})

@Component({
    components: {
        EmailAuthForm,
        EmailRegisterForm,
        AuthStage,
    }
})
export default class AuthModal extends Mapper {
    private isAuth = true;
    private isAuthModalOpen = false;

    submitLoginByEmail(data: Raw): void {
        this.loginByEmail(data)
            .then((response) => {
                const user = response;
                this.isAuthModalOpen = false;
            })
            .catch()
    }

    submitRegisterByEmail(data: Raw): void {
        this.registerByEmail(data)
            .then((response) => {
                const data = response;
                this.isAuthModalOpen = false;
            })
            .catch()
    }
}
