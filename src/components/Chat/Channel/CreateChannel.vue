<template>
    <portal to="createChannelOverlayDest">
        <v-overlay
                :value="overlay"
                :absolute="absolute"
                :opacity="opacity"
                :z-index="zIndex"
                class="custom-overlay">
            <v-card class="createChannel">
                <v-form>
                    <v-container>
                        <v-card-title class="justify-center">New channel</v-card-title>
                        <v-text-field id="channel-name" label="Channel name" filled shaped></v-text-field>
                        <v-row>
                            <v-col cols="6">
                                <v-btn width="100%" color="#3b3b3b" @click="cancel">Cancel</v-btn>
                            </v-col>

                            <v-col cols="6">
                                <v-btn width="100%" color="#4f4f4f" @click="save">Create</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card>
        </v-overlay>
    </portal>
</template>

<script>
    import {Portal} from 'portal-vue'
    import { mapGetters } from 'vuex'
      
    export default {
        name: "CreateProject",
        props: {
            chatId: String
        },
        data() {
            return {
                overlay: false,
                absolute: true,
                opacity: 0.46,
                zIndex: 999
            };
        },
        components: {
            Portal
        },
        computed: mapGetters("project", ["getProjectIdByName"]),
        methods: {
            save: function () {
                let channel_name = document.getElementById("channel-name").value;

                const uuidv1 = require('uuid/v1');
                const component = {
                    element: {
                        chatid: this.chatId,
                        channelid: uuidv1(),
                        name: channel_name
                    },
                    projectid: this.getProjectIdByName(this.$route.params.projectName),
                    type: "channel",
                    action: "create"
                };
                this.$root.websocket.sendJson(component);
                this.overlay = !this.overlay;
            },
            cancel: function () {
                this.overlay = !this.overlay;
            }
        }
    };
</script>

<style scoped>
    .createChannel {
        padding: 5%;
        width: 500px;
        height: auto;
        overflow: hidden;
    }

    >>> .v-text-field input {
        text-align: center;
    }

    .v-card-item {
        margin-top: 2%;
        transition: background-color 1s ease;
    }

    .v-card-item:hover {
        cursor: pointer;
        background-color: #5e5e5e;
    }
</style>
