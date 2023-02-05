import Vue from "vue";
import {Component} from "vue-property-decorator";
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
export default class AddRowModal extends Vue {
    private items = items;

    private name = '';
    private cost = null;
    private currency = '';
    private note = '';

    private onSubmit() {
        const data = {
            'user_id': 1,
            'name': this.name,
            'cost': this.cost,
            'currency': this.currency,
            'note': this.note
        };

        this.$emit('create', data);
    }
}
