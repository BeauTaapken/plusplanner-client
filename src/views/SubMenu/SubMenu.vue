<template>
    <div>
        <v-navigation-drawer fixed class="project-nav" color="#2e3136">
            <v-list>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-title class="project-header">{{
                            projectName
                            }}
                        </v-list-item-title>
                    </template>
                </v-list-group>
            </v-list>
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

    export default {
        name: "SubMenu",
        components: {SubMenuChatHeader, SubMenuHeader},
        data: function () {
            return {
                usedData: null,
                projectName: this.$route.params.projectName
            };
        },
        created() {
            this.load();
        },
        updated() {
            this.load();
        },
        methods: {
            load: function () {
                let json = this.$parent.projectData;
                let res = json.projects.filter(
                    d => d.projectname === this.$route.params.projectName
                );
                this.usedData = res[0];
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
    }
</style>
