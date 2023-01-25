import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {userMapper} from '@/store/user';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

const Mapper = Vue.extend({
    computed: userMapper.mapState(['authStage']),
    methods: userMapper.mapActions(['getStatus'])
})

@Component({
    components: {
    }
})
export default class EmailAuthForm extends Mapper {
    private email = '';
    private password = '';

    private tryStatus() {
        this.getStatus().then();
    }

    onSubmit(): void {
        const data = {
            'email': this.email,
            'password': this.password
        };

        this.$emit('submit', data);
    }
}
