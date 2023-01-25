import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import AuthModal from '@/components/AuthModal/AuthModal.vue';

@Component({
    components: {
        AuthModal,
    }
})
export default class Header extends Vue {
}
