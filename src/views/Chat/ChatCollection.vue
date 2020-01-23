<template>
    <div class="component-content">
            <div class="text-header" v-text="this.usedData.name"></div>
            <v-row style="margin-left: 2px">
                <v-col cols="10" class="col-chat">
                    <MessageContent>

                    </MessageContent>
                </v-col>
                <v-col cols="2" class="col-chat">
                    <ChatParticipants></ChatParticipants>
                </v-col>
            </v-row>
        </div>
</template>

<script>

    import ChatParticipants from "../../components/Chat/ChatParticipants";
    import MessageContent from "../../components/Chat/MessageContent";
    import { mapState } from "vuex"
    export default {
        name: "ChatCollection",
        components: {MessageContent, ChatParticipants},
        data: function () {
            return {
                usedData: null
            }
        },
        methods: {
            load: function() {
                let json = this.project.projects;
                let res = json.filter(d => d.projectname === this.$route.params.projectName);
                let t = res[0].chats.filter(d => d.name === this.$route.params.chat);
                this.usedData = t[0].channels.filter(ch => ch.name === this.$route.params.channel)[0];
            }
        },
        computed: mapState({
            project: state => state.project
        }),
        created() {
            this.load();
        }
    }
</script>

<style scoped>
    .component-content {
        position: absolute;
        right: 0;
        top: 0;
        height: 100vh;
        width: calc(100% - 330px);
        background-color: #36393E;
        white-space: nowrap;
    }

    .text-header {
        padding: 1%;
        border-bottom: #1E2124 1px solid;
        max-height: 5%;
    }

    .col-chat {
        border-right: #1E2124 1px solid;
        position: relative;
        height: 95vh;
        padding: 0px;
    }
</style>