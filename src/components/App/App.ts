import Vue from 'vue';
import Header from '@/components/Header/Header.vue';
import {Component} from 'vue-property-decorator';

@Component({
    components: {
        Header,
    }
})
export default class App extends Vue {
    private isAuthModalOpen = true;
}
