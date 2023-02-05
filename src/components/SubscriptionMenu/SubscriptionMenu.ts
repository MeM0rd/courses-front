import Vue from "vue";
import {Component} from "vue-property-decorator";
import AddRowModal from "@/components/AddRowModal/AddRowModal.vue";

@Component({
    components: {
        AddRowModal
    }
})
export default class SubscriptionMenu extends Vue {
    private search = '';

    private searchSubscription() {
        this.$emit('search', this.search);
    }
}
