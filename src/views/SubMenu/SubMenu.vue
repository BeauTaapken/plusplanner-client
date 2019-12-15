<template>
    <div>
        <v-navigation-drawer fixed class="project-nav" color="#2e3136">
            <v-list-item>
                <v-list-item-content>
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
                        <v-list-item-title>Add component</v-list-item-title>
                        <v-list-item-action>
                            <v-icon color="grey lighten-1">mdi-note-plus</v-icon>
                        </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </v-list-item-action>
            </v-list-item>

            <CreateComponent ref="createComponent" />

            <SubMenuHeader
                    v-for="data in this.usedData.components"
                    v-bind:key="data.componentname"
                    v-bind:component-name="data.componentname"
                    v-bind:component-item="data.parts"
            />
            <SubMenuChatHeader
                    v-for="data in this.usedData.chats"
                    v-bind:key="data.chatid"
                    v-bind:component-name="data.name"
                    v-bind:component-item="data.channels"
            />
        </v-navigation-drawer>

        <router-view name="board" :key="this.$route.params.contentName"/>
        <router-view name="chat" :key="this.$route.params.contentName"/>
    </div>
</template>

<script>
    import SubMenuHeader from "./SubMenuHeader";
    import SubMenuChatHeader from "./SubMenuChatHeader";
    import CreateComponent from "@/components/Component/CreateComponent";

    export default {
        name: "SubMenu",
        components: {SubMenuChatHeader, SubMenuHeader, CreateComponent},
        data: function () {
            return {
                usedData: null,
                projectName: this.$route.params.projectName
            };
        },
        created() {
            this.load();
        },
        methods: {
            load: function () {
                let json = this.$parent.projectData;
                let res = json.projects.filter(
                    d => d.projectname === this.$route.params.projectName
                );
                this.usedData = res[0];
            },
            addComponent: function() {
                this.$refs.createComponent.overlay = true;
            }
        }
    };
</script>

<style scoped>
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
        height: 100vh !important;
        width: 13% !important;
        float: left !important;
        margin-left: calc(4% - 1px) !important;
    }

    .project-header {
        font-size: 35px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: white;
    }
</style>
