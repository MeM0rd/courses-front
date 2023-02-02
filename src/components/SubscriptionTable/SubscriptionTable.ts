import Vue from 'vue';
import SubscriptionRow from '@/components/SubscriprionRow/SubscriptionRow.vue';
import {Component, Prop, Watch} from "vue-property-decorator";
import Subscription from "@/adapters/Subscription";

const headers = [
    {text: 'Название', value: 'name', sortable: false},
    {text: 'Стоимость', value: 'cost'},
    {text: 'Валюта', value: 'currency'},
    {text: 'Заметки', value: 'note', sortable: false},
];

@Component({
    components: {
        SubscriptionRow
    }
})
export default class SubscriptionTable extends Vue {
    @Prop() subscriptions!: Array<Subscription>;

    private headers = headers;
}
