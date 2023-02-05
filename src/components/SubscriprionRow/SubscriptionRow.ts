import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import Subscription from "@/adapters/Subscription";
import {CurrencyType} from "@/@types/CurrencyType";

const items = [
    CurrencyType.RUBLE,
    CurrencyType.DOLLAR,
    CurrencyType.EURO,
]

@Component({
    components: {

    }
})
export default class SubscriptionRow extends Vue {
    @Prop() subscriptions!: Subscription;

    private items = items;

    private saveRow() {
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

    private deleteRow() {
        const data = {
            'id': this.subscriptions.id,
            'user_id': 1,
        }

        this.$emit('delete', data)
    }
}
