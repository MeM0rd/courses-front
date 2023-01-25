import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import SubscriptionTable from '@/components/SubscriptionTable/SubscriptionTable.vue';
import SubscriptionAdapter from "@/adapters/Subscription";
import {userMapper} from "@/store/user";
import {Raw} from "@/@types/Raw";

const Mapper = Vue.extend({
    methods: {
        ...userMapper.mapActions(['getStatus', 'loginByEmail','getSubscriptions', 'saveSubscriptions'])
    },
    computed: {
        ...userMapper.mapGetters(['subscriptionsData']),
        ...userMapper.mapState(['status'])
    }
})

@Component({
    components: {
        SubscriptionTable
    }
})
export default class Subscription extends Mapper {
    private user: Array<SubscriptionAdapter> = [];

    mounted() {
        this.getStatus().then(() => {
            const data = {
                'user_id': 1
            };
            this.getSubscriptions(data).then(() => {
                console.log(1);
            })
        });
    }

    submitSaveSubscriptions(data: Raw) {
        this.saveSubscriptions(data).then()
    }
}
