<template>
    <div style="height: 100vh; min-height: 100vh; max-height: 100vh; position: relative" >
        <v-navigation-drawer
            id="nav-drawer"
            permanent
            class="project-nav" 
            color="#2e3136"
            >
            <v-list-item style="position: sticky; top: 0; background-color: #2e3136; z-index: 100">
                <v-list-item-content >
                    <v-list-item-title class="project-header">{{
                        projectName
                        }}
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-menu offset-y :dark="true" :min-width="220" bottom left>
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                        <v-icon color="grey lighten-1">mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="addComponent">
                            <v-list-item-title>Add part</v-list-item-title>
                            <v-list-item-action>
                                <v-icon color="grey lighten-1">mdi-note-plus</v-icon>
                            </v-list-item-action>
                        </v-list-item>
                        <v-list-item @click="addChat">
                            <v-list-item-title>Add chat</v-list-item-title>
                            <v-list-item-action>
                                <v-icon color="grey lighten-1">mdi-chat-processing-outline</v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </v-list-item-action>
            </v-list-item>

            <CreatePart ref="createComponent" />
            <CreateChat ref="createChat" />

            <SubMenuItem
                    v-for="data in this.usedData.parts"
                    v-bind:key="data.partid"
                    v-bind:part-name="data.partname"
            />
            <SubMenuChatHeader
                    v-for="data in this.usedData.chats"
                    :ref="data.name"
                    v-bind:key="data.chatid"
                    v-bind:chat-id="data.chatid"
                    v-bind:chat-name="data.name"
                    v-bind:channels="data.channels"
            />
            <UserSettingsHolder/>
        </v-navigation-drawer>

        <router-view name="board" :key="this.$route.fullPath"/>
        <router-view name="chat" :key="this.$route.fullPath"/>
    </div>
</template>

<script>
    import SubMenuChatHeader from "./SubMenuChatHeader";
    import CreatePart from "../../components/Part/CreatePart";
    import CreateChat from "../../components/Chat/CreateChat";
    import SubMenuItem from "./SubMenuItem";
    import { mapState } from "vuex"
    import UserSettingsHolder from "../../components/UserSettings/UserSettingsHolder";

    export default {
        name: "SubMenu",
        components: {UserSettingsHolder, SubMenuItem, CreatePart, SubMenuChatHeader, CreateChat},
        data: function () {
            return {
                usedData: null,
                projectName: this.$route.params.projectName,
                mini: true
            };
        },
        created() {
            this.load();
        },
        computed: mapState({
            project: state => state.project
        }),
        methods: {
            load: function () {
                let json = this.project.projects;
                let res = json.filter(
                    d => d.projectname === this.$route.params.projectName
                );
                this.usedData = res[0];
            },
            addComponent: function() {
                this.$refs.createComponent.overlay = true;
            },
            addChat: function() {
                this.$refs.createChat.overlay = true;
            }
        }
    };
</script>

<style scoped>
    #nav-drawer {
        max-width: 250px;
        margin: 0;
        position: relative;
        width: calc(100% - 80px);
        overflow-y: hidden;

    }

    >>>.v-navigation-drawer__content {
        height: 75%;
    }

    >>> .v-list-group .v-list-item__title {
        color: white;
        height: auto;
    }

    >>> .v-list-group .v-icon {
        color: white;
    }

    >>> .theme--light.v-list {
        background-color: #2e3136;
    }

    .project-nav {
        background-color: #2e3136;
    }

    .project-header {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: white;
    }
</style>
