import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import SubscriptionTable from '@/components/SubscriptionTable/SubscriptionTable.vue';
import SubscriptionAdapter from "@/adapters/Subscription";
import SubscriptionMenu from '@/components/SubscriptionMenu/SubscriptionMenu.vue'
import {userMapper} from "@/store/user";
import {Raw} from "@/@types/Raw";

const Mapper = Vue.extend({
    methods: {
        ...userMapper.mapActions(['getStatus', 'loginByEmail','getSubscriptions', 'saveSubscriptions','searchSubscription','deleteSubscription'])
    },
    computed: {
        ...userMapper.mapGetters(['subscriptionsData']),
        ...userMapper.mapState(['status'])
    }
})

@Component({
    components: {
        SubscriptionTable,
        SubscriptionMenu,
    }
})
export default class Subscription extends Mapper {
    private user: Array<SubscriptionAdapter> = [];

    mounted() {
        this.getStatus().then(() => {
            const data = {
                'user_id': 1
            };
            this.getSubscriptions(data).then()
        });
    }

    private doSaveOrCreate(data: Raw) {
        this.saveSubscriptions(data).then(() => {
            this.$router.go(0);
        })
    }

    private doSearch(data: string) {
        this.searchSubscription(data).then()
    }

    private doDelete(data: SubscriptionAdapter) {
        this.deleteSubscription(data).then(() => {
            this.$router.go(0);
        })
    }
}
