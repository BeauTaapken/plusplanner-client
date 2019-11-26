<template>
    <v-card color="rgb(46, 49, 54)" class="message">
        <v-card-title>
            {{messageContent}}
        </v-card-title>
        <div class="time"> {{sendDate.substring(11, 19)}}</div>
    </v-card>
</template>

<script>
    export default {
        name: "ChatMessage",
        props: {
            messageId: Number,
            channelId: Number,
            userId: Number,
            messageContent: String,
            sendDate: String
        }
    }
</script>

<style scoped>
    >>>.v-card__title {
        color: white;
    }

.message {
    width: 60%;
    float: right;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-right: 2%;
}

    .time {
        font-size: 13px;
        color: white;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 5px;
        margin-right: 10px;
    }
</style>