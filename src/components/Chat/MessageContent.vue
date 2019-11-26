<template>
    <div class="message-content">
        <ChatMessage v-for="data in messages"
                     v-bind:key="data.messageid"
                     v-bind:message-id="data.messageid"
                     v-bind:channel-id="data.channelid"
                     v-bind:message-content="data.content"
                     v-bind:send-date="data.senddate"
                     v-bind:user-id="data.userid"
        ></ChatMessage>
    </div>
</template>

<script>
    import ChatMessage from "./ChatMessage";

    export default {
        name: "MessageContent",
        components: {ChatMessage},
        data() {
            return {
                messages: []
            }
        },
        created() {
            let json = JSON.parse('{"messageid": 1,"channelid": 1,"userid": 0,"content": "Testmessage","senddate": "Mon Nov 11 11:32:26 CET 2019"}');
            for(let i = 0; i < 20; i++)
            {
                this.messages.push(json);
            }
        }
    }
</script>

<style scoped>
.message-content {
    max-height: 85vh;
    overflow-y:scroll;
}
</style>