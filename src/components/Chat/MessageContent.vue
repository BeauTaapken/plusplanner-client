<template>
    <div class="message-content" id="chat">
        <ChatMessage v-for="data in getMessages"
                     v-bind:key="data.messageid"
                     v-bind:message-id="data.messageid"
                     v-bind:channel-id="data.channelid"
                     v-bind:message-content="data.content"
                     v-bind:send-date="data.senddate"
                     v-bind:user-id="data.userid"
                     v-bind:sender="getUserId === data.userid"
        ></ChatMessage>
        <ChatMessageInput></ChatMessageInput>
    </div>
</template>

<script>
    import ChatMessage from "./ChatMessage";
    import ChatMessageInput from "./ChatMessageInput";

    export default {
        name: "MessageContent",
        components: {ChatMessageInput, ChatMessage},
        data() {
            return {}
        },
        computed: {
            getMessages() {
                let comp = this;
                return comp.$parent.usedData.messages.sort(function(a, b) {
                    // convert date object into number to resolve issue in typescript
                    return  +new Date(a.senddate) - +new Date(b.senddate);
                });
            },
            getChannelId() {
                return this.$parent.usedData.channelid;
            },
            getProjectId() {
                return this.$parent.projectId;
            },
            getChatId() {
                return this.$parent.usedData.chatid;
            },
            getUserId() {
                let token = this.$session.get("plusplannerToken");
                let parts = token.split('.');
                let payload = JSON.parse(atob(parts[1]));
                return payload.uid;
            }
        },
        mounted() {
            setTimeout(function () {
                document.getElementById('chat').scrollTop = 99999999;
            }, 50);
        }
    }
</script>

<style scoped>
    .message-content {
        max-height: 85vh;
        overflow-y: scroll;
    }
</style>