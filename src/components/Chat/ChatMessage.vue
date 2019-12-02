<template>
    <v-row class="message-box">
        <v-spacer v-if="sender"></v-spacer>
        <v-card color="rgb(46, 49, 54)" class="message" cols="12">
            <v-card-title>
                {{messageContent}}
            </v-card-title>
            <div class="time"> {{sendDate.substring(11, 19)}}</div>
        </v-card>
        <v-spacer v-if="!sender"></v-spacer>
    </v-row>
</template>

<script>
    export default {
        name: "ChatMessage",
        props: {
            messageId: Number,
            channelId: Number,
            userId: Number,
            messageContent: String,
            sendDate: String,
            sender: Boolean
        }
    }
</script>

<style scoped>
    >>> .v-card__title {
        color: white;
    }

    .message-box {
        margin: 1% 2%;
    }

    .message {
        width: 60%;
        margin: 1% 2%;
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