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
            createUUID: function () {
                const uuidv1 = require('uuid/v1');
                return uuidv1();
            },
            getSenderId: function() {
                let token = this.$session.get("plusplannerToken");
                let parts = token.split('.');
                let payload = JSON.parse(atob(parts[1]));
                return payload.uid;

            },
            sendMessage: function () {
                if (this.text !== "") {
                    let element = {
                        element: {
                            messageid: this.createUUID(),
                            channelid: this.$parent.getChannelId,
                            senderid: this.getSenderId(),
                            content: this.text,
                            senddate: new Date().toDateString(),
                        },
                        projectid: this.$parent.getProjectId,
                        type: "message",
                        action: "create"
                    };
                    this.$root.websocket.sendJson(element);
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
            this.getSenderId();
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