<template>
    <div class="message-input-container">
        <v-row class="message-input">
            <v-col cols="11">
                <v-text-field
                        v-on:keydown="onEnter"
                        v-model="text"
                        id="message"
                        color="grey"
                        filled
                        label="Message..."
                        single-line
                        autocomplete="off"
                ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn @click="sendMessage" class="send-button" height="57" width="100" color="#4f4f4f">
                    Send
                </v-btn>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    export default {
        name: "ChatMessageInput",
        data() {
            return {
                text: "",
            }
        },
        methods: {
            sendMessage: function () {
                if (this.text !== "") {
                    this.$parent.messages.push(JSON.parse(`{"messageid": 2,"channelid": 1,"userid": 0,"content": "${this.text}","senddate": "Mon Nov 11 11:32:26 CET 2019"}`));
                    this.text = "";
                    setTimeout(function () {
                        document.getElementById('chat').scrollTop = 99999999;
                    }, 50);
                }
            },
            onEnter: function (e) {
                if (e.keyCode === 13) {
                    this.sendMessage();
                }
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    >>> .theme--light.v-label {
        color: white;
    }

    >>> .theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
        color: white;
    }

    >>> .v-btn__content {
        color: white;
    }

    .message-input-container {
        position: absolute;
        bottom: 0;
        border-top: 1px solid #1E2124;
        height: 10vh;
        width: 100%;
        overflow: hidden;
    }

    .message-input {
        margin-left: 1vh;
        margin-right: 1vh;
        margin-top: 1%;
    }
</style>