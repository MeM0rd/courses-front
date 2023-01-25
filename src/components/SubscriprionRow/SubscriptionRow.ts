import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";
import Subscription from "@/adapters/Subscription";

@Component({
    components: {

    }
})
export default class SubscriptionRow extends Vue {
    @Prop() subscriptions!: Subscription;

    @Watch('subscriptions') jdsksjd() {
        console.log(this.subscriptions);
    }

    click() {
        const data = {
            'id': this.subscriptions.id,
            'user_id': 1,
            'name': this.subscriptions.name,
            'cost': this.subscriptions.cost,
            'currency': this.subscriptions.currency,
            'note': this.subscriptions.note
        };

        this.$emit('save', data);
    }
}
