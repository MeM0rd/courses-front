import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
    components: {
    }
})
export default class EmailRegisterForm extends Vue {
    private email = '';
    private password = '';
    private name = '';
    private phone = '';

    onSubmit() {
        const data = {
            'email': this.email,
            'password': this.password,
            'name': this.name,
            'phone': this.phone
        }

        this.$emit('submit', data);

        this.email = '';
        this.password = '';
        this.name = '';
        this.phone = '';
    }
}
