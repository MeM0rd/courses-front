import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import router from "@/router";

@Component({
    methods: {
        router() {
            return router
        }
    },
    components: {
    }
})
export default class Home extends Vue {
    private authModal = true;
}
