<template>
    <div class="message-content" id="chat">
        <ChatMessage v-for="data in messages"
                     v-bind:key="data.messageid"
                     v-bind:message-id="data.messageid"
                     v-bind:channel-id="data.channelid"
                     v-bind:message-content="data.content"
                     v-bind:send-date="data.senddate"
                     v-bind:user-id="data.userid"
                     v-bind:sender="0 === data.userid"
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
            return {
                messages: []
            }
        },
        created() {
            for(let i = 0; i < 5; i++)
            {
                let json = JSON.parse(`{"messageid": ${i},"channelid": 1,"userid": 0,"content": "Testmessage","senddate": "Mon Nov 11 11:32:26 CET 2019"}`);
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