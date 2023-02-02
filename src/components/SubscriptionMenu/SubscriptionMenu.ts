import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
    components: {

    }
})
export default class SubscriptionMenu extends Vue {
    private search = '';

    private searchSubscription() {
        this.$emit('search', this.search);
    }
}
